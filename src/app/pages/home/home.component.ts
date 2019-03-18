import { Component, OnInit } from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Origin, Video } from 'src/app/models/video'
import { VideoService } from 'src/app/services/video.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: Video[]
  isLoading = true
  origin = Origin.BILIBILI

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.getVideos()
  }

  onSelectedTabChange(event: MatTabChangeEvent) {
    this.changeVideoOrigin(event.index)
    this.getVideos()
  }

  changeVideoOrigin(index = 0) {
    switch (index) {
      case 0:
        this.origin = Origin.BILIBILI
        break
      case 1:
        this.origin = Origin.ACFUN
        break
      case 2:
        this.origin = Origin.TENCENT
        break
      case 3:
        this.origin = Origin.IQIYI
        break
      case 4:
        this.origin = Origin.YOUKU
        break
    }
  }

  getVideos() {
    this.isLoading = true
    this.videoService.getTopVideos(this.origin).subscribe((videos: Video[]) => {
      this.videos = videos
      this.isLoading = false
    })
  }
}
