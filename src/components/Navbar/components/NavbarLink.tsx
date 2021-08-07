import { FC } from "react"
import { Link } from "react-router-dom"

const NavbarLink: FC<{ icon: any, goTo: string }> = ({ goTo, icon, children }) => {
  return (
    <li className='navbar-link'>
      {
        goTo.startsWith('http') ? (
          <a href={goTo} className='navbar-link-cont' aria-label=''>
            {icon}
            <span>{children}</span>
          </a>
        ) : (
          <Link to={goTo} className='navbar-link-cont' aria-label=''>
            {icon}
            <span>{children}</span>
          </Link>
        )
      }
    </li>
  )
} 

export default NavbarLink