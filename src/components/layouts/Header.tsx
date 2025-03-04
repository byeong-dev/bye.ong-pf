import useCommonStore from '../../store/common.store'

const Header = () => {
  const { toggleTheme, theme } = useCommonStore()
  return (
    <header className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">🚀 My Portfolio</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  )
}

export default Header
