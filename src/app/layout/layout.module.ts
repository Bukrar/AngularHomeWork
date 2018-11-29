import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule
  ],
exports:[
    LayoutComponent
]
})
export class LayoutModule { }
