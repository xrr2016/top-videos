import { Component, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Channel, Origin } from 'src/app/models/origin'
import { acfun, bilibili } from 'src/app/models/origins'
import { Video } from 'src/app/models/video'
import { VideoService } from 'src/app/services/video.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: Video[]
  isLoading = false
  origin: Origin = bilibili
  channel: Channel = bilibili.channels[0]

  constructor(
    private videoService: VideoService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getVideos()
  }

  changeOrigin(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.origin = bilibili
        break
      case 1:
        this.origin = acfun
        break
    }

    this.channel = this.origin.channels[0]
    this.getVideos()
  }

  changeChannel(channel: Channel) {
    this.origin.channels.forEach(c => (c.selected = false))
    channel.selected = true
    this.channel = channel

    this.getVideos()
  }

  getVideos() {
    this.isLoading = true
    this.videoService.getTopVideos(this.origin, this.channel).subscribe(
      (videos: Video[]) => {
        this.videos = videos.map(
          v =>
            new Video(
              v.url,
              v.rank,
              v.title,
              v.origin,
              v.play,
              v.image,
              v.author,
              false
            )
        )
        this.isLoading = false
      },
      err => {
        this.isLoading = false

        const snackBarRef = this.snackBar.open('出错了，请重试!', '确定')
        snackBarRef.afterDismissed().subscribe(() => {
          this.getVideos()
        })
      }
    )
  }
}
