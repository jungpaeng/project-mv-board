import * as express from 'express'

export const root = (req: express.Request, res: express.Response) => res.send('Root')
export const search = (req: express.Request, res: express.Response) => res.send('Search')
export const video = (req: express.Request, res: express.Response) => res.send('Video')
export const upload = (req: express.Request, res: express.Response) => res.send('Upload')
export const videoDetail = (req: express.Request, res: express.Response) => res.send('VideoDetail')
export const editVideo = (req: express.Request, res: express.Response) => res.send('EditVideo')
export const deleteVideo = (req: express.Request, res: express.Response) => res.send('DeleteVideo')
