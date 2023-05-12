import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Button, { EButtonType } from '~/components/button'
import Input, { EInputType } from '~/components/input'

interface ISignupFormProps {
  onSubmit: (data: any) => void
}

function SignupForm(props: ISignupFormProps) {
  const { onSubmit } = props
  const { register, formState: { errors }, handleSubmit, getValues } = useForm({
    shouldUseNativeValidation: false,
    mode: 'all',
  })
  const onFormSubmit = (data: any) => {
    onSubmit(data)
  }
  const formRef = useRef<HTMLFormElement>(null)
  const onButtonSubmit = () => {
    if (formRef?.current)
      formRef.current.requestSubmit()
  }

  return (
    <form
      className="mt-6"
      noValidate
      onSubmit={handleSubmit(onFormSubmit)}
      ref={formRef}>
      <p className="mb-4">
        Saisissez votre nom de compte, votre adresse email et votre mot de passe
      </p>

      <div className="mb-2">
        <Input
          error={errors.text}
          label="Nom de compte"
          name="username"
          placeholder='Votre nom de compte'
          register={register}
          registerOptions={{
            required: 'Le nom de compte est obligatoire',
          }}
          type={EInputType.text}
        />
      </div>

      <div className="mb-2">
        <Input
          error={errors.email}
          label="Email"
          name="email"
          placeholder='Votre email'
          register={register}
          registerOptions={{
            required: 'L\'email est obligatoire',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
              message: 'Adresse email non valide',
            },
          }}
          type={EInputType.email}
        />
      </div>

      <div className="mb-2">
        <Input
          error={errors.password}
          label="Mot de passe"
          name="password"
          placeholder='Votre mot de passe'
          register={register}
          registerOptions={{
            required: 'Le mot de passe est obligatoire',
            minLength: {
              value: 6,
              message: 'Le mot de passe doit comporter au moins 6 caractères',
            },
          }}
          type={EInputType.password}
        />
      </div>

      <div className="mb-2">
        <Input
          error={errors.password_repeat}
          label="Retaper votre mot de passe"
          name="password_repeat"
          placeholder='Votre mot de passe'
          register={register}
          registerOptions={{
            // required: 'Le mot de passe est obligatoire',
            // minLength: {
            //   value: 6,
            //   message: 'Le mot de passe doit comporter au moins 6 caractères',
            // },
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues()
                return password === value || 'Les mots de passe doivent être identiques'
              },
            },
          }}
          type={EInputType.password}
        />
      </div>

      <div className="mt-6">
        <Button
          // disabled={!isValid}
          onClick={onButtonSubmit}
          type={EButtonType.submit}>
          Créer mon compte
        </Button>
      </div>
    </form >
  )
}

export default SignupForm
