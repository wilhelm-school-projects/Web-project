<script lang="ts">
	import { createAuth0Client } from '@auth0/auth0-spa-js';
	let isDisabled: boolean = false;

	// AUTH0_BEGIN
	//  The domain and clientid should in deployement be fetched from my server.
	//  Finish later, when back-end is up as well
	// let auth0Client;
	// async function createAuth() {
	// 	auth0Client = await createAuth0Client({
	// 		domain: 'dev-54ir3ia7u1gzyg05.eu.auth0.com',
	// 		clientId: 'LcxGNNOcIWMaquUi3w69GuYOfLiY9sIt'
	// 	});
	// 	console.log('resolving createAuth');
	// 	return new Promise((resolve) => {
	// 		resolve('');
	// 	});
	// }

	// const authenticate = async () => {
	// 	try {
	// 		const isAuthenticated: boolean = await auth0Client.isAuthenticated();
	// 		console.log('Is authenticated: ');
	// 		console.log(isAuthenticated);
	// 	} catch (err) {
	// 		console.log('Error!');
	// 		console.log(err);
	// 	}
	// 	return new Promise((resolve) => {
	// 		resolve('');
	// 	});
	// };

	// async function initAuth0() {
	// 	await createAuth();
	// 	await authenticate();
	// }
	// AUTH0_END

	async function login() {
		console.log('login');

		// Auth0 specific code.
		// try{
		//   let res = await auth0Client.loginWithRedirect({
		//     authorizationParams: {
		//       redirect_uri: window.location.origin
		//     }
		//   });
		//   console.log(res);
		// } catch(err){

		//   console.log("Error!");
		//   console.log(err);
		// }
	}
	function logout() {
		console.log('logout');
	}

	// Executed directly ~ "main"
	// initAuth0();
</script>

<div id="not-logged-in-container">
	<div id="header" class="row">
		<div class="col d-flex justify-content-center">
			<h1 class="h1">Montem!</h1>
		</div>
	</div>
	<div class="row">
		<div id="left-col" class="col-2">Left</div>
		<div id="main-col" class="col">
			<form class="">
				<label for="">Sign in</label>
				<input type="text" class="rounded" />
				<input type="" class="rounded" />
			</form>
		</div>
		<div id="right-col" class="col-2">Right</div>
	</div>
</div>

<style>
</style>
