import { Component, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material'
import { Origin } from 'src/app/models/origin'
import { Video } from 'src/app/models/video'
import { FavoriteService } from 'src/app/services/favorite.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  videos: Video[]
  isLoading = false

  origins: Origin[]

  constructor(
    private favoriteService: FavoriteService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadVideos()
  }

  loadVideos() {
    this.isLoading = true
    this.favoriteService
      .getFavoriteVideos()
      .then(videos => {
        this.videos = videos
        this.isLoading = false
      })
      .catch(err => {
        this.isLoading = false

        const snackBarRef = this.snackBar.open('出错了，请重试!', '确定')
        snackBarRef.afterDismissed().subscribe(() => {
          this.loadVideos()
        })
      })
  }
}
