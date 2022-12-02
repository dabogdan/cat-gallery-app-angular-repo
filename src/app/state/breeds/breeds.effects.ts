import { Injectable } from "@angular/core";
import * as BreedsActions from "./breeds.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CatGalleryState } from "../gallery.state";
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { GalleryService } from "src/app/services/gallery.service";

@Injectable()
export class BreedsEffects {

  public getBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(BreedsActions.loadBreeds),
    mergeMap(() => this.galleryService.getBreeds()
      .pipe(
        map(response => BreedsActions.breedsLoaded({breedsResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ))

  constructor(
    private store: Store<CatGalleryState>,
    private actions$: Actions,
    private galleryService: GalleryService
    ){}
}
