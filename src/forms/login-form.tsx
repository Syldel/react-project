import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Button, { EButtonType } from '~/components/button'
import Input, { EInputType } from '~/components/input'

interface ILoginFormProps {
  onSubmit: (data: any) => void
}

function LoginForm(props: ILoginFormProps) {
  const { onSubmit } = props
  const { register, formState: { errors }, handleSubmit } = useForm({
    shouldUseNativeValidation: false,
    mode: 'all', // 'onBlur',
    // defaultValues: {
    //   email: 'email__test',
    //   password: 'test__test',
    // } as FieldValues,
  })
  const onFormSubmit = (data: any) => {
    onSubmit(data)
  }
  const formRef = useRef<HTMLFormElement>(null)
  const onButtonSubmit = () => {
    if (formRef?.current)
      formRef.current.requestSubmit()
  }
  // const onChange = (name: string) => {
  //   if (errors[name])
  //     clearErrors(name)
  // }

  return (
    <form
      className="mt-6"
      noValidate
      onSubmit={handleSubmit(onFormSubmit)}
      ref={formRef}>
      <p className="mb-4">
        Saisissez votre email et votre mot de passe
      </p>

      <div className="mb-2">
        <Input
          error={errors.email}
          label="Email"
          name="email"
          // onChange={() => onChange('email')}
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
          // onChange={() => onChange('password')}
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

      <div className="mt-6">
        <Button
          // disabled={!isValid}
          onClick={onButtonSubmit}
          type={EButtonType.submit}>
          Me connecter
        </Button>
      </div>
    </form >
  )
}

export default LoginForm
