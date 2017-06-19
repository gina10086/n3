import ProjectControlList from './ProjectControl.list'
export default {
	router: [
		{
			name: 'ProjectControlList',
			path: '/',
			component: ProjectControlList
		}
	],
	menu: [
		{
			name: '项目管理',
			icon: 'ico-monitor',
      type: 'dropdown',
      children: [
      	{
      		name: '项目列表',
      		type: 'link',
      		blank: false,
      		state: '',
      		priority: 4.1
      	},
      	{
      		name: '项目列表2',
      		type: 'link',
      		blank: false,
      		state: 'ProjectControlList',
      		priority: 2.1
      	}
      ]
		}
	]
}