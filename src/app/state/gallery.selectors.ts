import { createSelector } from "@ngrx/store";
import { BreedsData, CatGalleryState, ImagesData } from "./gallery.state";

export const selectBreedsData = createSelector(
  (state: CatGalleryState) => {
    return state.breedsData
  },
  (breedsData: BreedsData) => breedsData
)

export const selectImagesData = createSelector(
  (state: CatGalleryState) => {
    return state.imagesData
  },
  (imagesData: ImagesData) => imagesData
)
