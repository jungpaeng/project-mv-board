import * as express from 'express'

export const root = (req: express.Request, res: express.Response) => res.render('root')
export const search = (req: express.Request, res: express.Response) => res.send('search')
export const video = (req: express.Request, res: express.Response) => res.send('video')
export const upload = (req: express.Request, res: express.Response) => res.send('upload')
export const videoDetail = (req: express.Request, res: express.Response) => res.send('videoDetail')
export const editVideo = (req: express.Request, res: express.Response) => res.send('editVideo')
export const deleteVideo = (req: express.Request, res: express.Response) => res.send('deleteVideo')
