import { Rectangle, Circle, Painter } from '$lib/modules/Shape_Handler'
import { SettingsHandler } from '$lib/modules/Settings_Handler'
import { construct_svelte_component } from 'svelte/internal';

class Game {
    // Canvas and context might not be needed at Game level
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    painter: Painter;
    settingsHandler: SettingsHandler;

    constructor(gameCanvas: string) {
        this.painter = new Painter(gameCanvas);
        this.settingsHandler = new SettingsHandler(this.painter);
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
