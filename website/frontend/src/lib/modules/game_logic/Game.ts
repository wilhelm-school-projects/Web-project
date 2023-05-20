import { Rectangle, Circle, Painter } from '$lib/modules/game_logic/Painting_Handler'
import { SettingsHandler } from '$lib/modules/game_logic/Settings_Handler'
import { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { setIntervalAsync, clearIntervalAsync } from 'set-interval-async';

//TODO:
//  3.  login logic
//  4.  logic to connect / initate new canvas
//  7.  Clear canvas

export class Game {
    // Canvas and context might not be needed at Game level
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    painter: Painter;
    settingsHandler: SettingsHandler;
    Networker: NetworkHandler;
    intervalAsyncTimer: any;
    constructor() {
        // transmitShapes triggers 2 times for 1 click. If interval is set to
        // e.g., 1000 this doesn't happen. setIntervalAsync doesn't probably run
        // two callbacks at the same time. Why does it trigger transmit two
        // times?
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

    constructor(gameCanvas: string) {
        super();
        this.painter = new Painter(gameCanvas, true)
        this.Networker = new NetworkHandler(this.painter);
        this.settingsHandler = new SettingsHandler(this.painter, this.Networker, this);
    }
}

export class GameClient extends Game {

    constructor(gameCanvas: string) {
        super();
        this.painter = new Painter(gameCanvas, false)
        this.Networker = new NetworkHandler(this.painter);
        this.settingsHandler = new SettingsHandler(this.painter, this.Networker, this);
        this.Networker.initiateShapeRetrieval();
    }
}
export function getGameType(playerType: string): GameHost | GameClient {
    console.log(playerType);
    if (playerType == 'host') {
        return new GameHost('game-canvas');
    } else {
        return new GameClient('game-canvas');
    }
} 
