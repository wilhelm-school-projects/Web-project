import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
// This might be useful if index isn't served to client!
// 	
//	You must ensure SvelteKit's
//  trailingSlash option is set appropriately for your environment. If your host
//  does not render /a.html upon receiving a request for /a then 
//  you will need to set trailingSlash: 'always' to create /a/index.html instead.



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// kit: {
	// 	// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
	// 	// If your environment is not supported or you settled on a specific environment, switch out the adapter.
	// 	// See https://kit.svelte.dev/docs/adapters for more information about adapters.
	// 	adapter: adapter()
	// }
	kit: {
        prerender:{
            // För att lyckas prerendra [type] måste jag specificera att dessa
            // två dynamiska routes ska göras explicit. Då måste jag i root
            // +layout.js säga att prerender=false, för annars klagar den på:  
            //
            //"Error: The following routes were marked as prerenderable, but
            //were not prerendered because they were not found while crawling
            //your app:
            //- /,  - /game,  - /home,  - /home/settings"
            //
            // Om jag dock tar bort entries nedan, kan jag säga prerender=true i
            // root. Detta förstår jag inte riktigt hur det funkar?. (jag måste
            // också säga i +page.js för [type] att prerender=true, men det
            // förståeligt tror tycker jag.)
            entries:['/game/host', '/game/client'],
        },
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            precompress: false,
            strict: true,
            fallback: 'index.html'
        })
    }
};

export default config;
