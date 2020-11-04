import './Navbar.scss';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="menu">
                <li className="menuitem"><Link smooth={true} to='/#'>Home</Link></li>
                <li className="menuitem"><Link smooth={true} to='/#portfolio'>Portfolio</Link></li>
                <li className="menuitem"><Link smooth={true} to='/#about'>About me</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)