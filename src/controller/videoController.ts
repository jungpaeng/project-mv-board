import * as express from 'express'

export const root = (req: express.Request, res: express.Response) =>
  res.render('root', { pageTitle: 'Home' })

export const search = (req: express.Request, res: express.Response) => {
  const { query: { term: searchingBy } } = req

  res.render(
    'search',
    {
      pageTitle: 'Search',
      searchingBy
    }
  )
}

export const video = (req: express.Request, res: express.Response) =>
  res.render('video', { pageTitle: 'Video' })

export const upload = (req: express.Request, res: express.Response) =>
  res.render('upload', { pageTitle: 'Upload' })

export const videoDetail = (req: express.Request, res: express.Response) =>
  res.render('videoDetail', { pageTitle: 'Video Detail' })

export const editVideo = (req: express.Request, res: express.Response) =>
  res.render('editVideo', { pageTitle: 'Edit Video' })

export const deleteVideo = (req: express.Request, res: express.Response) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' })
