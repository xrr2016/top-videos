import { Injectable } from '@angular/core'
import * as localforage from 'localforage'
import { Video } from '../models/video'

const STORAGE_KEY = 'FAVORITE_VIDEOS'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor() {
    localforage.getItem(STORAGE_KEY).then(videos => {
      if (!videos) {
        localforage.setItem(STORAGE_KEY, [])
      }
    })
  }

  async getFavoriteVideos() {
    const videos = await localforage.getItem(STORAGE_KEY)

    return videos as Video[]
  }

  async setFavoriteVideo(video: Video) {
    const videos = await this.getFavoriteVideos()

    if (videos.includes(video)) {
      return
    }

    videos.push(video)

    return localforage
      .setItem(STORAGE_KEY, videos)
      .then(() => true, () => false)
      .catch(err => err)
  }

  async removeFavoriteVideo(video: Video) {
    let videos = await this.getFavoriteVideos()

    videos = videos.filter(v => v.url !== video.url)

    return localforage
      .setItem(STORAGE_KEY, videos)
      .then(() => true, () => false)
      .catch(err => err)
  }

  async clearFavoriteVideo() {
    return localforage
      .clear()
      .then(() => true, () => false)
      .catch(err => err)
  }
}
