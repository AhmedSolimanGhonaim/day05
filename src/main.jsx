import { createRoot } from 'react-dom/client'
import MainLayout from './Layout/MainLayout.jsx'

import "bootstrap/dist/css/bootstrap.min.css"
import { myStore } from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

    <Provider store={myStore}>
    <MainLayout />
    </Provider>
)