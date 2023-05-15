function initCanvas(gameCanvas: HTMLCanvasElement): void {
    // gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
    // window.addEventListener('resize', () => {
    //     // gameCanvas.width = window.innerWidth;
    //     gameCanvas.height = window.innerHeight;
    // });
}

export class GameHost {
    private gameCanvas: HTMLCanvasElement | null;
    private gamectx: CanvasRenderingContext2DSettings;

    constructor(gameCanvas: string) {
        this.gameCanvas = document.getElementById(gameCanvas) as HTMLCanvasElement;
        if (this.gameCanvas == null) {
            throw new Error("Game Canvas is null!");
        }
        this.gamectx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2DSettings;
        initCanvas(this.gameCanvas);
    }
    init(): void {
        console.log("init");
    }

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

export class GameClient {
    init(): void {
        console.log("init");
    }

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
