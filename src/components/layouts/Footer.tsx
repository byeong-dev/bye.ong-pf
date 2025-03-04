import classNames from 'classnames'
import useCommonStore from '../../store/common.store'

const Footer = () => {
  const { theme } = useCommonStore()
  return (
    <footer
      className={classNames('p-4', {
        'bg-gray-900 text-white text-center': theme === 'dark',
        'bg-white text-black': theme === 'light',
      })}
    >
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  )
}

export default Footer
