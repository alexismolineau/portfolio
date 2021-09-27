import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from "@fortawesome/free-brands-svg-icons";
import {useEffect, useState} from "react";
import LienExtApi from "../utils/api/LienExtApi";


const Footer = props => {

    const [lienExts, setLienExts] = useState([]);


    useEffect(() => {
        if(lienExts.length === 0){
            LienExtApi.getAllLiensExt()
                .then(response =>  {
                    setLienExts((response.data.filter(
                        lien => lien.in_footer
                    )));
                });
        }
    }, []);

    return(
        <footer className={styles.footer}>
            <div className="container">
                <nav className={styles['footer-nav']} aria-label="navigation footer">
                    <ul className={styles['footer-nav-list']} role="menu">
                        {
                            lienExts.map(
                                lien => {
                                   return <li className={styles['footer-nav-item']} key={lien.id}>
                                        <a href={lien.url} role="menuitem" target={"_blank"}>
                                            <FontAwesomeIcon icon={brands[lien.fa_class]}/>
                                            {lien.texte}
                                        </a>
                                    </li>
                                }
                            )
                        }
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