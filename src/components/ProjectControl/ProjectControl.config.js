import ProjectControl from './ProjectControl'
import ProjectList from './ProjectList/ProjectList'
export default {
  router: [{
    name: 'ProjectControl',
    path: '/ProjectControl',
    component: ProjectControl,
    children: [{
      name: 'ProjectList',
      path: 'ProjectList',
      component: ProjectList
    }]
  }],
  menu: {
    name: '项目管理',
    icon: 'fa fa-briefcase',
    type: 'dropdown',
    children: [{
      name: '项目列表',
      type: 'dropdown',
      blank: false,
      priority: 4.1,
      children: [{
        name: '进入项目',
        type: 'link',
        blank: false,
        state: '/ProjectControl/ProjectList',
        priority: 2.1
      }]
    }]
  }
}