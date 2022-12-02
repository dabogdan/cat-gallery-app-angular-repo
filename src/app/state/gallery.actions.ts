import { createAction, props } from '@ngrx/store';
import { CatImage } from './gallery.state';

export const loadImages = createAction(
  '[Gallery Component] loadImages',
  props<{limit: string, breed_ids?: string}>()
)

export const imagesLoaded = createAction(
  '[Gallery Component imagesLoaded',
  props<{imagesResponse: CatImage[]}>()
)

