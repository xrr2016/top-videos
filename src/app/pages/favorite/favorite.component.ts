import { Component, OnInit } from '@angular/core'
import { FavoriteService } from 'src/app/services/favorite.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  videos: []

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.favoriteService
      .getFavoriteVideos()
      .then(val => console.log('val :', val))
  }
}
