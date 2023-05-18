import { c as create_ssr_component, b as each, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
/* empty css                                                        */const css = {
  code: "#bottom-navbar.svelte-1d4vcpx{padding-bottom:1rem}",
  map: null
};
const NavbarHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paths } = $$props;
  let { texts } = $$props;
  if ($$props.paths === void 0 && $$bindings.paths && paths !== void 0)
    $$bindings.paths(paths);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css);
  return `<nav id="bottom-navbar" class="navbar fixed-bottom row padding-bottom justify-content-center d-flex svelte-1d4vcpx">${each(paths, (path, i) => {
    return `<a id="${"anchor-" + escape(path, true)}" class="col text-center btn btn-outline-secondary svelte-1d4vcpx"${add_attribute("href", path, 0)}>${escape(texts[i])}
		</a>`;
  })}
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paths = ["/home", "", "/home"];
  let texts = ["Settings", "I am bored", "Logout"];
  return `${validate_component(NavbarHome, "Navbar").$$render($$result, { paths, texts }, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
