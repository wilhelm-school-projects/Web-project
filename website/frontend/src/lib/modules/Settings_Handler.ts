import type { Painter } from '$lib/modules/Shape_Handler'

export class SettingsHandler {
    painter: Painter;

    constructor(painter: Painter) {
        this.painter = painter;

        let button = document.getElementById('button-Draw-drawing-pane') as HTMLButtonElement;
        button.addEventListener("click", () => {
            let canvasWrapper = document.getElementById(
                "canvas-wrapper"
            ) as HTMLDivElement;
            if (this.painter.painting) {
                canvasWrapper.style.pointerEvents = "none";
                canvasWrapper.style.cursor = "not-allowed";
            } else {
                canvasWrapper.style.pointerEvents = "";
                canvasWrapper.style.cursor = "";
            }
            this.painter.painting = !this.painter.painting;
        });
    }

}