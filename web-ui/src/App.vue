<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App. Have fun!!" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HelloWorld from "./components/HelloWorld.vue"

import io from 'socket.io-client';

export default defineComponent({
	name: "App",
	data() {
		return { 
			// socket: io('http://localhost:3000/')
			socket: io({transports:['websocket']})
		}
	},
	components: {
		HelloWorld,
	},
	mounted() {
		this.socket.on('RESPONSE_MSG', (data) => {
			console.log(data)
		})
		this.socket.emit('connection')
	}
})
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
