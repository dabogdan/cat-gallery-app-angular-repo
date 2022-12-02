import { createAction, props } from '@ngrx/store';
import { Breed } from '../gallery.state'

export const loadBreeds = createAction(
  '[Breeds Component] loadBreeds'
)

export const breedsLoaded = createAction(
  '[Breeds Component] breedsLoaded',
  props<{breedsResponse: Breed[]}>()
)
