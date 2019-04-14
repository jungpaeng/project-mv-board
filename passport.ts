import passport from 'passport'
import passportGithub from 'passport-github'
import passportFacebook from 'passport-facebook'
import * as dotenv from 'dotenv'
import User from './src/model/user'
import { githubLoginCallback, facebookLoginCallback } from './src/controller/userController'
import route from './src/constant/route'

const GithubStrategy = passportGithub.Strategy
const FacebookStrategy = passportFacebook.Strategy

dotenv.config()

passport.use(User.createStrategy())
passport.use(new GithubStrategy(
  {
    clientID: process.env.GH_ID as string,
    clientSecret: process.env.GH_SECRET as string,
    callbackURL: `http://localhost:3000${route.githubCallback}`
  },
  githubLoginCallback
))
passport.use(new FacebookStrategy(
  {
    clientID: process.env.FB_ID as string,
    clientSecret: process.env.FB_SECRET as string,
    callbackURL: `https://red-pug-50.localtunnel.me${route.facebookCallback}`,
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  facebookLoginCallback
))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
