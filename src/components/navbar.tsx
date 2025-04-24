import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link
          className="text-blue-500 hover:underline"
          to="/">
          Dashboard
        </Link>

        <span className="mx-2">
          -
        </span>

        <Link
          className="text-blue-500 hover:underline"
          to="login">
          Connexion
        </Link>

        <span className="mx-2">
          -
        </span>

        <Link
          className="text-blue-500 hover:underline"
          to="register">
          Mon compte
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
