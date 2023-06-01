Använda firebase emulator

GameHost och GameClient är så pass lika att det borde vara samma. Det är dock
lite bättre utvecklingspotential om man separerar dom.

Jag har använt branches lokalt men har inte haft mycket behov av att ha dessa
remote eftersom jag varit själv och också uteslutande (andra halven) utvecklat
på min laptop. Så synka mellan den och andra enheter jag kan tänkas sitta på har
inte varit jätteintressant faktiskt.


visa "git lgb"

Screencast software: recordMyDesktop

# tech stack:
   1. Sveltekit, consists of: (1) The language svelte which compiles to optimized javascript/html/css, (2) Vite which is used to run a live server hosting the web app and doing hot updates when doing changes to the code. It is also used to build the website. (3) sveltekit opposed to just svelte, also has a particular file structure to follow for the routing so you almost get that "for free". In constrast to other frameworks like React, Svelte doesn't use a virtual DOM and instead produces javascript at compile to which will change the real DOM when e.g., a value which an element is dependant on changes. As I have zero experience myself with virtual DOM I have limited understanding of it and why it would be needed at all, if one uses Svelte's approach. Some suggestions online are that it is easy to manage large scale projects with VDOM.   
   2. Typescript: Javascript with types that compiles down to Javascript.
   3. Bootstrap: Ready made css, making your life simpler.
   4. Node.js: A javascript runtime environment
   4. Expressjs: A Node.js framework used to buld REST api's. In this project used to let users invite other users to their canvas
   5. Firebase: Authentication, Real time database (using rules in a somewhat okey way), Admin SDK, Hosting 