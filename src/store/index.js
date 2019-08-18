import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from '../reducers'
import rootSaga from '../sagas'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const getMiddleware = () => {
  return applyMiddleware(routerMiddleware(history), sagaMiddleware)
}
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(getMiddleware())
)

sagaMiddleware.run(rootSaga)

export { store, history }
