import * as express from 'express'
import route from '../constant/route'
import Video from '../model/video'

export const root = async (req: express.Request, res: express.Response) => {
  try {
    const videos = await Video.find({})
    res.render('root', { pageTitle: 'Home', videos })
  } catch (error) {
    console.error(error)
    res.render('root', { pageTitle: 'Home', videos: [] })
  }
}

export const search = (req: express.Request, res: express.Response) => {
  const {
    query: { term: searchingBy }
  } = req

  res.render('search', {
    pageTitle: 'Search',
    searchingBy,
    videos: []
  })
}

export const video = (req: express.Request, res: express.Response) =>
  res.render('video', { pageTitle: 'Video' })

export const getUpload = (req: express.Request, res: express.Response) =>
  res.render('upload', { pageTitle: 'Upload' })

export const postUpload = async (
  req: express.Request,
  res: express.Response
) => {
  const {
    body: { title, description },
    file: { path }
  } = req

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  })

  console.log(newVideo)

  res.redirect(route.videoDetail(newVideo.id))
}

export const videoDetail = async (
  req: express.Request,
  res: express.Response
) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    res.render('videoDetail', { pageTitle: 'Video Detail', video })
  } catch (error) {
    console.error(error)
    res.redirect(route.root)
  }
}

export const editVideo = (req: express.Request, res: express.Response) =>
  res.render('editVideo', { pageTitle: 'Edit Video' })

export const deleteVideo = (req: express.Request, res: express.Response) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' })
