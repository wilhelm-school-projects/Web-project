// Containers for functions to deal with connecting to the Canvas
import { goto } from "$app/navigation";
import { closeModal } from "$lib/modules/DOMFunctions";

export class HostConnector {
    establishCanvas(canvasName: string): boolean {
        console.log("(Host) Establishing canvas with backend: " + canvasName);
        return true;
    }
    async navigateTo(route: string) {
        console.log("(Host) Navigating to " + route);
        closeModal("modal-game-type");
        // goto(route); // Why doesn't goto work, but window.location.href does?
        await goto("/game/client"); // Why doesn't goto work, but window.location.href does?
        // window.location.href = route;
    }
}

export class ClientConnector {
    connectToCanvas(hostEmail: string): boolean {
        console.log("(Client) connecting to " + hostEmail);
        return true;
    }
    async navigateTo(route: string) {
        console.log("(Client)Navigating to: " + route);
        closeModal("modal-game-type");
        // window.location.href = route;
        await goto("/game/host"); // Why doesn't goto work, but window.location.href does?
    }
}