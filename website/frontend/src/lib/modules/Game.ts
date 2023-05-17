import { Rectangle, Circle, Painter } from '$lib/modules/Shape_Handler'
import { construct_svelte_component } from 'svelte/internal';

class Game {
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    Painter: Painter;

    constructor(gameCanvas: string) {
        this.Painter = new Painter(gameCanvas);

    }

    run(): void {
    }

    end(): void {
    }
}

export class GameHost extends Game {
    run(): void {
        // this.gamectx.fillStyle = "red";
        // this.gamectx.arc(200, 200, 50, 0, Math.PI * 2);
        // this.gamectx.fill();
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
