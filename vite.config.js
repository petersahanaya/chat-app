import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server:{}
};

export default config;
