import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { r as readable } from "../../../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import "set-interval-async";
readable("context-id-1");
const firebaseConfig = {
  apiKey: "AIzaSyBMLLbj09IxQOez5cTlmApwZMSi_qyJfHc",
  authDomain: "montem-d8829.firebaseapp.com",
  databaseURL: "https://montem-d8829-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "montem-d8829",
  storageBucket: "montem-d8829.appspot.com",
  messagingSenderId: "496898410589",
  appId: "1:496898410589:web:6b68e67278d86b71c0e5b4",
  measurementId: "G-QQ5SSKR29X"
};
const firebaseApp = initializeApp(firebaseConfig);
getDatabase(firebaseApp);
getAuth(firebaseApp);
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
  return `<main class="game-container"><div class="row"><h1 class="text-center col">${escape(gameType)}</h1></div>
	<div id="canvas-wrapper" class="row"><canvas id="game-canvas" class="svelte-oj7mwg"></canvas></div>
</main>`;
});
export {
  Page as default
};
