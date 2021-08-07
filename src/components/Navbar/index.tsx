import './index.scss'
import img from '../../assets/images/logos/BedrockLauncher_128x128.png'
import { ReactComponent as FlaskIcon } from '../../assets/images/icons/flask.svg'
import { ReactComponent as DownloadIcon } from '../../assets/images/icons/download.svg'
import { ReactComponent as QuestionIcon } from '../../assets/images/icons/question.svg'
import { ReactComponent as HomeIcon } from '../../assets/images/icons/home.svg'
import { Link } from 'react-router-dom'
import NavbarLink from './components/NavbarLink'

const index = () => {
  return (
    <header className='navbar'>
      <div className='container'>
        <Link to='/' className='nav-logo'>
          <img src={img} alt="" />
          Bedrock Launcher
        </Link>
        <nav className='header-nav'>
          <ul>
            <NavbarLink goTo='/' icon={<HomeIcon />}>Home</NavbarLink>
            <NavbarLink goTo='/releases' icon={<FlaskIcon />}>Releases</NavbarLink>
            <NavbarLink goTo='https://github.com/BedrockLauncher/BedrockLauncher.Installer/releases/latest/download/BedrockLauncher.Installer.exe' icon={<DownloadIcon />}>Download</NavbarLink>
            <NavbarLink goTo='/faq' icon={<QuestionIcon />}>FAQ</NavbarLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default index
