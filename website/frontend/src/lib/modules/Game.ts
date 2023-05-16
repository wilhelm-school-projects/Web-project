class Game {
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    painting: boolean = false;

    initCanvas(): void {
        // Canvas size according to device pixel ratio
        const scale = window.devicePixelRatio;
        this.gameCanvas.style.height = '{window.innerHeight}px';

        this.gameCanvas.style.width = '{window.innerWidth}px';
        this.gameCanvas.height = window.innerHeight * scale;
        this.gameCanvas.width = window.innerWidth * scale;
        this.gamectx.scale(scale, scale);

        // Eventlisteners for mouse
        this.gameCanvas.addEventListener('mousedown', () => {
            this.painting = true;
            console.log("mouse down");
        });

        this.gameCanvas.addEventListener('mouseup', () => {
            this.painting = false;
            console.log("mouse up");
        });
        console.log("this still works");
    }

    constructor(gameCanvas: string) {
        this.gameCanvas = document.getElementById(gameCanvas) as HTMLCanvasElement;
        if (this.gameCanvas == null) {
            throw new Error("Game Canvas is null!");
        }
        this.gamectx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2D;
        this.initCanvas();

    }

    run(): void {
    }

    end(): void {
    }
}

export class GameHost extends Game {
    run(): void {
        console.log("run");
        this.gamectx.fillStyle = "red";
        this.gamectx.arc(200, 200, 50, 0, Math.PI * 2);
        console.log("height: " + this.gameCanvas.height);
        console.log("width: " + this.gameCanvas.width);
        this.gamectx.fill();
    }

    end(): void {
        console.log("end");
    }

    private dummy(): void {
        console.log("private dummy");
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
