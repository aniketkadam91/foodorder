import { Link } from 'react-router-dom';
import '../css/Navigation.css'
const Navigation = () =>{
    return (
        <>
        <nav>
            <ul className='main-nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;