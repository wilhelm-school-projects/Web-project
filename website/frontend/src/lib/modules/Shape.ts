class Shape {

    XposMouseCanvas: number;
    YposMouseCanvas: number;
    drawInterval: ReturnType<typeof setInterval>;
    gamectx: CanvasRenderingContext2D;
    gameCanvas: HTMLCanvasElement;

    draw(Event: MouseEvent) {
        console.log("hej");
    }

    constructor(gamectx: CanvasRenderingContext2D, gameCanvas: HTMLCanvasElement) {
        this.gamectx = gamectx;
        this.gameCanvas = gameCanvas;
    }
}

export class Circle extends Shape {

    draw(Event: MouseEvent) {
        this.gamectx.beginPath();
        this.gamectx.fillStyle = "rgba(150, 255, 140, 0.8)";
        this.gamectx.arc(this.XposMouseCanvas, this.YposMouseCanvas, 10, 0, Math.PI * 2);
        this.gamectx.closePath();
        this.gamectx.fill();
    }
}

export class Rectangle extends Shape {

    draw(Event: MouseEvent) {
        this.gamectx.beginPath();
        this.gamectx.fillStyle = "rgba(150, 255, 140, 0.8)";
        this.gamectx.arc(this.XposMouseCanvas, this.YposMouseCanvas, 10, 0, Math.PI * 2);
        this.gamectx.closePath();
        this.gamectx.fill();
    }
}