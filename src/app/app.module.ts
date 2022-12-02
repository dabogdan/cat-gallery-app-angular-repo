import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryService } from './services/gallery.service';
import { BreedsEffects } from './state/breeds/breeds.effects';
import { breedsReducers } from './state/breeds/breeds.reducers';
import { galleryReducers } from './state/gallery.reducers';
import { CatGalleryState } from './state/gallery.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GalleryEffects } from './state/gallery.effects';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryItemComponent } from './components/gallery/gallery-item/gallery-item.component';
import { FiltersComponent } from './components/gallery/filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';

export const galleryReducerMap: ActionReducerMap<CatGalleryState> = {
  breedsData: breedsReducers,
  imagesData: galleryReducers
}

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot( galleryReducerMap ),
    EffectsModule.forRoot([BreedsEffects, GalleryEffects]),
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
