

Jag har använt branches lokalt men har inte haft mycket behov av att ha dessa
remote eftersom jag varit själv och också uteslutande (andra halven) utvecklat
på min laptop. Så synka mellan den och andra enheter jag kan tänkas sitta på har
inte varit jätteintressant faktiskt.


visa "git lgb"

Screencast software: recordMyDesktop


# Technical challenges
   1. I did not take my time to learn the firebase emulator which meant that when writing code to handle "rules" for the database I had to push up my server function to firebase which took about 30 sec - 1 min. Solved by waiting the time, having extensive debugging prints and trying to write as correct as humanly possible before each push.
   2. Because of time constrains in combination with the time I had was able to commit to the project, I have not implemented everything I wanted to. Some are e.g., letting user log in with google account, more options when it comes to the drawing pane (e.g., chaning color, size of brush, erase the canvas). This is not solved, but instead I tried to prioritize what to implement to make it a finished web app.
   3. Synching drawings from one client to the other was a bit tricky. Initially I was thinking of using websockets to transmit and receive data at the clients, but Firebase's real time database works really great to both transmit and receive, which makes it easy to update the canvas on one client and then the second client will automatically see that the database has changed and does fetch it.
   4. Sharing global variables in sveltekit, such as sharing the user credential object supplied by firebase authentication after logging in. It had to be shared because the user credentials are necessary when making requests to the server functions. Solved by learning how "stores" work in sveltekit which is a way of sharing data between routes.
   5. In general, using many new techniques and making them work together is a challenge and I feel that is rather time consuming but after having learnt how they work and are supposed to be used, it is obvious that you can save a lot of time by using them rather than rewrite it all the time yourself. 

# tech stack:
   1. Sveltekit, consists of: (1) The language svelte which compiles to optimized javascript/html/css, (2) Vite which is used to run a live server hosting the web app and doing hot updates when doing changes to the code. It is also used to build the website. (3) sveltekit opposed to just svelte, also has a particular file structure to follow for the routing so you almost get that "for free". In constrast to other frameworks like React, Svelte doesn't use a virtual DOM and instead produces javascript at compile to which will change the real DOM when e.g., a value which an element is dependant on changes. As I have zero experience myself with virtual DOM I have limited understanding of it and why it would be needed at all, if one uses Svelte's approach. Some suggestions online are that it is easy to manage large scale projects with VDOM.   
   2. Typescript: Javascript with types that compiles down to Javascript.
   3. Bootstrap: Ready made css, making your life simpler.
   4. Node.js: A javascript runtime environment
   4. Expressjs: A Node.js framework used to buld REST api's. In this project used to let users invite other users to their canvas
   5. Firebase: Authentication, Real time database (using rules in a somewhat okey way), Admin SDK, Hosting 