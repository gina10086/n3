import DeliveryManagement from './DeliveryManagement.vue'
export default {
	router: [
		{
			name: 'DeliveryManagement',
			path: '/DeliveryManagement',
			component: DeliveryManagement
    }
	],
	menu: {
		name: '交付管理',
		icon: 'fa fa-wrench',
    type: 'link',
    priority: 4.1,
    state: '/DeliveryManagement'
	}
}