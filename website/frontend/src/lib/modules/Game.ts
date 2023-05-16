import { Rectangle, Circle } from '$lib/modules/Shape'
import { construct_svelte_component } from 'svelte/internal';

class Game {
    gameCanvas: HTMLCanvasElement;
    gamectx: CanvasRenderingContext2D;
    drawInterval: ReturnType<typeof setInterval>;
    XposMouseCanvas: number;
    YposMouseCanvas: number;
    shapes: { [key: string]: any };
    currentShape: string;

    // Painting functions
    // async draw(Event: MouseEvent) {
    //     this.gamectx.beginPath();
    //     this.gamectx.fillStyle = "rgba(150, 255, 140, 0.8)";
    //     this.gamectx.arc(this.XposMouseCanvas, this.YposMouseCanvas, 10, 0, Math.PI * 2);
    //     this.gamectx.closePath();
    //     this.gamectx.fill();
    // }
    // initCanvas(gameCanvas: string): void {

    //     // Eventlisteners for mouse
    //     // this.gameCanvas.addEventListener('mousemove', (Event) => {
    //     //     this.XposMouseCanvas = Event.clientX;
    //     //     this.YposMouseCanvas = Event.clientY - this.gameCanvas.getBoundingClientRect().top;
    //     // });

    //     // this.gameCanvas.addEventListener('mousedown', (Event) => {
    //     //     this.drawInterval = setInterval(() => this.draw(Event), 50);
    //     //     console.log("mouse down");
    //     // });

    //     // this.gameCanvas.addEventListener('mouseup', () => {
    //     //     clearInterval(this.drawInterval);
    //     //     console.log("mouse up");
    //     // });

    //     // this.gameCanvas.addEventListener('mouseout', () => {
    //     //     clearInterval(this.drawInterval);
    //     //     console.log("mouse leaves canvas");
    //     // });
    // }

    constructor(gameCanvas: string) {
        this.gameCanvas = document.getElementById(gameCanvas) as HTMLCanvasElement;
        if (this.gameCanvas == null) {
            throw new Error("Game Canvas is null!");
        }
        this.gamectx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2D;
        this.gameCanvas.height = window.innerHeight;
        this.gameCanvas.width = window.innerWidth;

        this.currentShape = "circle";
        this.shapes = { rect: new Rectangle(this.gamectx, this.gameCanvas), circle: new Circle(this.gamectx, this.gameCanvas) };

        // Event listeners for canvas
        this.gameCanvas.addEventListener('mousedown', (Event) => {
            // this.drawInterval = setInterval(() => this.shapes.at(this.currentShape).draw(Event), 50);
            console.log(this.shapes[this.currentShape].draw(Event));
            // this.drawInterval = setInterval(() => Object.entries(this.shapes)[this.currentShape], 50);
            console.log("mouse down");
        });

        this.gameCanvas.addEventListener('mouseup', () => {
            clearInterval(this.drawInterval);
            console.log("mouse up");
        });

        this.gameCanvas.addEventListener('mouseout', () => {
            clearInterval(this.drawInterval);
            console.log("mouse leaves canvas");
        });
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
