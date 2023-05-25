import { c as create_ssr_component, g as get_store_value, b as add_attribute, v as validate_component, d as each, e as escape, a as subscribe } from "../../../../chunks/index2.js";
import { B as ButtonLogout } from "../../../../chunks/ButtonLogout.js";
import { g as gameHandler, d as databaseHandler } from "../../../../chunks/stores2.js";
import { update, ref, set, onValue, get, remove } from "firebase/database";
import axios from "axios";
import { setIntervalAsync, clearIntervalAsync } from "set-interval-async";
import { p as page } from "../../../../chunks/stores.js";
const InviteModule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inviteEmail = "Email to invite";
  get_store_value(gameHandler);
  return `
<button id="button-invite" class="col text-white bg-danger btn btn-primary btn-outline-secondary">Invite
</button>
<input type="email" class="col text-secondary btn-outline-danger"${add_attribute("value", inviteEmail, 0)}>

`;
});
class Shape {
  xPos;
  yPos;
  color = "0,0,0";
  alpha = 1;
  gamectx;
  gameCanvas;
  constructor(xPosMouse, yPosMouse, color, alpha, gamectx, gameCanvas) {
    this.gamectx = gamectx;
    this.gameCanvas = gameCanvas;
    this.xPos = xPosMouse;
    this.yPos = yPosMouse;
    this.color = color;
    this.alpha = alpha;
  }
  draw() {
  }
  equals(shape) {
    return true;
  }
  setColor(rgba) {
    console.log("settings color: " + rgba);
  }
  hideMe() {
    console.log("Hiding me :(");
  }
  displayMe() {
    console.log("Displaing me :)");
  }
}
class Circle extends Shape {
  radius;
  endAngle = 2;
  constructor(xPosMouse, yPosMouse, radius, endAngle, color, alpha, gamectx, gameCanvas) {
    super(xPosMouse, yPosMouse, color, alpha, gamectx, gameCanvas);
    this.radius = radius;
    this.endAngle = endAngle;
    this.draw();
  }
  draw() {
    let [r, g, b] = this.color.split(",");
    this.gamectx.beginPath();
    this.gamectx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
    this.gamectx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * this.endAngle);
    this.gamectx.closePath();
    this.gamectx.fill();
  }
  equals(shape) {
    if (this.alpha === shape.alpha && this.color === shape.color && this.endAngle === shape.endAngle && this.radius === shape.radius && this.xPos === shape.xPos && this.yPos === shape.yPos) {
      return true;
    }
    return false;
  }
}
class Rectangle extends Shape {
  draw() {
  }
}
class Painter {
  xPosMouse;
  yPosMouse;
  currentShape;
  controlsCanvas;
  hasPainted = false;
  stoppedPaintingJustNow = false;
  oldLengths;
  shapes;
  drawInterval;
  gamectx;
  gameCanvas;
  gameCanvasString;
  constructor(gameCanvas, controlsCanvas) {
    this.controlsCanvas = controlsCanvas;
    this.gameCanvasString = gameCanvas;
    this.shapes = { rectangles: [], circles: [] };
    this.currentShape = "circle";
    this.oldLengths = { rectangles: 0, circles: 0 };
  }
  // Stuff that can't happen before mounting the game page
  run() {
    this.gameCanvas = document.getElementById(this.gameCanvasString);
    if (this.gameCanvas == null) {
      throw new Error("Game Canvas is null!");
    }
    this.gamectx = this.gameCanvas.getContext("2d");
    this.gameCanvas.height = window.innerHeight;
    this.gameCanvas.width = window.innerWidth;
    setInterval(() => this.updateHasPainted(), 500);
    this.gameCanvas.addEventListener("mousemove", (Event) => {
      this.xPosMouse = Event.clientX;
      this.yPosMouse = Math.round(Event.clientY - this.gameCanvas.getBoundingClientRect().top);
    });
    this.gameCanvas.addEventListener("mousedown", (Event) => {
      this.drawInterval = setInterval(() => this.drawCurrentShape(Event), 50);
    });
    this.gameCanvas.addEventListener("mouseup", () => {
      clearInterval(this.drawInterval);
    });
    this.gameCanvas.addEventListener("mouseout", () => {
      clearInterval(this.drawInterval);
    });
  }
  async updateHasPainted() {
    let hasPainted = false;
    for (const key of Object.keys(this.shapes)) {
      if (this.shapes[key].length !== this.oldLengths[key]) {
        hasPainted = true;
        this.oldLengths[key] = this.shapes[key].length;
      }
    }
    this.hasPainted = hasPainted;
  }
  drawCurrentShape(Event) {
    let alpha = 0.7;
    if (this.currentShape == "circle") {
      let radius = 10;
      let endAngle = 2;
      this.shapes.circles.push(new Circle(this.xPosMouse, this.yPosMouse, radius, endAngle, "00, 00, 255", alpha, this.gamectx, this.gameCanvas));
    } else if (this.currentShape == "rectangle") {
      this.shapes.rectangles.push(new Rectangle(this.xPosMouse, this.yPosMouse, "255,00,00", alpha, this.gamectx, this.gameCanvas));
    }
  }
  drawAllShapes() {
    if (this.shapes === null) {
      return;
    }
    for (const currentShape of Object.keys(this.shapes)) {
      this.shapes[currentShape].forEach((value) => {
        value.draw();
      });
    }
  }
  getShapes() {
    let result = {};
    let currentShape;
    for (const key of Object.keys(this.shapes)) {
      result[key] = [];
      for (const val of this.shapes[key]) {
        currentShape = { alpha: val.alpha, color: val.color, endAngle: 2, radius: 10, xPos: val.xPos, yPos: val.yPos };
        result[key].push(currentShape);
      }
    }
    return result;
  }
  thinCanvas() {
    for (const key of Object.keys(this.shapes)) {
      for (let i = 0; i < this.shapes[key].length; ) {
        if (this.shapes[key].length === 0) {
          continue;
        }
        let currentShape = this.shapes[key][i];
        let count = 0;
        this.shapes[key].forEach((value) => {
          if (currentShape.equals(value)) {
            count++;
          }
        });
        if (count > 1) {
          let j = this.shapes[key].indexOf(currentShape);
          this.shapes[key].splice(j, 1);
        } else {
          i++;
        }
      }
    }
  }
  reloadContext(incomingShapes) {
    this.gamectx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    this.shapes = { rectangles: [], circles: [] };
    for (const key of Object.keys(incomingShapes)) {
      incomingShapes[key].forEach((value) => {
        this.shapes[key].push(new Circle(value.xPos, value.yPos, value.radius, value.endAngle, value.color, value.alpha, this.gamectx, value.gameCanvas));
      });
    }
  }
}
class SettingsHandler {
  painter;
  Networker;
  game;
  canvasWrapper;
  drawButton;
  constructor(painter, Networker, game) {
    this.painter = painter;
    this.Networker = Networker;
    this.game = game;
  }
  async obtainCanvasControl() {
    try {
      let response = await this.Networker.requestCanvasControl();
      this.unlockCanvas();
    } catch (e) {
      this.animationNotLoggedInButton();
      console.log("Couldn't obtain canvas control:");
      console.log(e);
    }
  }
  async animationNotLoggedInButton() {
    this.drawButton.style.backgroundColor = "red";
    await new Promise((r) => setTimeout(r, 600));
    this.drawButton.style.backgroundColor = "green";
    await new Promise((r) => setTimeout(r, 400));
    this.drawButton.style.backgroundColor = "red";
    await new Promise((r) => setTimeout(r, 200));
    this.drawButton.style.backgroundColor = "green";
    await new Promise((r) => setTimeout(r, 200));
    this.drawButton.style.backgroundColor = "red";
    await new Promise((r) => setTimeout(r, 1e3));
    this.drawButton.style.backgroundColor = "";
  }
  lockCanvas() {
    this.painter.controlsCanvas = false;
    this.canvasWrapper.style.pointerEvents = "none";
    this.canvasWrapper.style.cursor = "not-allowed";
    this.painter.stoppedPaintingJustNow = true;
    this.Networker.initiateShapeRetrieval();
    this.drawButton.style.backgroundColor = "";
  }
  unlockCanvas() {
    this.canvasWrapper.style.pointerEvents = "";
    this.canvasWrapper.style.cursor = "";
    this.Networker.stopShapeRetrieval();
    this.painter.controlsCanvas = true;
    this.drawButton.style.backgroundColor = "green";
  }
  // Stuff that can't happen before mounting the game page
  run() {
    this.canvasWrapper = document.getElementById(
      "canvas-wrapper"
    );
    this.drawButton = document.getElementById("button-Draw-drawing-pane");
    if (this.game instanceof GameClient) {
      let canvasWrapper = document.getElementById(
        "canvas-wrapper"
      );
      canvasWrapper.style.pointerEvents = "none";
      canvasWrapper.style.cursor = "not-allowed";
    }
    let drawButton = document.getElementById("button-Draw-drawing-pane");
    drawButton.addEventListener("click", async () => {
      if (this.painter.controlsCanvas) {
        this.lockCanvas();
        await this.Networker.removeCanvasControl();
      } else {
        this.obtainCanvasControl();
      }
    });
  }
}
class NetworkHandler {
  painter;
  database;
  canvasID;
  authHandler;
  axiosInstance;
  stopShapeRetrieval;
  constructor(painter, canvasID, authHandler) {
    this.canvasID = canvasID;
    this.painter = painter;
    this.authHandler = authHandler;
    this.database = get_store_value(databaseHandler);
    this.axiosInstance = axios.create({
      // baseURL: 'https://us-central1-montem-d8829.cloudfunctions.net/api'
      baseURL: "http://localhost:5000/montem-d8829/us-central1/api"
    });
  }
  async updateShapes(message) {
    try {
      let path = this.canvasID + "/shapes";
      let response = await this.sendUpdate(message, path);
    } catch (e) {
      console.log("Update failed");
      console.log(e);
      return false;
    }
    return true;
  }
  async setShapes(message) {
    try {
      let response = await this.sendSet(message, this.canvasID);
      console.log("Set: successful");
    } catch (e) {
      console.log("Send shapes error:");
      console.log(e);
      return false;
    }
    return true;
  }
  async sendUpdate(message, path) {
    let updates = {};
    updates[path] = message;
    await update(ref(this.database), updates);
  }
  async sendSet(message, path) {
    console.log("skickar i sendSet message:");
    console.log(message);
    console.log("skickar i sendSet path:");
    console.log(path);
    await set(ref(this.database, path), message);
  }
  initiateShapeRetrieval() {
    let contextPath = this.canvasID + "/shapes";
    this.stopShapeRetrieval = onValue(ref(this.database, contextPath), (snapshot) => {
      let data = snapshot.val();
      if (data === null) {
        data = {};
      }
      this.painter.reloadContext(data);
    });
  }
  async canvasIsControlled(path) {
    try {
      let response = await get(ref(this.database, path));
      if (!response.exists()) {
        return false;
      }
    } catch (e) {
      console.log("(canvasIsControlled) Failure:");
      console.log(e);
      return false;
    }
    return true;
  }
  async canvasExists() {
    return new Promise(async (resolve, reject) => {
      console.log("looking if canvas exists in networker");
      let path = "/" + this.canvasID;
      try {
        let response = await get(ref(this.database, path));
        if (!response.exists()) {
          reject(false);
          return;
        }
      } catch (e) {
        console.log(e);
        reject(false);
        return;
      }
      resolve(true);
    });
  }
  async requestCanvasControl() {
    return new Promise(async (resolve, reject) => {
      let userEmail = localStorage.getItem("email");
      if (userEmail === null) {
        reject("(reuquestCanvasControl) user email doens't exist in localstorage");
        return;
      }
      userEmail = encodeURIComponent(userEmail).replace(".", "%2E");
      let controlPath = this.canvasID + "/control";
      if (await this.canvasIsControlled(controlPath)) {
        reject("(requestCanvasControl) canvas is being controlled by someone else");
        return;
      }
      await this.sendUpdate(userEmail, controlPath);
      try {
        let response = await get(ref(this.database, controlPath));
        if (!response.exists()) {
          reject("(requestCanvasControl) no email exists even though we tried to grab control");
          return;
        }
        let email = response.val();
        if (email !== userEmail) {
          reject("Another user controls the canvas");
          return;
        }
      } catch (e) {
        reject("(requestCanvasControl) fireGet failed when checking if we got control:");
        return;
      }
      resolve("Successfully grabbed control over canvas");
    });
  }
  async removeCanvasControl() {
    let controlPath = this.canvasID + "/control";
    await remove(ref(this.database, controlPath));
  }
  // Stuff that can't happen before mounting the game page
  run() {
    this.initiateShapeRetrieval();
  }
  // Requests to Cloud functions API
  async setUserCanvasClaims() {
    console.log("auth handle i set canvas claims");
    console.log(this.authHandler);
    return new Promise(async (resolve, reject) => {
      try {
        let response = await this.axiosInstance.post("/setUserClaimsNewCanvas", {
          canvasID: this.canvasID
        });
      } catch (e) {
        console.log(e);
        reject(false);
        return;
      }
      resolve(true);
    });
  }
}
class Game {
  canvasID;
  painter;
  settingsHandler;
  networker;
  intervalAsyncTimer;
  constructor(canvasID) {
    this.canvasID = canvasID;
    window.onbeforeunload = () => {
      this.cleanUp();
    };
  }
  async transmitShapes() {
    if (this.painter.stoppedPaintingJustNow) {
      this.painter.stoppedPaintingJustNow = false;
      return;
    }
    if (!this.painter.controlsCanvas || !this.painter.hasPainted) {
      return;
    }
    this.painter.hasPainted = false;
    let message = this.painter.getShapes();
    try {
      let response = await this.networker.updateShapes(message);
    } catch (e) {
      console.log("Transimitting shapes didn't go as planned");
    }
  }
  initTransmissions() {
    this.intervalAsyncTimer = setIntervalAsync(async () => {
      await this.transmitShapes();
    }, 50);
    setInterval(() => {
      if (this.painter.controlsCanvas) {
        this.painter.thinCanvas();
      }
    }, 5e3);
  }
  // Stuff that can't happen before mounting the game page
  run() {
  }
  cleanUp() {
    clearIntervalAsync(this.intervalAsyncTimer);
    if (this.painter.controlsCanvas) {
      this.networker.removeCanvasControl();
    }
  }
  async canvasExists() {
    let response;
    try {
      response = await this.networker.canvasExists();
      return response;
    } catch (e) {
      return e;
    }
  }
}
class GameHost extends Game {
  constructor(gameCanvas, canvasID, authHandler) {
    super(canvasID);
    this.painter = new Painter(gameCanvas, true);
    this.networker = new NetworkHandler(this.painter, this.canvasID, authHandler);
    this.settingsHandler = new SettingsHandler(this.painter, this.networker, this);
  }
  // Stuff that can't happen before mounting the game page
  run() {
    console.log("Host: running game");
    this.settingsHandler.run();
    this.painter.run();
    this.networker.run();
    this.initTransmissions();
  }
  async canvasCreated() {
    if (await this.canvasExists()) {
      console.log("canvas already exists");
      return false;
    }
    try {
      await this.networker.requestCanvasControl();
      await this.networker.setUserCanvasClaims();
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }
  invite(email) {
    console.log("(inside GameHost) inviting email: ");
    console.log(email);
  }
}
class GameClient extends Game {
  constructor(gameCanvas, canvasID, authHandler) {
    super(canvasID);
    this.painter = new Painter(gameCanvas, false);
    this.networker = new NetworkHandler(this.painter, this.canvasID, authHandler);
    this.settingsHandler = new SettingsHandler(this.painter, this.networker, this);
  }
  // Stuff that can't happen before mounting the game page Order of method
  // calls is important because some objects need to run before to initialize
  // som stuff other objects need
  run() {
    console.log("Client: running game");
    this.settingsHandler.run();
    this.painter.run();
    this.networker.run();
    this.initTransmissions();
  }
}
const NavbarGame_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#bottom-navbar.svelte-1laoi5p{padding-bottom:1rem}",
  map: null
};
const NavbarGame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let texts = ["Draw", "Clear", "Settings"];
  $$result.css.add(css$1);
  return `<div id="bottom-navbar" class="navbar row padding-bottom justify-content-center d-flex svelte-1laoi5p">${validate_component(ButtonLogout, "ButtonLogout").$$render($$result, {}, {}, {})}
    ${get_store_value(gameHandler) instanceof GameHost ? `${validate_component(InviteModule, "InviteModule").$$render($$result, {}, {}, {})}` : ``}</div>
<nav id="bottom-navbar" class="navbar row padding-bottom justify-content-center d-flex svelte-1laoi5p">${each(texts, (text, i) => {
    return `<button id="${"button-" + escape(text, true) + "-drawing-pane"}" class="col text-dark text-center btn btn-outline-secondary svelte-1laoi5p">${escape(texts[i])}
        </button>`;
  })}
</nav>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#game-canvas.svelte-oj7mwg{touch-action:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let gameType = $page.url.href.split("/").at($page.url.href.split("/").length - 1);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="game-container">${validate_component(NavbarGame, "NavbarGame").$$render($$result, {}, {}, {})}
	<div class="row"><h1 class="text-center col">${escape(gameType)}</h1></div>
	<div id="canvas-wrapper" class="row"><canvas id="game-canvas" class="svelte-oj7mwg"></canvas></div>
</main>`;
});
export {
  Page as default
};
