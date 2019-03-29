import * as express from 'express'

export const join = (req: express.Request, res: express.Response) =>
  res.render('join', { pageTitle: 'Join' })
export const login = (req: express.Request, res: express.Response) =>
  res.render('login', { pageTitle: 'Login' })
export const logout = (req: express.Request, res: express.Response) =>
  res.render('logout', { pageTitle: 'Logout' })
export const user = (req: express.Request, res: express.Response) =>
  res.render('user', { pageTitle: 'User' })
export const userDetail = (req: express.Request, res: express.Response) =>
  res.render('userDetail', { pageTitle: 'User Detail' })
export const editProfile = (req: express.Request, res: express.Response) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' })
export const changePassword = (req: express.Request, res: express.Response) =>
  res.render('changePassword', { pageTitle: 'Change Password' })
