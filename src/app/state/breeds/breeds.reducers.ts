import { createReducer, on } from "@ngrx/store";
import { BreedsData } from "../gallery.state";
import * as BreedsActions from './breeds.actions';

const initialState: BreedsData = {
  pending: false,
  error: '',
  breeds: []
}

export const breedsReducers = createReducer (
  initialState,
  on(BreedsActions.loadBreeds, (state: BreedsData) => {
    return {
      ...state,
      pending: true,
      breeds: []
    }
  }),
  on(BreedsActions.breedsLoaded, (state: BreedsData, {breedsResponse}) => {
    return {
      ...state,
      pending: false,
      breeds: breedsResponse
    }
  })
)
