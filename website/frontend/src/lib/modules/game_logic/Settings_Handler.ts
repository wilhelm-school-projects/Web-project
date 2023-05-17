import type { Painter } from '$lib/modules/game_logic/Painting_Handler'

export class SettingsHandler {
    painter: Painter;

    constructor(painter: Painter) {
        this.painter = painter;

        let button = document.getElementById('button-Draw-drawing-pane') as HTMLButtonElement;
        button.addEventListener("click", async () => {
            let canvasWrapper = document.getElementById(
                "canvas-wrapper"
            ) as HTMLDivElement;
            if (this.painter.painting) {
                canvasWrapper.style.pointerEvents = "none";
                canvasWrapper.style.cursor = "not-allowed";
                this.painter.stoppedPaintingJustNow = true;
            } else {
                canvasWrapper.style.pointerEvents = "";
                canvasWrapper.style.cursor = "";
            }
            this.painter.painting = !this.painter.painting;
            // console.log("JSONIFIED: "); // testing purposes
            // console.log(this.painter.stringifyShapeInformation()); // testing purposes
            let response = await this.painter.stringifyShapeInformation();
            console.log(response);
        });
    }

}