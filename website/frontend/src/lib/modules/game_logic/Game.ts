import { Rectangle, Circle, Painter } from '$lib/modules/game_logic/Painting_Handler'
import { SettingsHandler } from '$lib/modules/game_logic/Settings_Handler'
import { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { construct_svelte_component } from 'svelte/internal';

//TODO:
//  1.  Retrieve shape information
//  2.  load existing canvas / initiate canvas (client / host) 
//  3.  login logic
//  4.  logic to connect / initate new canvas
//  5.  fix thinCanvas function

class Game {
    // Canvas and context might not be needed at Game level
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    painter: Painter;
    settingsHandler: SettingsHandler;
    Networker: NetworkHandler;



    constructor() {

        setInterval(() => this.transmitShapes(), 500);
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
        // this.painter.thinCanvas();
        let message = this.painter.getShapes();
        try {
            let response = await this.Networker.updateShapes(message);
        } catch (e) {
            console.log("Transimitting shapes didn't go as planned")
        }
    }
}

export class GameHost extends Game {

    constructor(gameCanvas: string) {
        super();
        this.painter = new Painter(gameCanvas, true)
        this.Networker = new NetworkHandler(this.painter);
        this.settingsHandler = new SettingsHandler(this.painter, this.Networker);
    }
}

export class GameClient extends Game {

    constructor(gameCanvas: string) {
        super();
        this.painter = new Painter(gameCanvas, false)
        this.Networker = new NetworkHandler(this.painter);
        this.settingsHandler = new SettingsHandler(this.painter, this.Networker);
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
