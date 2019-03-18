import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from './app-material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AboutComponent } from './pages/about/about.component'
import { FavoriteComponent } from './pages/favorite/favorite.component'
import { HomeComponent } from './pages/home/home.component';
import { VideoItemComponent } from './components/video-item/video-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FavoriteComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
