import shopActionTypes from './shop.types';

export const updateCollections = payload => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload,
});
