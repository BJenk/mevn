import Vue from 'vue';
import VueRouter from 'vue-router';
import PropertiesList from '@/components/PropertiesList';
import Property from '@/components/Property'
import TodoList from '@/components/TodoList'

Vue.use(VueRouter);
const Bar = { template: '<div>bar {{ $route.params.id }} </div>' }
const routes = [
  { 
    path: '/properties',
    component: PropertiesList 
  },
  { 
    path: '/properties/:propertyID',
    component: Property,
    children :[
      {
        path: '/properties/:propertyID/:todoIndex',
        component: TodoList
      }
    ]
  },
  { 
    path: '/bar/:id',
    component: Bar 
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})


// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//     },
//     {
//       path: '/hi',
//       name: 'Hi',
//       component: Hi,
//     },
//   ],
// });
