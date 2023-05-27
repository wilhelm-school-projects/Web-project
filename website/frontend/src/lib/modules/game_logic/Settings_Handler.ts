import type { Painter } from '$lib/modules/game_logic/Painting_Handler'
import type { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'
import { type Game, GameHost, GameClient } from '$lib/modules/game_logic/Game'
// import styles from '$lib/modules/game_logic/animations.css?inline'

export class SettingsHandler {
    painter: Painter;
    Networker: NetworkHandler;
    game: Game
    canvasWrapper: HTMLDivElement;
    drawButton: HTMLElement;

    constructor(painter: Painter, Networker: NetworkHandler, game: Game) {
        this.painter = painter;
        this.Networker = Networker;
        this.game = game;
    }

    async obtainCanvasControl() {
        try {
            let response = await this.Networker.requestCanvasControl();
            this.unlockCanvas();
        } catch (e) {
            this.animationNotLoggedInButton()
            console.log("Couldn't obtain canvas control:")
            console.log(e)
        }
    }

    async animationNotLoggedInButton() {
        this.drawButton.style.backgroundColor = "red"
        await new Promise(r => setTimeout(r, 600));
        this.drawButton.style.backgroundColor = "green"
        await new Promise(r => setTimeout(r, 400));
        this.drawButton.style.backgroundColor = "red"
        await new Promise(r => setTimeout(r, 200));
        this.drawButton.style.backgroundColor = "green"
        await new Promise(r => setTimeout(r, 200));
        this.drawButton.style.backgroundColor = "red"
        await new Promise(r => setTimeout(r, 1000));
        this.drawButton.style.backgroundColor = ""
    }

    lockCanvas() {
        this.painter.controlsCanvas = false;
        this.canvasWrapper.style.pointerEvents = "none";
        this.canvasWrapper.style.cursor = "not-allowed";
        this.painter.stoppedPaintingJustNow = true;
        this.Networker.initiateShapeRetrieval();
        this.drawButton.style.backgroundColor = ""
    }

    unlockCanvas() {
        this.canvasWrapper.style.pointerEvents = "";
        this.canvasWrapper.style.cursor = "";
        this.Networker.stopShapeRetrieval();
        this.painter.controlsCanvas = true;
        this.drawButton.style.backgroundColor = "green"
    }



    // Stuff that can't happen before mounting the game page
    run(): void {
        this.canvasWrapper = document.getElementById(
            "canvas-wrapper"
        ) as HTMLDivElement;
        this.drawButton = document.getElementById("button-Draw-drawing-pane") as HTMLElement;

        // if (this.game instanceof GameClient) {
        let canvasWrapper = document.getElementById(
            "canvas-wrapper"
        ) as HTMLDivElement;
        canvasWrapper.style.pointerEvents = "none";
        canvasWrapper.style.cursor = "not-allowed";

        // } else {
        //     this.drawButtonGreen()
        // }

        // Initiate button Event listeners
        // let drawButton = document.getElementById('button-Draw-drawing-pane') as HTMLButtonElement;
        this.drawButton.addEventListener("click", async () => {
            if (this.painter.controlsCanvas) {
                this.lockCanvas();
                await this.Networker.removeCanvasControl();
            } else {
                this.obtainCanvasControl();
            }
        })

    }
    drawButtonGreen(): void {
        this.drawButton.style.backgroundColor = "green"
    }
}