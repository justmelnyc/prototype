import {List} from 'react-gluons'

interface FooterLink {
    name: string;
    href: string;
}

const footerLinks: FooterLink[] = [
    {name: 'Privacy Policy', href: '/privacy-policy'},
    {name: 'Terms of Service', href: '/terms-of-service'},
    {name: 'Contact', href: '/contact'},
]


function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <div className="mb-4">
                        <ul className="flex justify-center space-x-4">
                            <List from={footerLinks}>
                                {(link) => (
                                    <li>
                                        <a href={link.href} className="hover:text-gray-400">
                                            {link.name}
                                        </a>
                                    </li>
                                )}
                            </List>
                        </ul>
                    </div>
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer