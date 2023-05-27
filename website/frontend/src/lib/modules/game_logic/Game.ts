import { Rectangle, Circle, Painter } from '$lib/modules/game_logic/Painting_Handler'
import { SettingsHandler } from '$lib/modules/game_logic/Settings_Handler'
import { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { setIntervalAsync, clearIntervalAsync } from 'set-interval-async';
import type { FireAuth_Handler } from '../stores';

//TODO:
//  1.  Same as 4. but create a canvas in database for every newly created user
//      and let that user get read / write privilages.
//  4.  logic to connect / initate new canvas
//      - initiate canvas -> invite email to canvas
//  5.  ^logic on server side
//  7.  Clear canvas
//  8.  Refreshing the page should not cause the person to log out or loose
//      connection to current canvas. Low priority
//  9.  use logged in user email instead of localstorage (see network)
//  10. Set custom name to canvas so it is not required to invite with the generated canvas id
//  11. (inside connector(Host/Client) change so the constructor load canvas id and throws error if not successful)

export class Game {
    // Might not need to save canvasID in Game
    canvasID: string;
    painter: Painter;
    settingsHandler: SettingsHandler;
    networker: NetworkHandler;
    intervalAsyncTimer: any;

    constructor() {

        window.onbeforeunload = () => {
            this.cleanUp()
        }
    }

    async transmitShapes() {
        // Fix logic for this some time
        if (this.painter.stoppedPaintingJustNow) {
            this.painter.stoppedPaintingJustNow = false;
            return;
        }
        // If an existing canvas is being connected to, the load of it needs to
        // happen before this so there is no risk of sending an empty canvas to
        // the backend and thus overwriting it. This should logic probably differs from host and client
        if (!this.painter.controlsCanvas || !this.painter.hasPainted) {
            return;
        }
        this.painter.hasPainted = false; // transmitting changes, thus hasn't painted anything from now on
        let message = this.painter.getShapes();
        try {
            let response = await this.networker.updateShapes(message);
        } catch (e) {
            console.log("Transimitting shapes didn't go as planned")
        }
    }

    protected initTransmissions(): void {
        this.intervalAsyncTimer = setIntervalAsync(async () => {
            await this.transmitShapes()
        }, 50)

        // Remove duplicates of shapes every 0.5 seconds
        setInterval(() => {
            if (this.painter.controlsCanvas) {
                this.painter.thinCanvas()
            }
        }, 5000)
    }

    // Stuff that can't happen before mounting the game page
    run(): void {
        // console.log("initCanvas")
    }

    cleanUp(): void {
        clearIntervalAsync(this.intervalAsyncTimer);
        if (this.painter.controlsCanvas) {
            this.networker.removeCanvasControl()
        }
    }

    async canvasExists(): Promise<boolean> {
        let response: boolean;
        try {
            response = await this.networker.canvasExists();
            return response
        } catch (e) {
            // maybe?
            return (e as boolean);
        }
    }
}

export class GameHost extends Game {

    constructor(gameCanvas: string, authHandler: FireAuth_Handler) {
        super();
        this.painter = new Painter(gameCanvas, false)
        this.networker = new NetworkHandler(this.painter, authHandler);
        this.settingsHandler = new SettingsHandler(this.painter, this.networker, this);
    }

    // Stuff that can't happen before mounting the game page
    async run() {
        console.log("Host: running game")
        this.settingsHandler.run();
        this.painter.run();
        await this.networker.loadCanvasID()
        this.networker.run();
        this.initTransmissions();
    }

    async initiateCanvas(): Promise<boolean> {
        let itWentFine: boolean = false;
        try {
            await this.networker.loadCanvasID();
            this.canvasID = this.networker.canvasID
            console.log(this.canvasID)
            console.log(" ")
            console.log(this.networker.canvasID)
            itWentFine = true;
        } catch (e) {
            console.log("fel i initiateCanvas")
            console.log(e)
        }
        return itWentFine;
    }

    invite(email: string): void {
        console.log("(inside GameHost) inviting email: ")
        console.log(email)
    }
}

export class GameClient extends Game {

    constructor(gameCanvas: string, canvasID: string, authHandler: FireAuth_Handler) {
        super();
        this.canvasID = canvasID;

        this.painter = new Painter(gameCanvas, false)

        this.networker = new NetworkHandler(this.painter, authHandler);
        this.networker.canvasID = this.canvasID

        this.settingsHandler = new SettingsHandler(this.painter, this.networker, this);
    }

    // Stuff that can't happen before mounting the game page Order of method
    // calls is important because some objects need to run before to initialize
    // som stuff other objects need
    run(): void {
        console.log("Client: running game")
        this.settingsHandler.run();
        this.painter.run();
        this.networker.run();
        this.initTransmissions();
    }
}
