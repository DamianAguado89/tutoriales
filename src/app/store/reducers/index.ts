import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../../environments/environment';
  // import { RouterStateUrl } from '../../shared/utils';
  import * as fromRouter from '@ngrx/router-store';
  import { storeFreeze } from 'ngrx-store-freeze';
  export interface AppState {
  
  }
  
  export const reducers: ActionReducerMap<AppState> = {
  
  };
  
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];