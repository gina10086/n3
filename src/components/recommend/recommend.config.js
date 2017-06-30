import ApplicationMigration from './ApplicationMigration/ApplicationMigration'
import DataMigration from './DataMigration/DataMigration'
import point from './point/point'
import overview from './overview/overview'
export default {
	router: [
    {
      name: 'recommend-ApplicationMigration',
      path: '/recommend/ApplicationMigration',
      component: ApplicationMigration
    },
    {
      name: 'recommend-DataMigration',
      path: '/recommend/DataMigration',
      component: DataMigration
    },
    {
      name: 'recommend-point',
      path: '/recommend/point',
      component: point
    },
    {
      name: 'recommend-overview',
      path: '/recommend/overview',
      component: overview
    }
	],
	menu: {
		name: '方案推荐',
		icon: 'fa fa-tasks',
    type: 'dropdown',
    priority: 4.1,
    children: [
	  	{
  			name: '方案指引',
  	    type: 'link',
  	    priority: 4.1,
  	    state: '/recommend/point',
  	    blank: false
  		},
  		{
  			name: '方案概述',
  	    type: 'link',
  	    priority: 4.1,
  	    state: '/recommend/overview',
  	    blank: false
  		},
  		{
  			name: '应用迁移方案',
  	    type: 'link',
  	    priority: 4.1,
  	    state: '/recommend/ApplicationMigration',
  	    blank: false
  		},
      {
        name: '数据迁移方案',
        type: 'link',
        priority: 4.1,
        state: '/recommend/DataMigration',
        blank: false
      }
    ]
	}
}