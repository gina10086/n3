import ProjectControlList from './ProjectControl.list'
import ProjectControlList2 from './project2'
export default {
	router: [
		{
			name: 'ProjectControlList',
			path: '/',
			component: ProjectControlList
		},
		{
			name: 'ProjectControlList2',
			path: '/ProjectControlList2',
			component: ProjectControlList2
		}
	],
	menu: {
		name: '项目管理',
		icon: 'ico-monitor',
        type: 'dropdown',
        children: [
        	{
        		name: '项目列表',
        		type: 'dropdown',
        		blank: false,
        		priority: 4.1,
                children: [
                    {
                       name: '进入项目',
                       type: 'link',
                       blank: false,
                       state: 'ProjectControlList2',
                       priority: 2.1
                    }
                ]
        	}
        ]
	}
}