const ROOT = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

const USER = '/user'
const USER_DETAIL = '/:id'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'

const VIDEO = '/video'
const UPLOAD = '/upload'
const VIDEO_DETAIL = '/:id'
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'

const route = {
  root: ROOT,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  userDetail: (id?: string) => (
    id ? `${USER}/${id}` : USER_DETAIL
  ),
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: (id?: string) => (
    id ? `${VIDEO}/${id}` : VIDEO_DETAIL
  ),
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
}

export default route
