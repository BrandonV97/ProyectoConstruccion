import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './paginas/productos/productos.component';

import { SwiperModule } from 'swiper/angular';
import { PaginasModule } from './paginas/paginas.module';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
