<template>
	<div id="app">
		<h1>Roblox Package Directory</h1>
		<p>This is a proof-of-concept package directory for <a target="_blank" href="https://www.roblox.com/library/742132565/Roblox-Package-Manager">RPM</a>.</p>
		<input class="package-search" v-model="searchText" placeholder="search" />
		<div class="package-list">
			<PackageEntry 
				v-for="package in packages"
				v-if="package.packageName.indexOf(searchText) !== -1"
				:key="package.id"
				v-bind:packageName="package.packageName"
				v-bind:packageAuthor="package.packageAuthor"
				v-bind:packageDescription="package.packageDescription"
				v-bind:packageUrl="package.packageUrl">
			</PackageEntry>
		</div>
	</div>
</template>

<script>
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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1, h2 {
	font-weight: normal;
}

.package-search {
	padding: 0.5rem;
	border-radius: 0.25rem;
	border: 1px solid gray;
	width: 80%;
	box-shadow: 0px 2px 7px -1px rgba(0,0,0,0.25);
}

.package-search:focus {
	border: 1px solid #f49542;
	outline: none;
}

a {
	color: #f49542;
}

a:hover {
	color: #f7a862;
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
