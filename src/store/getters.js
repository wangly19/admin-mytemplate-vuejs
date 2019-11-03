export default {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,

  // 路由组件
  routes: state => state.routers.routes,
  addRoutes: state => state.routers.addRoutes,

  // app
  isCollapse: state => state.app.isCollapse,
}