import ProjectOverview from './ProjectOverview'
export default {
	router: [
		{
			name: 'ProjectOverview',
			path: '/ProjectOverview',
			component: ProjectOverview
		}
	],
	menu: {
		name: '项目概览',
		icon: 'fa fa-tree',
    type: 'link',
    priority: 4.1,
    state: '/ProjectOverview',
    blank: false
	}
}