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

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {}

  toggleFavorite() {}
}
