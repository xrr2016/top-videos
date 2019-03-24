import { Component, OnInit } from '@angular/core'
import { MatCheckboxChange, MatDialog, MatSnackBar } from '@angular/material'
import { ClearFavoriteComponent } from 'src/app/components/clear-favorite/clear-favorite.component'
import { Video } from 'src/app/models/video'
import { FavoriteService } from 'src/app/services/favorite.service'

interface OriginCheckbox {
  origin: string
  checked: boolean
  text: string
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  videos: Video[]
  isLoading = false
  renderVideos: Video[]

  checkboxs: OriginCheckbox[] = [
    { origin: 'acfun', checked: true, text: 'Acfun' },
    { origin: 'bilibili', checked: true, text: 'Bilibili' }
  ]

  constructor(
    private favoriteService: FavoriteService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
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
        this.renderVideos = videos
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

  toggleVidoesOrigin(event: MatCheckboxChange) {
    const checked = event.checked
    const origin = event.source.name
    const checkbox = this.checkboxs.find(c => c.origin === origin)
    checkbox.checked = checked

    const videos = []

    for (const item of this.checkboxs) {
      const originVideos = this.videos.filter(v => v.origin === item.origin)
      if (item.checked) {
        originVideos.forEach(v => videos.push(v))
      }
    }

    this.renderVideos = videos
  }

  showClearDialog() {
    if (!this.videos.length) {
      return
    }
    const dialogRef = this.dialog.open(ClearFavoriteComponent, {})
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clearFavoriteVideos()
      }
    })
  }

  clearFavoriteVideos() {
    this.videos.length = 0
    this.favoriteService.clearFavoriteVideo()
  }
}
