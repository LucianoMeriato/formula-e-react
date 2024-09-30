import { Link } from 'react-router-dom';
import { NavStyle } from '../css/NavStyle';


const Nav = () => {
    return (
        <NavStyle>
            <header>
                <div className="nav container">
                   
                    <Link to="/" className="logo"><i className='bx bx-home'></i>Formula E</Link>

                  
                    <input type="checkbox" id="menu" />
                    <label htmlFor="menu">
                        <i className='bx bx-menu' id="menu-icon"></i>
                    </label>

                   
                    <ul className="navbar">
                        <li><Link to="/#home">Home</Link></li>
                        <li><Link to="/#sobre">Sobre</Link></li>
                        <li><Link to="/#acoes">Solução</Link></li>
                        <li><Link to="/#pontos">Pontos</Link></li>
                    </ul>

                   
                    <Link to="/login" className="btn">Log In</Link>
                </div>
            </header>
        </NavStyle>
    );
};

export default Nav;