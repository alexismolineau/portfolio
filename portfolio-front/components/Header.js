import Link from 'next/link'
import styles from '../styles/Header.module.css'
import {useRouter} from "next/router";
import {useState} from "react";

const Header = props => {

    const router = useRouter();

    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container + ' container'}>
                <div className={styles['site-title']}>
                    Alexis Molineau
                </div>
                <nav className={styles['main-nav']} aria-label="navigation principale">
                    <ul className={`${styles['nav-list']} ${displayMenu && styles.active}`} aria-expanded={displayMenu} role="menu">
                        <li className={`${styles['nav-list-item']} + ${router.route === '/' && styles.active}`}>
                            <Link href="/">
                                <a role="menuitem">Accueil</a>
                            </Link>
                        </li>
                        <li className={`${styles['nav-list-item']} + ${router.route === '/projets' && styles.active}`}>
                            <Link href="/projets">
                                <a role="menuitem">Projets</a>
                            </Link>
                        </li>
                        <li className={`${styles['nav-list-item']} + ${router.route === '/cv' && styles.active}`}>
                            <Link href="/cv">
                                <a role="menuitem">CV</a>
                            </Link>
                        </li>
                        <li className={`${styles['nav-list-item']} + ${router.route === '/contact' && styles.active}`}>
                            <Link href="/contact">
                                <a role="menuitem">Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={`${styles['hamburger']} ${displayMenu && styles.active}`} onClick={() => setDisplayMenu(!displayMenu)}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;