import { Injectable } from '@angular/core'
import * as localforage from 'localforage'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor() {}

  async getFavoriteVideos() {
    const videos = await localforage.getItem('favorite-videos')

    return videos as []
  }

  // async setFavoriteVideo(video: Video) {
  //   const videos = await this.getFavoriteVideos()
  //   videos.push(video)

  //   return localforage
  //     .setItem('favorite-videos', videos)
  //     .then(() => true, () => false)
  //     .catch(err => err)
  // }

  // async removeFavoriteVideo(video: Video) {
  //   let videos = await this.getFavoriteVideos()

  //   videos = videos.filter(v => v.url !== video.url)

  //   return localforage
  //     .setItem('favorite-videos', videos)
  //     .then(() => true, () => false)
  //     .catch(err => err)
  // }

  // async clearFavoriteVideo(video: Video) {
  //   return localforage
  //     .clear()
  //     .then(() => true, () => false)
  //     .catch(err => err)
  // }
}
