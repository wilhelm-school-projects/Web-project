import { Rectangle, Circle, Painter } from '$lib/modules/game_logic/Painting_Handler'
import { SettingsHandler } from '$lib/modules/game_logic/Settings_Handler'
import { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { setIntervalAsync, clearIntervalAsync } from 'set-interval-async';

//TODO:
//  4.  logic to connect / initate new canvas
//  5.  Button to invite email to existing canvas
//  7.  Clear canvas
//  8.  Refreshing the page should not cause the person to log out or loose
//      connection to current canvas. Low priority

export class Game {
    canvasID: string;
    painter: Painter;
    settingsHandler: SettingsHandler;
    Networker: NetworkHandler;
    intervalAsyncTimer: any;

    constructor(canvasID: string) {
        this.canvasID = canvasID;

        this.intervalAsyncTimer = setIntervalAsync(async () => {
            await this.transmitShapes()
        }, 50)

        // Remove duplicates of shapes every 0.5 seconds
        setInterval(() => {
            if (this.painter.controlsCanvas) {
                this.painter.thinCanvas()
            }
        }, 5000)

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
        this.painter.hasPainted = false; // transmitting changes, thus hasn't painted anything new now.
        let message = this.painter.getShapes();
        try {
            let response = await this.Networker.updateShapes(message);
        } catch (e) {
            console.log("Transimitting shapes didn't go as planned")
        }
    }


    cleanUp(): void {
        clearIntervalAsync(this.intervalAsyncTimer);
        if (this.painter.controlsCanvas) {
            this.Networker.removeCanvasControl()
        }
    }
}

export class GameHost extends Game {

    constructor(gameCanvas: string, canvasID: string) {
        super(canvasID);
        this.painter = new Painter(gameCanvas, true)
        this.Networker = new NetworkHandler(this.painter);
        this.settingsHandler = new SettingsHandler(this.painter, this.Networker, this);
    }

}

export class GameClient extends Game {

    constructor(gameCanvas: string, canvasID: string) {
        super(canvasID);
        this.painter = new Painter(gameCanvas, false)
        this.Networker = new NetworkHandler(this.painter);
        this.settingsHandler = new SettingsHandler(this.painter, this.Networker, this);
        this.Networker.initiateShapeRetrieval();
    }
}
