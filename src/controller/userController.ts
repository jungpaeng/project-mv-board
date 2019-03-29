import * as express from 'express'

export const join = (req: express.Request, res: express.Response) => res.send('Join')
export const login = (req: express.Request, res: express.Response) => res.send('Login')
export const logout = (req: express.Request, res: express.Response) => res.send('Logout')
export const user = (req: express.Request, res: express.Response) => res.send('User')
export const userDetail = (req: express.Request, res: express.Response) => res.send('UserDetail')
export const editProfile = (req: express.Request, res: express.Response) => res.send('EditProfile')
export const changePassword = (req: express.Request, res: express.Response) => res.send('ChangePassword')
