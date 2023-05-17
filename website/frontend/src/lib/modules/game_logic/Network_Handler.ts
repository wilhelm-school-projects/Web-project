export class NetworkHandler {

    constructor() {

    }

    async send(message: string): Promise<boolean> {
        console.log(message);
        return true;
    }

    async recieve(): Promise<string> {
        return "";
    }
}