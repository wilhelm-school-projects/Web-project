class Shape {
    xPos: number;
    yPos: number;
    color: string = "0,0,0";
    alpha: number = 1.0;
    gamectx: CanvasRenderingContext2D;
    gameCanvas: HTMLCanvasElement;


    constructor(xPosMouse: number, yPosMouse: number, color: string, alpha: number, gamectx: CanvasRenderingContext2D, gameCanvas: HTMLCanvasElement) {
        this.gamectx = gamectx;
        this.gameCanvas = gameCanvas;
        this.xPos = xPosMouse;
        this.yPos = yPosMouse;
        this.color = color;
        this.alpha = alpha;
    }

    draw(): void {
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

    constructor(xPosMouse: number, yPosMouse: number, radius: number, endAngle: number, color: string, alpha: number, gamectx: CanvasRenderingContext2D, gameCanvas: HTMLCanvasElement) {
        super(xPosMouse, yPosMouse, color, alpha, gamectx, gameCanvas);
        this.radius = radius;
        this.endAngle = endAngle;

        this.draw();
    }

    draw() {
        let [r, g, b] = this.color.split(',');
        this.gamectx.beginPath();
        this.gamectx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`; // back tick ` must be used to use variable injection
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
    painting = true; // Should be initialized to false, but for development I keep true
    stoppedPaintingJustNow = false;
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
            this.yPosMouse = Math.round(Event.clientY - this.gameCanvas.getBoundingClientRect().top);
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
        for (const key of Object.keys(this.shapes)) {
            this.shapes[key].unshift(key);
        }
        this.currentShape = "circle";
    }

    draw(Event: MouseEvent) {
        let alpha = 0.7;
        if (this.currentShape == "circle") {
            let radius = 10;
            let endAngle = 2;
            this.shapes.circles.push(new Circle(this.xPosMouse, this.yPosMouse, radius, endAngle, "00, 00, 255", alpha, this.gamectx, this.gameCanvas));
        } else if (this.currentShape == "rectangle") {
            this.shapes.rectangles.push(new Rectangle(this.xPosMouse, this.yPosMouse, "00,00,00", alpha, this.gamectx, this.gameCanvas));
        }
        // console.dir(this.shapes);
    }

    async stringifyShapeInformation(): Promise<string> {
        // console.log("JSONifying all shape information and returns it");
        let OKEY_PROPERTIES = ["endAngle", "radius", "xPos", "yPos", "color", "alpha"];
        let shapesJSON: string[] = [];
        for (const key of Object.keys(this.shapes)) { // "in" means "key" will take the value of indices, compared to "of" which will take the element value, i.e. what the index correlates to.
            shapesJSON.push(this.shapes[key]);
        }
        // console.log("shapes stringified: ");
        // console.log(JSON.stringify(shapesJSON, OKEY_PROPERTIES));
        return JSON.stringify(shapesJSON, OKEY_PROPERTIES);
        // return JSON.stringify(this, ["shapes", "endAngle"]);
    }

    loadContext(shapesJSON: string): void {
        console.log("loading context")
    }

    updateContext(shapesJSON: string): void {
        console.log("updating context");
    }
}










