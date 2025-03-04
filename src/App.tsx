import classNames from 'classnames'
import './App.css'
import useCommonStore from './store/common.store'
import Header from './components/layouts/Header'
import Navigation from './components/layouts/Navigation'
import Main from './components/layouts/Main'
import Footer from './components/layouts/Footer'

function App() {
  const { theme } = useCommonStore()

  return (
    <div
      className={classNames('flex flex-col min-h-screen', {
        'bg-gray-900 text-white': theme === 'dark',
        'bg-white text-black': theme === 'light',
      })}
    >
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  )
}

export default App
