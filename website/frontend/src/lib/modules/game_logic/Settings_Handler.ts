import type { Painter } from '$lib/modules/game_logic/Painting_Handler'
import type { NetworkHandler } from '$lib/modules/game_logic/Network_Handler'

export class SettingsHandler {
    painter: Painter;
    Networker: NetworkHandler;

    constructor(painter: Painter, Networker: NetworkHandler) {
        this.painter = painter;
        this.Networker = Networker;

        // Initiate button Event listeners
        let sendButton = document.getElementById('button-Send-drawing-pane') as HTMLButtonElement;
        sendButton.addEventListener("click", async () => {
            // this.painter.thinCanvas();
            let response = await this.painter.getShapes();
            this.Networker.updateShapes(response);
        });

        let drawButton = document.getElementById('button-Draw-drawing-pane') as HTMLButtonElement;
        drawButton.addEventListener("click", async () => {
            let canvasWrapper = document.getElementById(
                "canvas-wrapper"
            ) as HTMLDivElement;
            if (this.painter.controlsCanvas) {
                canvasWrapper.style.pointerEvents = "none";
                canvasWrapper.style.cursor = "not-allowed";
                this.painter.stoppedPaintingJustNow = true;
                this.Networker.initiateShapeRetrieval();
            } else {
                canvasWrapper.style.pointerEvents = "";
                canvasWrapper.style.cursor = "";
                this.Networker.stopShapeRetrieval();
            }
            this.painter.controlsCanvas = !this.painter.controlsCanvas;
        });
    }

}