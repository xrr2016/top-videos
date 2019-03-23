import { Component, OnInit } from '@angular/core'
import {
  MatCheckboxChange,
  MatDialog,
  MatDialogRef,
  MatSnackBar
} from '@angular/material'
import { Video } from 'src/app/models/video'
import { FavoriteService } from 'src/app/services/favorite.service'

interface OriginCheckbox {
  origin: number
  checked: boolean
  text: string
}

@Component({
  styles: [
    `
      .modal {
        width: 300px;
      }
    `
  ],
  template: `
    <div class="modal">
      <p mat-dialog-title>清除收藏？</p>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="result">取消</button>
        <button mat-button []>确定</button>
      </div>
    </div>
  `
})
class ClearFavoriteDialogComponent {
  result: boolean

  constructor(public dialogRef: MatDialogRef<ClearFavoriteDialogComponent>) {}

  cancel() {
    this.dialogRef.close()
  }
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
    { origin: 1, checked: true, text: 'Acfun' },
    { origin: 0, checked: true, text: 'Bilibili' }
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

    if (checked) {
      this.renderVideos.concat(this.videos.filter(v => v.origin === +origin))
    } else {
      this.renderVideos = this.videos.filter(v => v.origin !== +origin)
    }
  }

  showClearDialog() {
    const dialogRef = this.dialog.open(ClearFavoriteDialogComponent, {
      height: '400px',
      width: '600px'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('result :', result)
    })
  }

  clearFavoriteVideos() {
    this.videos.length = 0
    this.favoriteService.clearFavoriteVideo()
  }
}
