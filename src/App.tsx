import Navbar from './components/navbar'
import logoBlack from './images/logo-black.svg'
import { RouterElement } from './routes'

function App() {
  return (<div className="bg-slate-100">
    <img
      alt="logo"
      src={logoBlack}
    />

    <Navbar />

    <RouterElement />
  </div>
  )
}

export default App
