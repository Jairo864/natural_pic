import { NavLink } from 'react-router-dom'

const BarraNav = () => {

  const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inActive')

  return (
    <div>
        <nav className='Bnav'>
          <NavLink
            className={setActiveClass}
            to = '/'>
              Home
          </NavLink>

          |

          <NavLink
            className={setActiveClass}
            to = '/Favoritos'>
              Favoritos
          </NavLink>
        </nav>
    </div>
  )
}

export default BarraNav