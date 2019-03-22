import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Channel, Origin } from '../models/origin'
import { Video } from '../models/video'

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) {}

  getTopVideos(origin: Origin, channel: Channel): Observable<Video[]> {
    switch (origin.index) {
      case 0:
        return this.http.get<Video[]>(
          `/.netlify/functions/bilibili?cid=${channel.id}`
        )
      case 1:
        return this.http.get<Video[]>(
          `/.netlify/functions/acfun?cid=${channel.id}`
        )
    }
  }
}
