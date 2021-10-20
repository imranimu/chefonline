import Link from 'next/Link';

const Nav = () => (
    <nav className="Navbar">
        
        <Link href="/">
            <a className="Home">Home</a>
        </Link>

        <Link href="/about">
            <a className="About">About</a>
        </Link>

        <style jsx>{`
            a{
                text-decoration: none;
                color: #555;
                font-size: 18px;
                border: 1px solid gray;
                padding: 8px 20px;
                display: inline-block;
                margin-right: 14px;
                border-radius: 5px;
            }
        `}</style>
    </nav>
)

export default Nav;