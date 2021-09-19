import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = props => {

    return(
        <footer className={styles.footer}>
            <div className="container">
                <nav className={styles['footer-nav']} aria-label="navigation footer">
                    <ul className={styles['footer-nav-list']} role="menu">
                        <li className={styles['footer-nav-item']}>
                            <a href="" role="menuitem">
                                <FontAwesomeIcon icon={faCoffee}/>
                                Lien externe
                            </a>
                        </li>
                        <li className={styles['footer-nav-item']}>
                            <a href="" role="menuitem">
                                <FontAwesomeIcon icon={brands.faFacebook}/>
                                Lien externe
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.copyright}>
                    © 2021 Alexis Molineau
                </div>
            </div>
        </footer>
    );
}

export default Footer;