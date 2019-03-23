import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material'

@NgModule({
  exports: [
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
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
