import * as express from 'express'
import route from '../constant/route'

export const getJoin = (req: express.Request, res: express.Response) =>
  res.render('join', { pageTitle: 'Join' })

export const postJoin = (req: express.Request, res: express.Response) => {
  const {
    body: { name, email, password, password2 }
  } = req

  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    // TODO: Register User
    // TODO: Log user in
    res.redirect(route.root)
  }
}

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
