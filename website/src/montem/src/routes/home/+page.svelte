<script lang="ts">
	import { slide } from 'svelte/transition';

	// A fulhack to remove the modal when navigating to hosting or connecting
	// to a drawin pane. The newer version of Bootstrap doesn't seem to have
	// e.g., "hide()" to hide a modal.
	function closeModal(id: string) {
		let modal: HTMLElement = document.getElementById(id)!;
		let backdrop: HTMLCollectionOf<Element> = document.getElementsByClassName('modal-backdrop')!;
		backdrop[0].remove();
		modal.style.display = 'none';
	}
</script>

<main in:slide={{ axis: 'x', duration: 700 }} class="row d-flex justify-content-center text-info">
	<!-- Select game modal -->
	<div id="modal-game-type" class="modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Open drawing pane</h5>
					<!-- aria-label is used for example for blind persons that
					can't see the X, and thus "close" is read. -->
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
				</div>
				<div class="modal-body row">
					<a
						type="button"
						class="col btn btn-primary"
						href="/game/host"
						on:click={() => closeModal('modal-game-type')}>Host</a
					>
					<a
						type="button"
						class="col btn btn-primary"
						href="/game/client"
						on:click={() => closeModal('modal-game-type')}>Connect</a
					>
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
