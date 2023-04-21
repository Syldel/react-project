import type { ChangeEvent } from 'react'
import type { FieldError, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, UseFormRegister } from 'react-hook-form'

export enum EInputType {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  datetimeLocal = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week',
  datetime = 'datetime',
}

interface InputProps {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  label: string
  type: EInputType
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  register: UseFormRegister<FieldValues>
  registerOptions?: RegisterOptions<FieldValues, string>
}

Input.defaultProps = {
  error: null,
  onChange: null,
  placeholder: '',
  registerOptions: undefined,
}

function Input(props: InputProps) {
  const { error, label, onChange, type, name, placeholder, register, registerOptions } = props

  return (
    <fieldset>
      <label
        className="block text-sm font-semibold text-gray-800"
        htmlFor={name} >
        {label}
      </label>

      <input
        aria-invalid={error ? 'true' : 'false'}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        {...register(name, registerOptions)}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />

      {error?.message
        ? <p
            className="text-sm text-red-700"
            role="alert">
          {`${error?.message}`}
        </p>
        : null}
    </fieldset>
  )
}

export default Input
