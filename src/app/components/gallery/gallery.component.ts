import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectImagesData } from 'src/app/state/gallery.selectors';
import { CatGalleryState } from 'src/app/state/gallery.state';
import * as GalleryActions from '../../state/gallery.actions';
import { Filter } from './models/filter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  DEFAULT_LIMIT = '10'
  limit: string = this.DEFAULT_LIMIT;
  breed_ids: string = '';

  imagesData$ = this.store.pipe(select(selectImagesData))

  constructor(private store: Store<CatGalleryState> ) { }

  ngOnInit(): void {
    this.loadImages(this.limit)
  }

  loadImages(limit: string, breed_ids?: string): void{
    this.store.dispatch(GalleryActions.loadImages({limit, breed_ids}))
  }

  onFilterSubmit(filters: Filter){
    const { limit, breed_ids  } = filters;
    console.log(typeof limit, typeof breed_ids);

    this.loadImages(limit, breed_ids)
  }

}
