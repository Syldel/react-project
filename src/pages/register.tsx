import SignupForm from '~/forms/signup-form'

function Register() {
  const handleSubmit = () => {
    // TODO: REST post /register
  }

  return (<main>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-gray-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase">
          Création de compte
        </h1>

        <SignupForm onSubmit={handleSubmit} />
      </div>
    </div>
  </main>
  )
}

export default Register
