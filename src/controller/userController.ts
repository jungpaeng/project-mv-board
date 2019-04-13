import * as express from 'express'
import route from '../constant/route'
import User from '../model/user'

export const getJoin = (req: express.Request, res: express.Response) =>
  res.render('join', { pageTitle: 'Join' })

export const postJoin = async (
  req: express.Request,
  res: express.Response
) => {
  const {
    body: { name, email, password, password2 }
  } = req

  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    try {
      const user = await new User({
        name,
        email
      })
      await User.register(user, password)
      res.redirect(route.root)
    } catch (error) {
      console.error(error)
      res.redirect(route.join)
    }
  }
}

export const getLogin = (req: express.Request, res: express.Response) =>
  res.render('login', { pageTitle: 'Login' })

export const postLogin = (req: express.Request, res: express.Response) => {
  res.redirect(route.root)
}

export const logout = (req: express.Request, res: express.Response) => {
  // TODO: Process Log Out
  res.redirect(route.root)
}

export const user = (req: express.Request, res: express.Response) =>
  res.render('user', { pageTitle: 'User' })

export const userDetail = (req: express.Request, res: express.Response) =>
  res.render('userDetail', { pageTitle: 'User Detail' })

export const editProfile = (req: express.Request, res: express.Response) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' })

export const changePassword = (req: express.Request, res: express.Response) =>
  res.render('changePassword', { pageTitle: 'Change Password' })
