import { NgModule } from '@angular/core'
import {
  MatButtonModule,
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
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule {}
