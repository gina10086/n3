import BatchDeployment from './ApplicationMigration/BatchDeployment/BatchDeployment'
import MirrorMigration from './ApplicationMigration/MirrorMigration/MirrorMigration'
import StructuredMigration from './DataMigratio/StructuredMigration/StructuredMigration'
import UnStructuredMigration from './DataMigratio/UnStructuredMigration/UnStructuredMigration'

export default {
	router: [
		{
			name: 'ApplicationMigration-BatchDeployment',
			path: '/ApplicationMigration/BatchDeployment',
			component: BatchDeployment
		},
    {
      name: '/ApplicationMigration-MirrorMigration',
      path: '/ApplicationMigration/MirrorMigration',
      component: MirrorMigration
    },
		{
			name: 'DataMigratio-StructuredMigration',
			path: '/DataMigratio/StructuredMigration',
			component: StructuredMigration
		},
    {
      name: 'DataMigratio-UnStructuredMigration',
      path: '/DataMigratio/UnStructuredMigration',
      component: UnStructuredMigration
    }
	],
	menu: {
		name: '资源迁移',
		icon: 'icon icon-view',
    type: 'dropdown',
    priority: 4.1,
    children: [
	  	{
  			name: '应用迁移',
  	    type: 'dropdown',
  	    priority: 4.1,
  	    children: [
          {
            name: '批量部署',
            type: 'link',
            priority: 4.1,
            state: 'ApplicationMigration-BatchDeployment'
          },
          {
            name: '镜像迁移',
            type: 'link',
            priority: 4.1,
            state: 'ApplicationMigration-MirrorMigration'
          }
        ]
  		},
      {
        name: '数据迁移',
        type: 'dropdown',
        priority: 4.1,
        children: [
          {
            name: '结构化数据迁移',
            type: 'link',
            priority: 4.1,
            state: 'UnDataMigratio-StructuredMigration'
          },
          {
            name: '非结构化数据迁移',
            type: 'link',
            priority: 4.1,
            state: 'DataMigratio-UnStructuredMigration'
          }
        ]
      }
    ]
	}
}