import { Rectangle, Circle, Painter } from '$lib/modules/game_logic/Painting_Handler'
import { SettingsHandler } from '$lib/modules/game_logic/Settings_Handler'
import { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { construct_svelte_component } from 'svelte/internal';

//TODO:
//  1.  developer button to run transmit()
//  2.  read about firebase websocket variant
//  3.  implement websocket variant
//  4.  continue griding 

class Game {
    // Canvas and context might not be needed at Game level
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    painter: Painter;
    settingsHandler: SettingsHandler;
    Networker: NetworkHandler;


    constructor(gameCanvas: string) {
        this.painter = new Painter(gameCanvas);
        this.settingsHandler = new SettingsHandler(this.painter);
        this.Networker = new NetworkHandler();
        // this.transmit = this.transmit.bind(this);
        setInterval(() => this.transmit(), 500);
        // setInterval(this.transmit, 500);
        this.transmit();
    }

    async transmit() {
        // this.painter.xPosMouse = 10;
        if (this.painter.stoppedPaintingJustNow) {
            this.painter.stoppedPaintingJustNow = false;
            return;
        }
        if (!this.painter.painting) {
            return;
        }
        this.Networker.send("hej");
    }

    run(): void {
    }

    end(): void {
    }
}

export class GameHost extends Game {
    run(): void {
    }

    end(): void {
        console.log("end");
    }
}

export class GameClient extends Game {

    run(): void {
        console.log("run");
    }

    end(): void {
        console.log("end");
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
