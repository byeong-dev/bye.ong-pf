import useCommonStore from '../../store/common.store'

const Navigation = () => {
  const { selectedSection, setSelectedSection } = useCommonStore()
  return (
    <nav className="flex gap-4 p-4">
      {['home', 'projects', 'contact'].map((section) => (
        <button
          key={section}
          className={`px-4 py-2 rounded-lg ${
            selectedSection === section
              ? 'bg-blue-500 dark:text-white'
              : 'bg-gray-300 dark:text-black'
          }`}
          onClick={() =>
            setSelectedSection(section as 'home' | 'projects' | 'contact')
          }
        >
          {section.toUpperCase()}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
