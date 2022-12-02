import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, mergeMap, map } from "rxjs";
import { EMPTY } from 'rxjs';
import * as GalleryActions from "./gallery.actions";
import { GalleryService } from "../services/gallery.service";
import { Store } from "@ngrx/store";
import { CatGalleryState } from "./gallery.state";


@Injectable()
export class GalleryEffects {
  public getImages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GalleryActions.loadImages),
      mergeMap((action) => this.gallerySrv.getImages(action.limit.toString(), action.breed_ids?.toString())
        .pipe(
          map(response => GalleryActions.imagesLoaded({imagesResponse: response})),
          catchError(() => EMPTY)
        )
      )
    )
  });

  constructor(
    private actions$: Actions,
    private gallerySrv: GalleryService,
    private store: Store<CatGalleryState>
    ){}
}
