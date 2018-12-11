import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
	{
		path: '/home',
		name: 'home',
		component: () => import('pages/home'),
		children: [
			{
				name: 'home-product',
				path: 'product/:id',
				component: () => import('pages/product')
			}
		]
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import('pages/cart') 
	},
	{
		path: '/category',
		name: 'category',
		component: () => import('pages/category') 
	},
	{
		path: '/search',
		name: 'search',
		component: () => import('pages/search') 
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('pages/profile') 
	},
	{
		path: '*',
		redirect: '/home' 
	},
	
];

export default new Router({
  routes
})
