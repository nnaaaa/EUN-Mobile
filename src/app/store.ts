import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { getDefaultWatermarks } from 'istanbul-lib-report'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const rootReducer = combineReducers({

})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)