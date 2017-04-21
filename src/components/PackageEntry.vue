<template>
	<div class="package-entry">
		<md-card
			md-with-hover=true>
			<md-card-header>
				<div class="md-title"><a :href="package.packageUrl">{{ package.packageName }}</a></div>
				<div class="md-subtitle">by <a :href="package.packageAuthor.url">{{ package.packageAuthor.name }}</a></div>
			</md-card-header>

			<md-card-content>{{ package.packageDescription }}</md-card-content>
		</md-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			package: {
				packageName: "test-package",
				packageAuthor: {
					name: "MemoryPenguin",
					url: "https://github.com/MemoryPenguin/"
				},
				packageDescription: "A testing package.",
				packageUrl: "https://github.com/MemoryPenguin/TestRepository/"
			}
		}
	},
	props: [ "package" ],
	methods: {
		emitCopyUrl: function() {
			this.$emit('urlCopy', this.package.packageUrl);
		}
	}
}
</script>

<style>
.package-entry {
	padding: 0.5rem;
	margin: 1%;
	box-sizing: border-box;
	text-align: left;
	flex-basis: 30%;
	min-width: 350px;
}

.package-url-text {
	display: none;
}
</style>