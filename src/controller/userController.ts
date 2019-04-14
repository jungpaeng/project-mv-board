import * as express from 'express'
import passport from 'passport'
import passportFacebook from 'passport-facebook'
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

export const githubLoginCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  cb: (error: any, user?: any) => void
) => {
  const {
    id,
    photos,
    displayName,
    emails
  } = profile
  const photo = (photos || [{ value: '' }])[0].value
  const email = (emails || [{ value: '' }])[0].value

  try {
    const user = await User.findOne({ email })

    if (user) {
      user.githubId = Number(id)
      user.save()
      return cb(null, user)
    }

    const newUser = await User.create({
      email,
      name: displayName,
      githubId: id,
      avatarUrl: photo
    })
    return cb(null, newUser)

  } catch (error) {
    return cb(error)
  }
}

export const facebookLogin = passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
})

export const facebookLoginCallback: passportFacebook.VerifyFunction = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const {
    id,
    displayName,
    emails
  } = profile
  const email = (emails || [{ value: '' }])[0].value

  try {
    const user = await User.findOne({ email })

    if (user) {
      user.facebookId = Number(id)
      user.save()
      return done(null, user)
    }

    const newUser = await User.create({
      email,
      name: displayName,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
    })
    return done(null, newUser)

  } catch (error) {
    return done(error)
  }
}

export const postGithubLogin = (req: express.Request, res: express.Response) => {
  res.redirect(route.root)
}

export const postFacebookLogin = (req: express.Request, res: express.Response) =>
  res.redirect(route.root)

export const logout = (req: express.Request, res: express.Response) => {
  req.logout()
  res.redirect(route.root)
}

export const user = (req: express.Request, res: express.Response) =>
  res.render('user', { pageTitle: 'User' })

export const userMe = (req: express.Request, res: express.Response) => {
  res.render(
    'userDetail',
    {
      pageTitle: 'My Profile',
      user: req.user
    }
  )
}

export const userDetail = async (req: express.Request, res: express.Response) => {
  const { params: { id } } = req

  try {
    const user = await User.findById(id).populate('videos')
    res.render(
      'userDetail',
      {
        pageTitle: 'User Detail',
        user
      }
    )
  } catch (error) {
    res.redirect(route.root)
  }
}

export const getEditProfile = (req: express.Request, res: express.Response) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' })

export const postEditProfile = async (req: express.Request, res: express.Response) => {
  const {
    body: { name, email },
    file = { path: '' }
  } = req

  try {
    await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        email,
        avatarUrl: file.path || req.user.avatarUrl
      }
    )
    res.redirect(route.me)
  } catch (error) {
    res.redirect(`${route.user}${route.editProfile}`)
  }
}

export const getChangePassword = (req: express.Request, res: express.Response) =>
  res.render('changePassword', { pageTitle: 'Change Password' })

export const postChangePassword = async (req: express.Request, res: express.Response) => {
  const {
    body: {
      oldPassword,
      newPassword,
      newPassword2
    }
  } = req

  try {
    if (newPassword !== newPassword2) {
      res.status(400)
      res.redirect(`${route.user}${route.changePassword}`)
      return
    }

    await req.user.changePassword(oldPassword, newPassword)
    res.redirect(route.me)
  } catch (error) {
    res.status(400)
    res.redirect(`${route.user}${route.changePassword}`)
  }
}
