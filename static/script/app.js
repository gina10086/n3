let menuProvider = [
  {
    name: 'Inventory',
    icon: 'fa fa-tree',
    type: 'dropdown',
    priority: 1.1,
    children: [{
      name: 'Anlytics',
      state: 'triangular.inventory-plancode',
      type: 'link'
    }, {
      name: 'General',
      state: 'triangular.inventory-general',
      type: 'link'
    }]
  }
];
Array.prototype.addMenu = function (provider) {
  /*{
   name: 'Inventory',
   icon: 'fa fa-tree',
   type: 'dropdown',
   priority: 1.1,
   children: [{
   name: 'Anlytics',
   state: 'triangular.inventory-plancode',
   type: 'link'
   }, {
   name: 'General',
   state: 'triangular.inventory-general',
   type: 'link'
   }]
   }*/
  nemuProvider.supportsPushState(provider);
};
