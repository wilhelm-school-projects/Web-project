
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

    equals(shape: Shape): boolean {
        return true
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

    equals(shape: Circle): boolean {
        if (this.alpha === shape.alpha && this.color === shape.color && this.endAngle === shape.endAngle &&
            this.radius === shape.radius && this.xPos === shape.xPos && this.yPos === shape.yPos) {
            return true;
        } else {
        }
        return false;
    }
}

export class Rectangle extends Shape {

    draw() {
    }
}
interface Shape_Information {
    alpha: number,
    color: string,
    endAngle: number,
    radius: number,
    xPos: number,
    yPos: number
}

interface Shape_Container {
    [key: string]: Array<Shape>
}

export class Painter {
    xPosMouse: number;
    yPosMouse: number;
    currentShape: string;
    controlsCanvas: boolean;
    hasPainted = false;
    stoppedPaintingJustNow = false;
    oldLengths: { [key: string]: number }
    shapes: Shape_Container;

    drawInterval: ReturnType<typeof setInterval>;

    gamectx: CanvasRenderingContext2D;
    gameCanvas: HTMLCanvasElement;
    gameCanvasString: string;

    constructor(gameCanvas: string, controlsCanvas: boolean) {
        this.controlsCanvas = controlsCanvas
        this.gameCanvasString = gameCanvas

        // Shapes and stuff
        this.shapes = { rectangles: [], circles: [] };
        this.currentShape = "circle";
        this.oldLengths = { rectangles: 0, circles: 0 }
    }

    // Stuff that can't happen before mounting the game page
    run(): void {

        // Canvas and context
        this.gameCanvas = document.getElementById(this.gameCanvasString) as HTMLCanvasElement;
        if (this.gameCanvas == null) {
            throw new Error("Game Canvas is null!");
        }
        this.gamectx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2D;
        this.gameCanvas.height = window.innerHeight;
        this.gameCanvas.width = window.innerWidth;

        setInterval(() => this.updateHasPainted(), 500)

        // Mouse Event listeners
        this.gameCanvas.addEventListener('mousemove', (Event) => {
            this.xPosMouse = Event.clientX;
            this.yPosMouse = Math.round(Event.clientY - this.gameCanvas.getBoundingClientRect().top);
        });

        this.gameCanvas.addEventListener('mousedown', (Event) => {
            this.drawInterval = setInterval(() => this.drawCurrentShape(Event), 50);
        });

        this.gameCanvas.addEventListener('mouseup', () => {
            clearInterval(this.drawInterval);
        });

        this.gameCanvas.addEventListener('mouseout', () => {
            clearInterval(this.drawInterval);
        });
    }

    async updateHasPainted() {
        let hasPainted: boolean = false;

        // Simple way of checking, should be more sophisticated
        for (const key of Object.keys(this.shapes)) {
            if (this.shapes[key].length !== this.oldLengths[key]) {
                hasPainted = true;
                this.oldLengths[key] = this.shapes[key].length;
            }
        }
        this.hasPainted = hasPainted; // change true only when we have updated all oldLengths, so no transmition happens before
    }

    drawCurrentShape(Event: MouseEvent) {
        let alpha = 0.7;
        if (this.currentShape == "circle") {
            let radius = 10;
            let endAngle = 2;
            this.shapes.circles.push(new Circle(this.xPosMouse, this.yPosMouse, radius, endAngle, "00, 00, 255", alpha, this.gamectx, this.gameCanvas));
        } else if (this.currentShape == "rectangle") {
            this.shapes.rectangles.push(new Rectangle(this.xPosMouse, this.yPosMouse, "255,00,00", alpha, this.gamectx, this.gameCanvas));
        }
    }

    drawAllShapes(): void {
        if (this.shapes === null) {
            return;
        }
        for (const currentShape of Object.keys(this.shapes)) {
            this.shapes[currentShape].forEach((value: Shape) => {
                value.draw();
            });
        }
    }

    getShapes(): { [key: string]: Array<Shape_Information> } {
        // Construct shapes' database format to be sent
        let result: { [key: string]: Array<Shape_Information> } = {};
        let currentShape: Shape_Information;
        for (const key of Object.keys(this.shapes)) {
            result[key] = []
            for (const val of this.shapes[key]) {
                currentShape = { alpha: val.alpha, color: val.color, endAngle: 2, radius: 10, xPos: val.xPos, yPos: val.yPos, }
                result[key].push(currentShape)
            }
        }
        return result;
    }

    thinCanvas(): void {
        // To slow to be able to run frequently and the function "equals" is to
        // exact to make any difference
        for (const key of Object.keys(this.shapes)) {
            for (let i = 0; i < this.shapes[key].length;) {
                if (this.shapes[key].length === 0) {
                    continue
                }
                let currentShape: Shape = this.shapes[key][i];
                let count: number = 0;
                this.shapes[key].forEach((value: Shape) => {
                    if (currentShape.equals(value)) {
                        count++;
                    }
                })
                if (count > 1) {
                    let j = this.shapes[key].indexOf(currentShape)
                    this.shapes[key].splice(j, 1)
                } else {
                    i++;
                }

            }
        }
    }

    reloadContext(incomingShapes: { [key: string]: any }): void {
        this.gamectx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

        this.shapes = { rectangles: [], circles: [] };
        for (const key of Object.keys(incomingShapes)) {
            incomingShapes[key].forEach((value: any) => {
                this.shapes[key].push(new Circle(value.xPos, value.yPos, value.radius, value.endAngle, value.color, value.alpha, this.gamectx, value.gameCanvas));
            })
        }
    }
}









