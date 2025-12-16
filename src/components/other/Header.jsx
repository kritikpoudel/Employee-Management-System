const Header = () => {
  return (
    <div className="flex justify-between items-end">
        <h1 className="text-2xl font-medium">Hello,<br/> <span className="text-3xl font-bold">Kritik 👋</span></h1>
        <button className="bg-red-500 text-white px-3 py-2 rounded-sm text-lg font-medium">Log Out</button>
    </div>
  )
}

export default Header