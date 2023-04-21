import type { SyntheticEvent } from 'react'

export enum EButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

interface IButtonProps {
  children: string
  disabled?: boolean
  onClick?: (event: SyntheticEvent) => void
  type?: EButtonType
}

Button.defaultProps = {
  disabled: false,
  onClick: null,
  type: EButtonType.button,
}

function Button(props: IButtonProps) {
  const { children, disabled, onClick, type } = props

  function handleClick(event: SyntheticEvent) {
    event.preventDefault()
    if (onClick)
      onClick(event)
  }

  return (
    <button
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:bg-gray-400"
      disabled={disabled}
      onClick={handleClick}
      type={type === EButtonType.reset ? 'reset' : type === EButtonType.submit ? 'submit' : 'button'}>
      {children}
    </button>
  )
}

export default Button
