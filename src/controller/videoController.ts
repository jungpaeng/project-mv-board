import * as express from 'express'
import route from '../constant/route'

export const root = (req: express.Request, res: express.Response) =>
  res.render('root', { pageTitle: 'Home', videos: [] })

export const search = (req: express.Request, res: express.Response) => {
  const { query: { term: searchingBy } } = req

  res.render(
    'search',
    {
      pageTitle: 'Search',
      searchingBy,
      videos: []
    }
  )
}

export const video = (req: express.Request, res: express.Response) =>
  res.render('video', { pageTitle: 'Video' })

export const getUpload = (req: express.Request, res: express.Response) =>
  res.render('upload', { pageTitle: 'Upload' })

export const postUpload = (req: express.Request, res: express.Response) => {
  const { body: { file, title, description } } = req
  // TODO: Upload and save video
  res.redirect(route.videoDetail('0'))

}

export const videoDetail = (req: express.Request, res: express.Response) =>
  res.render('videoDetail', { pageTitle: 'Video Detail' })

export const editVideo = (req: express.Request, res: express.Response) =>
  res.render('editVideo', { pageTitle: 'Edit Video' })

export const deleteVideo = (req: express.Request, res: express.Response) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' })
