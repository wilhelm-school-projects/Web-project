function initCanvas(gameCanvas: HTMLCanvasElement, gamectx: CanvasRenderingContext2D): void {
    const scale = window.devicePixelRatio;
    gameCanvas.style.height = '{window.innerHeight}px';

    gameCanvas.style.width = '{window.innerWidth}px';
    gameCanvas.height = window.innerHeight * scale;
    gameCanvas.width = window.innerWidth * scale;
    gamectx.scale(scale, scale);
}

export class GameHost {
    private gameCanvas: HTMLCanvasElement;
    private gamectx: CanvasRenderingContext2D;

    constructor(gameCanvas: string) {
        this.gameCanvas = document.getElementById(gameCanvas) as HTMLCanvasElement;
        if (this.gameCanvas == null) {
            throw new Error("Game Canvas is null!");
        }
        this.gamectx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2D;
        initCanvas(this.gameCanvas, this.gamectx);

    }

    run(): void {
        console.log("run");
        this.gamectx.fillStyle = "red";
        this.gamectx.arc(200, 200, 50, 0, Math.PI * 2);
        // this.gamectx.fillRect(0, 0, 30, 30);
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

export class GameClient {

    run(): void {
        console.log("run");
    }

    end(): void {
        console.log("end");
    }

    private dummy(): void {
        console.log("private dummy");
    }
}
export function getGameType(playerType: string): GameHost | GameClient {
    console.log(playerType);
    if (playerType == 'host') {
        return new GameHost('game-canvas');
    } else {
        return new GameClient();
    }
} 
