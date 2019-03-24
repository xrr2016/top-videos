import { Component, Input, OnInit } from '@angular/core'
import { Video } from 'src/app/models/video'
import { FavoriteService } from 'src/app/services/favorite.service'

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video
  @Input() page: string

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {}

  toggleFavorite() {
    this.video.favorite = !this.video.favorite
    if (this.video.favorite) {
      this.favoriteService.setFavoriteVideo(this.video)
    } else {
      this.favoriteService.removeFavoriteVideo(this.video)
    }
  }
}
