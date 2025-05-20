import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './Store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from 'react-router-dom'
import router from './Route.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
