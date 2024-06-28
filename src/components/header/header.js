import './style.css'
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'

function Header() {
    return(
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
        </header>
    )
}

export default Header