import { Outlet } from "react-router-dom"
import store from './Store/Store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
