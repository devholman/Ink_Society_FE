import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/root.reducer';

// create a makeStore function
export const makeStore: MakeStore = () => createStore(rootReducer, composeWithDevTools());

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore);
