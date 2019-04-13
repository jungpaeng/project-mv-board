import * as express from 'express'
import passport from 'passport'
import { Profile } from 'passport-github'
import route from '../constant/route'
import User from '../model/user'

export const getJoin = (req: express.Request, res: express.Response) =>
  res.render('join', { pageTitle: 'Join' })

export const postJoin = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
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
      next()
    } catch (error) {
      console.error(error)
      res.redirect(route.join)
    }
  }
}

export const getLogin = (req: express.Request, res: express.Response) =>
  res.render('login', { pageTitle: 'Login' })

export const postLogin = passport.authenticate('local', {
  failureRedirect: route.login,
  successRedirect: route.root
})

export const githubLogin = passport.authenticate('github')

export const githubLoginCallback = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  cb: (error: any, user?: any) => void
) => {
  // TODO: Github Session
}

export const postGithubLogin = (req: express.Request, res: express.Response) => {
  res.send(route.root)
}

export const logout = (req: express.Request, res: express.Response) => {
  req.logout()
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
