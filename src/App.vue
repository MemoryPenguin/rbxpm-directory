<template>
	<div id="app">
		<md-toolbar class="md-dense">
			<h2 class="md-title">RPM Directory</h2>
			<md-input-container style="flex: 1 1 0%;">
				<label>Search</label>
				<md-input v-model="searchText"></md-input>
			</md-input-container>
		</md-toolbar>

		<div class="gutter">
			<p>This is a proof-of-concept package directory for <a target="_blank" href="https://www.roblox.com/library/742132565/Roblox-Package-Manager">RPM</a>.</p>
			<span ref="clipboardCopy" style="display:none"></span>
			<div class="package-list">
				<PackageEntry 
					v-for="package in packages"
					:key="package.id"
					v-bind:package="package"
					v-if="package.packageName.indexOf(searchText) !== -1 || package.packageDescription.indexOf(searchText) !== -1">
				</PackageEntry>
			</div>
		</div>
	</div>
</template>

<script>
import Clipboard from "clipboard"
import PackageEntry from './components/PackageEntry.vue'
import packages from "./assets/packages.json"

// Assign an id attribute automatically
for (let i = 0; i < packages.length; i++) {
	packages[i]["id"] = i;
}

export default {
	name: 'app',
	data() {
		return {
			packages: packages,
			searchText: ''
		}
	},
	components: {
		PackageEntry
	}
}
</script>

<style>
.gutter {
	width: 80%;
	margin-left: 10%;
}

.package-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}

@include max-width(640px) {
	.package-list {
		flex-direction: column;
	}
}
</style>
