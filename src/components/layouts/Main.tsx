import useCommonStore from '../../store/common.store'

const Main = () => {
  const { selectedSection } = useCommonStore()

  return (
    <main className="grow p-6 text-center min-h-full">
      {selectedSection === 'home' && (
        <h2 className="text-xl">🏠 Welcome to my portfolio!</h2>
      )}
      {selectedSection === 'projects' && (
        <h2 className="text-xl">📂 My Projects</h2>
      )}
      {selectedSection === 'contact' && (
        <h2 className="text-xl">📩 Contact Me</h2>
      )}
    </main>
  )
}

export default Main
