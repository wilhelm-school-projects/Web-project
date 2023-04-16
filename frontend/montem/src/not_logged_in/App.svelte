<!-- 
  TODO:
  * Make it work with typescript.
-->

<!-- <script lang= "ts"> -->
<script lang="ts">
  import { createAuth0Client } from '@auth0/auth0-spa-js';

  let isDisabled : boolean = false;
  
  // AUTH0_BEGIN
  //  The domain and clientid should in deployement be fetched from my server. 
  let auth0Client;
  async function createAuth() {
    auth0Client = await createAuth0Client( {
      "domain"    : "dev-54ir3ia7u1gzyg05.eu.auth0.com",
      "clientId"  : "LcxGNNOcIWMaquUi3w69GuYOfLiY9sIt"
    });
    console.log("resolving createAuth");
    return new Promise ( (resolve) => {resolve('');} );
  }

  const authenticate = async () => {
    try{
      const isAuthenticated : boolean = await auth0Client.isAuthenticated();
      console.log("Is authenticated: ");
      console.log(isAuthenticated);
    } catch (err){
      console.log("Error!");
      console.log(err);
    }
    return new Promise ( (resolve) => {resolve('');} );
  };
  
  async function initAuth0() {
    await createAuth();
    await authenticate();
  }
// AUTH0_END

  async function login() {
    console.log("login");
    
    try{
      let res = await auth0Client.loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      });
      console.log(res);
    } catch(err){

      console.log("Error!");
      console.log(err);
    }
  }
  function logout(){
    console.log("logout");
  }


  // Executed directly ~ "main"
  initAuth0();
</script>

<main>
  <h2>SPA Authentication Sample</h2>
  <p>Welcome to our page!</p>
  <button id="btn-login" disabled={isDisabled} on:click={login}>Log in</button>
  <button id="btn-logout" disabled={isDisabled} on:click={logout}>Log out</button>
</main>

<style>

</style>
