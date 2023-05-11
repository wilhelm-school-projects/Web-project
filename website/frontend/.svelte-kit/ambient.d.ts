
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const __EGL_VENDOR_LIBRARY_DIRS: string;
	export const SNAP_INSTANCE_KEY: string;
	export const USER: string;
	export const SNAP_COMMON: string;
	export const LC_TIME: string;
	export const npm_config_user_agent: string;
	export const FONTCONFIG_PATH: string;
	export const XDG_SEAT: string;
	export const LIBVA_DRIVERS_PATH: string;
	export const GIO_MODULE_DIR: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const XDG_CACHE_HOME: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const XLOCALEDIR: string;
	export const SNAP_LIBRARY_PATH: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const SNAP_USER_DATA: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const GTK_MODULES: string;
	export const LC_MONETARY: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SNAP_REVISION: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_config_metrics_registry: string;
	export const MANDATORY_PATH: string;
	export const GST_PLUGIN_SCANNER: string;
	export const LOGNAME: string;
	export const XKB_CONFIG_ROOT: string;
	export const WINDOWID: string;
	export const SNAP_CONTEXT: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const XDG_SESSION_CLASS: string;
	export const DEFAULTS_PATH: string;
	export const SNAP_VERSION: string;
	export const USERNAME: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const ALACRITTY_LOG: string;
	export const npm_config_cache: string;
	export const SNAP_INSTANCE_NAME: string;
	export const WINDOWPATH: string;
	export const VDPAU_DRIVER_PATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const LC_ADDRESS: string;
	export const SNAP_DATA: string;
	export const XDG_RUNTIME_DIR: string;
	export const GST_PLUGIN_SYSTEM_PATH: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const XDG_DATA_HOME: string;
	export const XDG_CONFIG_HOME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SNAP_USER_COMMON: string;
	export const SSH_AUTH_SOCK: string;
	export const SNAP_ARCH: string;
	export const SNAP_COOKIE: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const GDK_PIXBUF_MODULEDIR: string;
	export const GST_PLUGIN_PATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const SNAP_REEXEC: string;
	export const GDMSESSION: string;
	export const LESSCLOSE: string;
	export const SNAP_NAME: string;
	export const FONTCONFIG_FILE: string;
	export const LC_MEASUREMENT: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const SNAP_LAUNCHER_ARCH_TRIPLET: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const LC_ALL: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const SNAP_REAL_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const SNAP: string;
	export const LC_NUMERIC: string;
	export const npm_command: string;
	export const I3SOCK: string;
	export const LC_PAPER: string;
	export const LIBGL_DRIVERS_PATH: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		__EGL_VENDOR_LIBRARY_DIRS: string;
		SNAP_INSTANCE_KEY: string;
		USER: string;
		SNAP_COMMON: string;
		LC_TIME: string;
		npm_config_user_agent: string;
		FONTCONFIG_PATH: string;
		XDG_SEAT: string;
		LIBVA_DRIVERS_PATH: string;
		GIO_MODULE_DIR: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		XDG_CACHE_HOME: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		npm_config_noproxy: string;
		HOME: string;
		XLOCALEDIR: string;
		SNAP_LIBRARY_PATH: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		SNAP_USER_DATA: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		GTK_MODULES: string;
		LC_MONETARY: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SNAP_REVISION: string;
		COLORTERM: string;
		COLOR: string;
		NVM_DIR: string;
		npm_config_metrics_registry: string;
		MANDATORY_PATH: string;
		GST_PLUGIN_SCANNER: string;
		LOGNAME: string;
		XKB_CONFIG_ROOT: string;
		WINDOWID: string;
		SNAP_CONTEXT: string;
		_: string;
		npm_config_prefix: string;
		XDG_SESSION_CLASS: string;
		DEFAULTS_PATH: string;
		SNAP_VERSION: string;
		USERNAME: string;
		TERM: string;
		XDG_SESSION_ID: string;
		ALACRITTY_LOG: string;
		npm_config_cache: string;
		SNAP_INSTANCE_NAME: string;
		WINDOWPATH: string;
		VDPAU_DRIVER_PATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		LC_ADDRESS: string;
		SNAP_DATA: string;
		XDG_RUNTIME_DIR: string;
		GST_PLUGIN_SYSTEM_PATH: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		XDG_DATA_HOME: string;
		XDG_CONFIG_HOME: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SNAP_USER_COMMON: string;
		SSH_AUTH_SOCK: string;
		SNAP_ARCH: string;
		SNAP_COOKIE: string;
		SHELL: string;
		LC_NAME: string;
		GDK_PIXBUF_MODULEDIR: string;
		GST_PLUGIN_PATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		SNAP_REEXEC: string;
		GDMSESSION: string;
		LESSCLOSE: string;
		SNAP_NAME: string;
		FONTCONFIG_FILE: string;
		LC_MEASUREMENT: string;
		GDK_PIXBUF_MODULE_FILE: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		SNAP_LAUNCHER_ARCH_TRIPLET: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		LC_ALL: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		SNAP_REAL_HOME: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		SNAP: string;
		LC_NUMERIC: string;
		npm_command: string;
		I3SOCK: string;
		LC_PAPER: string;
		LIBGL_DRIVERS_PATH: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
