const ROOT = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

const USER = '/user'
const USER_DETAIL = '/:id'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'
const ME = '/me'

const VIDEO = '/video'
const UPLOAD = '/upload'
const VIDEO_DETAIL = '/:id'
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'

const GITHUB = '/auth/github'
const GITHUB_CALLBACK = '/auth/github/callback'

const FACEBOOK = '/auth/facebook'
const FACEBOOK_CALLBACK = '/auth/facebook/callback'

const route = {
  root: ROOT,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  userDetail: (id?: string) => (id ? `${USER}/${id}` : USER_DETAIL),
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: (id?: string) => (id ? `${VIDEO}/${id}` : VIDEO_DETAIL),
  editVideo: (id?: string) => (id ? `${VIDEO}/${id}/edit` : EDIT_VIDEO),
  deleteVideo: (id?: string) => (id ? `${VIDEO}/${id}/delete` : DELETE_VIDEO),
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK
}

export default route
