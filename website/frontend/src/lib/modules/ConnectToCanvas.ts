// Containers for functions to deal with connecting to the Canvas
import { goto } from "$app/navigation";
import { closeModal } from "$lib/modules/DOMFunctions.ts";

export class Host {
    establishCanvas(canvasName): boolean {
        console.log("Establishing canvas with backend: " + canvasName);
        return true;
    }
    navigateTo(route: string): void {
        console.log("Navigating to " + route);
        closeModal("modal-game-type");
        // goto(route); Why doesn't goto work, but window.location.href does?
        window.location.href = route;
    }
}

export class Client {
    dummy(): void {
        console.log("Dummy function");
    }
}