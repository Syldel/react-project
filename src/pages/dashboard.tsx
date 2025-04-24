import { Link } from 'react-router-dom'

function Dashboard() {
  return (<main>
    <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase">
      Dashboard
    </h1>

    <br />

    <div className="flex flex-col gap-4">
      <Link
        className="text-blue-500 hover:underline"
        to="/login">
        Se connecter
      </Link>

      <Link
        className="text-blue-500 hover:underline"
        to="/register">
        S’inscrire
      </Link>
    </div>
  </main>
  )
}

export default Dashboard
