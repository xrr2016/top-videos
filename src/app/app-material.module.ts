import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material'

@NgModule({
  exports: [
    MatRippleModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule {}
