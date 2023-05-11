<script lang="ts">
	import { slide } from "svelte/transition";
	import Navbar from "$lib/components/NavbarHome.svelte";
	import ConnectorClient from "$lib/components/ConnectorClient.svelte";
	import ConnectorHost from "$lib/components/ConnectorHost.svelte";
</script>

<main
	in:slide={{ axis: "x", duration: 700 }}
	class="row d-flex justify-content-center text-info"
>
	<!-- Select game modal -->
	<div id="modal-game-type" class="modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Open drawing pane</h5>
					<!-- aria-label is used for example for blind persons that
					can't see the X, and thus "close" is read. -->
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>
				<div class="modal-body row">
					<button
						class="col btn btn-primary"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#connector-host"
						aria-expanded="false"
						aria-controls="connector-host"
					>
						Host
					</button>
					<button
						class="col btn btn-primary"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#connector-client"
						aria-expanded="false"
						aria-controls="connector-client"
					>
						Connect
					</button>
					<!-- <a
						type="button"
						class="col btn btn-primary"
						href=""
						on:click={() => closeModal("modal-game-type")}>Host</a
					>
					<a
						type="button"
						class="col btn btn-primary"
						href=""
						on:click={() => closeModal("modal-game-type")}
						>Connect</a
					> -->
				</div>
				<div class="collapse" id="connector-host">
					<div class="card card-body d-flex justify-content-center">
						<ConnectorHost />
					</div>
				</div>
				<div class="collapse" id="connector-client">
					<div class="card card-body"><ConnectorClient /></div>
				</div>
			</div>
		</div>
	</div>

	<div class="col-1 border bg-danger" />
	<div id="content" class="col bg-info text-white">
		<p class="display-2">ipsumquam ducimus</p>
	</div>
	<div class="col-1 border bg-danger">
		<div />
	</div>
</main>

<style>
</style>
