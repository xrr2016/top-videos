import { Component, OnInit } from '@angular/core'
import { Origin, Video } from './models/video'
import { VideoService } from './services/video.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'top vidoes'

  videos: Video[]

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService
      .getTopVideos(Origin.BILIBILI)
      .subscribe((videos: Video[]) => (this.videos = videos))
  }
}
