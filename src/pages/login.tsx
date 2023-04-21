import { useNavigate } from 'react-router-dom'
import Button from '~/components/button'
import LoginForm from '~/forms/login-form'

function Login() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    // TODO: REST post /login
  }

  const onSignUpButtonClick = () => {
    navigate('/register')
  }

  return (<main>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-gray-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase">
          Bienvenue !
        </h1>

        <LoginForm onSubmit={handleSubmit} />

        <div className="flex items-center gap-2 before:bg-gray-400 before:h-px before:mx-auto before:my-4 before:w-1/2 after:bg-gray-400 after:h-px after:mx-auto after:my-4 after:w-1/2 my-4">
          Ou
        </div>

        <div className="mt-6">
          <Button onClick={onSignUpButtonClick}>
            Créer mon compte
          </Button>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Login
