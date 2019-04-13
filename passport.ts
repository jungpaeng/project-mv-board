import passport from 'passport'
import passportGithub from 'passport-github'
import * as dotenv from 'dotenv'
import User from './src/model/user'
import { githubLoginCallback } from './src/controller/userController'
import route from './src/constant/route'

const GithubStrategy = passportGithub.Strategy

dotenv.config()

passport.use(User.createStrategy())
passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID as string,
    clientSecret: process.env.GH_SECRET as string,
    callbackURL: `http://localhost:3000${route.githubCallback}`
  },
  githubLoginCallback
))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
