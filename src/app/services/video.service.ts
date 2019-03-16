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
    }
  }
}
