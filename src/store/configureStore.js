/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * ## Reducer
 * The reducer contains the 4 reducers from
 * device, global, auth, profile
 */
import rootReducer from '../reducers';

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 *
 */
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
