import Navbar from './components/navbar'
import reactLogo from './images/react-logo.svg'
import { RouterElement } from './routes'

function App() {
  return (<div className="bg-slate-100">
    <div className="text-[#58c4dc]">
      <img
        alt="react logo"
        className="w-24 h-24 fill-current"
        src={reactLogo}
      />
    </div>

    <Navbar />

    <RouterElement />
  </div>
  )
}

export default App
