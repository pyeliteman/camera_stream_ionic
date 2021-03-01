import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule {}
