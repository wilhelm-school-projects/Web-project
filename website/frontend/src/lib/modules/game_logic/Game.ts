import { Rectangle, Circle, Painter } from '$lib/modules/game_logic/Painting_Handler'
import { SettingsHandler } from '$lib/modules/game_logic/Settings_Handler'
import { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { setIntervalAsync, clearIntervalAsync } from 'set-interval-async';

//TODO:
//  4.  logic to connect / initate new canvas
//      - initiate canvas -> invite email to canvas
//  5.  ^logic on server side
//  7.  Clear canvas
//  8.  Refreshing the page should not cause the person to log out or loose
//      connection to current canvas. Low priority

export class Game {
    canvasID: string;
    painter: Painter;
    settingsHandler: SettingsHandler;
    networker: NetworkHandler;
    intervalAsyncTimer: any;

    constructor(canvasID: string) {
        this.canvasID = canvasID;

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

    constructor(gameCanvas: string, canvasID: string) {
        super(canvasID);
        this.painter = new Painter(gameCanvas, true)
        this.networker = new NetworkHandler(this.painter, this.canvasID);
        this.settingsHandler = new SettingsHandler(this.painter, this.networker, this);
    }

    // Stuff that can't happen before mounting the game page
    run(): void {
        console.log("Host: running game")
        this.settingsHandler.run();
        this.painter.run();
        this.networker.run();
        this.initTransmissions();
    }

    async canvasCreated(): Promise<boolean> {
        if (await this.canvasExists()) {
            console.log("canvas already exists")
            return false;
        }

        // let response: boolean;
        try {
            // response = await this.networker.canvasCreate();
            await this.networker.canvasCreate();
        } catch (e) {
            return false;
        }
        return true;
    }

    invite(email: string): void {
        console.log("(inside GameHost) inviting email: ")
        console.log(email)
    }
}

export class GameClient extends Game {

    constructor(gameCanvas: string, canvasID: string) {
        super(canvasID);
        this.painter = new Painter(gameCanvas, false)
        this.networker = new NetworkHandler(this.painter, this.canvasID);
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
