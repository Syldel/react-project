import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          Trophées
        </Link>

        <Link to="login">
          Connexion
        </Link>

        <Link to="register">
          Mon compte
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
