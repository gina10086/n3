import BatchDeployment from './ApplicationMigration/BatchDeployment/BatchDeployment'
import MirrorMigration from './ApplicationMigration/MirrorMigration/MirrorMigration'
import StructuredMigration from './DataMigratio/StructuredMigration/StructuredMigration'
import UnStructuredMigration from './DataMigratio/UnStructuredMigration/UnStructuredMigration'
import ResourceMigration from './ResourceMigration'
export default {
	router: [
    {
      name: 'ResourceMigration',
      path: '/ResourceMigration',
      component: ResourceMigration,
      children: [
        {
          name: 'ApplicationMigration',
          path: 'ApplicationMigration',
          component: ResourceMigration,
          children: [
            {
              name: 'BatchDeployment',
              component: BatchDeployment,
              path: 'BatchDeployment'
            },
            {
              name: 'MirrorMigration',
              component: MirrorMigration,
              path: 'MirrorMigration'
            }
          ]
        },
        {
          name: 'DataMigratio',
          path: 'DataMigratio',
          component: ResourceMigration,
          children: [
            {
              name: 'StructuredMigration',
              component: StructuredMigration,
              path: 'StructuredMigration'
            },
            {
              name: 'UnStructuredMigration',
              component: UnStructuredMigration,
              path: 'UnStructuredMigration'
            }
          ]
        }
      ]
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
            state: '/ResourceMigration/ApplicationMigration/BatchDeployment'
          },
          {
            name: '镜像迁移',
            type: 'link',
            priority: 4.1,
            state: '/ResourceMigration/ApplicationMigration/MirrorMigration'
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
            state: '/ResourceMigration/DataMigratio/StructuredMigration'
          },
          {
            name: '非结构化数据迁移',
            type: 'link',
            priority: 4.1,
            state: '/ResourceMigration/DataMigratio/UnStructuredMigration'
          }
        ]
      }
    ]
	}
}