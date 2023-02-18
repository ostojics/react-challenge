import { useState } from 'react'

interface IHeaderProps {
  handleSubmit: (value: number) => void
}

const Header = ({ handleSubmit }: IHeaderProps) => {
  const [value, setValue] = useState(0)

  return (
    <header className="mt-[40px] flex items-center justify-center">
      <input
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        type="number"
        placeholder="Items amount"
        className="input-bordered input mr-2 w-full max-w-xs"
      />
      <button
        className="btn-primary btn-sm btn"
        onClick={() => handleSubmit(value)}
      >
        Checkout
      </button>
    </header>
  )
}

export default Header
