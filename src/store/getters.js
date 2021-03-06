const getters = {
  sidebar: state => state.app.sidebar,
  sessionId: state => state.user.sessionId,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  visitedViews: state => state.tagsView.visitedViews,
  houseInfoData: state => state.houseInfoData,
  fhdAuditData: state => state.fhdAuditData,
  messageData: state => state.app.messageData
}
export default getters
