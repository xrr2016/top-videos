import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material'

@NgModule({
  exports: [
    MatRippleModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule {}
