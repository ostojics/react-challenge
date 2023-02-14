const Header = () => {
  return (
    <header className="mt-[40px] flex items-center justify-center">
      <input
        type="number"
        placeholder="Items amount"
        className="input-bordered input mr-2 w-full max-w-xs"
      />
      <button className="btn-primary btn-sm btn">Checkout</button>
    </header>
  )
}

export default Header
