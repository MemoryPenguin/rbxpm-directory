<template>
	<div class="package-entry">
		<h2 class="package-entry--package-name"><a href="package-entry--package-link" :href="packageUrl">{{ packageName }}</a></h2>
		<span class="package-entry--package-author">by <a class="package-entry--package-author--author-link" :href="packageAuthor.url">{{ packageAuthor.name }}</a></span>
		<p class="package-entry--package-description">{{ packageDescription }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			packageName: "test-package",
			packageAuthor: {
				name: "MemoryPenguin",
				url: "https://github.com/MemoryPenguin/"
			},
			packageDescription: "A testing package.",
			packageUrl: "https://github.com/MemoryPenguin/TestRepository/"
		}
	},
	props: [ "packageName", "packageAuthor", "packageDescription", "packageUrl" ]
}
</script>

<style>
.package-entry {
	padding: 0.5rem;
	margin: 1%;
	box-sizing: border-box;
	border-radius: 0.25rem;
	box-shadow: 0px 2px 7px -1px rgba(0,0,0,0.5);
	background-color: rgb(255, 255, 255);
	text-align: left;
	flex-basis: 30%;
	min-width: 350px;
	border: 1px solid rgb(200, 200, 200);
}

	.package-entry--package-name {
		font-size: 1.5rem;
		padding: 0;
		margin: 0;
		margin-bottom: 0.125rem;
	}

	.package-entry--package-author, .package-entry--package-description {
		display: inline-block;
		width: 100%;
		margin-left: 0.5rem;
	}

	.package-entry--package-author {
		margin-bottom: 0.75rem;
	}

	.package-entry--package-author, .package-entry--package-author--author-link, .package-entry--package-author--author-link:hover {
		color: rgb(150, 150, 150);
		font-size: 0.9rem;
	}

	.package-entry--package-description {
		margin: 0 0 0 0.5rem;
		color: rgb(31, 31, 31);
	}
</style>