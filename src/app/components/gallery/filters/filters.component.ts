import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { BreedsData, CatGalleryState } from 'src/app/state/gallery.state';
import * as BreedsActions from 'src/app/state/breeds/breeds.actions';
import { selectBreedsData } from 'src/app/state/gallery.selectors';
import { Filter } from '../models/filter'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Filter>();

  breedsData$ = this.store.pipe(select(selectBreedsData))
  @Input() DEFAULT_LIMIT!: string;

  constructor(private store: Store<CatGalleryState>) { }

  loadBreeds(): void {
    this.store.dispatch(BreedsActions.loadBreeds())
  }

  ngOnInit(): void {
    this.loadBreeds();
  }

  submitted(limit: string, breedName: string): void {
    if(breedName){
      if (breedName === 'All breeds') {
        this.onSubmit.emit({limit, breed_ids: ''});
      } else {
        this.store.select('breedsData').subscribe(
          (data: BreedsData) => {
            const getBreedId = data.breeds.filter((e) => {
              return e.name === breedName;
            })
            const filters = {
              limit,
              breed_ids: getBreedId[0].id
            }
            this.onSubmit.emit(filters)
          }
        );
      }
    } else{
      this.onSubmit.emit({limit, breed_ids: ''});
    }
  }

}
