import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import mailIndex from './apps/mail/pages/mail-index.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter


//todos -nested routes

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/email',
			component: mailIndex,
		},
		{
			path: '/mail/:id',
			component: mailDetails,
		},
		{
			path: '/about',
			component: aboutPage,
		},
	],
}

export const router = createRouter(routerOptions)
