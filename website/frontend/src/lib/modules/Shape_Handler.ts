class Shape {
    xPos: number;
    yPos: number;
    gamectx: CanvasRenderingContext2D;
    gameCanvas: HTMLCanvasElement;

    draw(): void {
    }

    constructor(xPosMouse: number, yPosMouse: number, gamectx: CanvasRenderingContext2D, gameCanvas: HTMLCanvasElement) {
        this.gamectx = gamectx;
        this.gameCanvas = gameCanvas;
        this.xPos = xPosMouse;
        this.yPos = yPosMouse;

    }

    setColor(rgba: number): void {
        console.log("settings color: " + rgba);
    }

    hideMe(): void {
        console.log("Hiding me :(");
    }

    displayMe(): void {
        console.log("Displaing me :)");
    }
}

export class Circle extends Shape {
    radius: number;
    endAngle: number = 2;

    constructor(xPosMouse: number, yPosMouse: number, radius: number, endAngle: number, gamectx: CanvasRenderingContext2D, gameCanvas: HTMLCanvasElement) {
        super(xPosMouse, yPosMouse, gamectx, gameCanvas);
        this.radius = radius;
        this.endAngle = endAngle;

        this.draw();
    }

    draw() {
        this.gamectx.beginPath();
        this.gamectx.fillStyle = "rgba(150, 255, 140, 0.8)";
        this.gamectx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * this.endAngle);
        this.gamectx.closePath();
        this.gamectx.fill();
    }
}

export class Rectangle extends Shape {

    draw() {
    }
}

export class Painter {
    xPosMouse: number;
    yPosMouse: number;
    currentShape = "circle";
    painting = true; // Should be false, but for development I keep true
    shapes: { [key: string]: any };
    drawInterval: ReturnType<typeof setInterval>;
    gamectx: CanvasRenderingContext2D;
    gameCanvas: HTMLCanvasElement;

    constructor(gameCanvas: string) {
        // Canvas and context
        this.gameCanvas = document.getElementById(gameCanvas) as HTMLCanvasElement;
        if (this.gameCanvas == null) {
            throw new Error("Game Canvas is null!");
        }
        this.gamectx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2D;
        this.gameCanvas.height = window.innerHeight;
        this.gameCanvas.width = window.innerWidth;

        // Event listeners
        this.gameCanvas.addEventListener('mousemove', (Event) => {
            this.xPosMouse = Event.clientX;
            this.yPosMouse = Event.clientY - this.gameCanvas.getBoundingClientRect().top;
        });

        this.gameCanvas.addEventListener('mousedown', (Event) => {
            this.drawInterval = setInterval(() => this.draw(Event), 50);
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

        // Shapes and stuff
        this.shapes = { rectangles: [], circles: [] };
        this.currentShape = "circle";
    }

    draw(Event: MouseEvent) {
        if (this.currentShape == "circle") {
            this.shapes.circles.push(new Circle(this.xPosMouse, this.yPosMouse, 10, 2, this.gamectx, this.gameCanvas));
        } else if (this.currentShape == "rectangle") {
            this.shapes.rectangles.push(new Rectangle(this.xPosMouse, this.yPosMouse, this.gamectx, this.gameCanvas));
        }
        // console.dir(this.shapes);
    }

    shapeInformationToJSON(): string {
        console.log("JSONifying all shape information and returns it");
        return "";
    }

    loadContext(shapesJSON: string): void {
        console.log("loading context")
    }

    updateContext(shapesJSON: string): void {
        console.log("updating context");
    }

    togglePainting(): void {
        this.painting = !this.painting;
    }
}










