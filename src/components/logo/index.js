import './style.css'
import logo from '../../img/logo-school.svg'
import { Link } from 'react-router-dom'

function Logo() {
    return(
        <div className="logo">
            <Link to="/" className='logo-link'>
                <img 
                    src={logo}
                    alt='emblema da escola'
                    className='logo-img' />
                <p><strong>Rock</strong>School</p>
            </Link>

        </div>
    )
}

export default Logo