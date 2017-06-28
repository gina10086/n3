import ApplicationMigration from './ApplicationMigration/ApplicationMigration'
import DataMigration from './DataMigration/DataMigration'
import point from './point/point'
import overview from './overview/overview'
export default {
	router: [
		{
			name: 'ApplicationMigration',
			path: '/ApplicationMigration',
			component: ApplicationMigration
		},
		{
			name: 'DataMigration',
			path: '/DataMigration',
			component: DataMigration
		},
		{
			name: 'point',
			path: '/point',
			component: point
		},
    {
      name: 'overview',
      path: '/overview',
      component: overview
    }
	],
	menu: {
		name: '方案推荐',
		icon: 'icon icon-view',
    type: 'dropdown',
    priority: 4.1,
    children: [
	  	{
  			name: '方案指引',
  	    type: 'link',
  	    priority: 4.1,
  	    state: 'point',
  	    blank: false
  		},
  		{
  			name: '方案概述',
  	    type: 'link',
  	    priority: 4.1,
  	    state: 'overview',
  	    blank: false
  		},
  		{
  			name: '应用迁移方案',
  	    type: 'link',
  	    priority: 4.1,
  	    state: 'ApplicationMigration',
  	    blank: false
  		},
      {
        name: '数据迁移方案',
        type: 'link',
        priority: 4.1,
        state: 'DataMigration',
        blank: false
      }
    ]
	}
}