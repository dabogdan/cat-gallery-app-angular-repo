import { createReducer, on } from "@ngrx/store";
import * as GalleryActions from './gallery.actions'
import { CatImage, ImagesData } from "./gallery.state";

const initialState: ImagesData = {
  pending: false,
  error: '',
  images: []
}

export const galleryReducers = createReducer(
  initialState,
  on(GalleryActions.loadImages, (state, {limit}) => {
    return {
      ...state,
      pending: true,
      images: []
    }
  }),
  on(GalleryActions.imagesLoaded, (state, {imagesResponse}) => {
    return {
      ...state,
      pending: false,
      images: imagesResponse
    }
  })
)
