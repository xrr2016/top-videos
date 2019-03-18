import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Origin, Video } from '../models/video'

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) {}

  getTopVideos(origin: Origin): Observable<Video[]> {
    switch (origin) {
      case Origin.BILIBILI:
        return this.http.get<Video[]>('/.netlify/functions/bilibili')
      case Origin.ACFUN:
        return this.http.get<Video[]>('/.netlify/functions/acfun')
      case Origin.IQIYI:
        return this.http.get<Video[]>('/.netlify/functions/iqiyi')
      case Origin.TENCENT:
        return this.http.get<Video[]>('/.netlify/functions/tencent')
      case Origin.YOUKU:
        return this.http.get<Video[]>('/.netlify/functions/youku')
    }
  }
}
