import {Link} from 'react-router-dom'
import {List} from 'react-gluons'

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];



function Header() {
    return (
        <>
            <header className="bg-gray-800 text-white">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="text-2xl font-bold">Prototype</div>
                    <nav>
                        <ul className="flex space-x-4">
                            <List from={navLinks}>
                                {(link) => (
                                    <li>
                                        <Link to={link.href} className="hover:text-gray-400">
                                            {link.name}
                                        </Link>
                                    </li>
                                )}
                            </List>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header