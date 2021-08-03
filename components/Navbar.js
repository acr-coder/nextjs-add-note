import Link from 'next/link';
import { Menu } from 'semantic-ui-react';


const Navbar = () => {
    return(
        
        <nav className="navbar" >
            <Link href="/" >
                <a className="navbar-brand">TASKS </a>
            </Link>
            <Link href="/new" >
                <a className="create">NEW TASK</a>
            </Link>
        </nav>
    )
}

export default Navbar;