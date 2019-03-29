import * as express from 'express'

export const join = (req: express.Request, res: express.Response) => res.render('join')
export const login = (req: express.Request, res: express.Response) => res.render('login')
export const logout = (req: express.Request, res: express.Response) => res.render('logout')
export const user = (req: express.Request, res: express.Response) => res.render('user')
export const userDetail = (req: express.Request, res: express.Response) => res.render('userDetail')
export const editProfile = (req: express.Request, res: express.Response) => res.render('editProfile')
export const changePassword = (req: express.Request, res: express.Response) => res.render('changePassword')
