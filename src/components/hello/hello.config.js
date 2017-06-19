import hello from './hello'
export default {
	router: [
		{
			name: 'hello',
			path: '/hello',
			component: hello
		}
	],
	menu: [
		{
			name: 'hello',
			icon: 'ico-monitor',
      type: 'link',
      state: 'hello'
		}
	]
}