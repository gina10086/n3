import research from './research'
import application from './application/application'
import DataResearch from './DataResearch/DataResearch'
import details from './details/details'
export default {
	router: [
    {
      name: 'research',
      path: '/research',
      component: research,
      children: [
    		{
    			name: 'application',
    			path: 'application',
    			component: application
    		},
    		{
    			name: 'DataResearch',
    			path: 'DataResearch',
    			component: DataResearch
    		},
    		{
    			name: 'details',
    			path: 'details',
    			component: details
    		}
      ]
    }
	],
	menu: {
		name: '调研评估',
		icon: 'icon icon-search',
    type: 'dropdown',
    priority: 4.1,
    children: [
	  	{
  			name: '应用调研',
  	    type: 'link',
  	    priority: 4.1,
  	    state: '/research/application',
  	    blank: false
  		},
  		{
  			name: '数据调研',
  	    type: 'link',
  	    priority: 4.1,
  	    state: '/research/DataResearch',
  	    blank: false
  		},
  		{
  			name: '调研详情',
  	    type: 'link',
  	    priority: 4.1,
  	    state: '/research/details',
  	    blank: false
  		}
    ]
	}
}