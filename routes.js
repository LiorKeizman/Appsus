import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import mailIndex from './apps/mail/pages/mail-index.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.cmp.js'
import mailEditCmp from './apps/mail/pages/mail-edit.cmp.js'
import noteIndex from './apps/keep/pages/note-index.cmp.js'
// import noteDetails from './apps/mail/pages/note-details.cmp.js'

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
			path: '/email/:id',
			component: mailDetails,
		},
		{
            path: '/email/edit/:id?',
            component: mailEditCmp
        },
		// {
		// 	path: '/sent',
		// 	component: mailIndex,
		// },
		{
			path: '/keep',
			component: noteIndex,
		},
		// {
		// 	path: '/keep/:id',
		// 	component: noteDetails,
		// },
		{
			path: '/about',
			component: aboutPage,
		},
	],
}

export const router = createRouter(routerOptions)
