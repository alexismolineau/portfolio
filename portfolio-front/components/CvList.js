import * as brands from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../styles/CvList.module.css';

const CvList = props => {

    return(
        <ul className={styles['cv-list']}>
            <li className={styles['cv-list-item']}>
                <h3>Responsable Webmarketing</h3>
                <div className={styles['cv-list-content']}>
                    <div className={styles['cv-top']}>
                        <p className={styles['cv-date']}>Septembre 2017 à janvier 2020</p>
                        <p className={styles['cv-entreprise']}><FontAwesomeIcon icon={brands.faJsSquare} />Comme des Papas</p>
                    </div>
                    <p className={styles['cv-description']}>Acquisition et fidélisation de la clientèle.
                        Webmastering du site e-commerce.</p>
                </div>
            </li>
            <li className={styles['cv-list-item']}>
                <h3>Responsable Webmarketing</h3>
                <div className={styles['cv-list-content']}>
                    <div className={styles['cv-top']}>
                        <p className={styles['cv-date']}>Septembre 2017 à janvier 2020</p>
                        <p className={styles['cv-entreprise']}><FontAwesomeIcon icon={brands.faJsSquare} />Comme des Papas</p>
                    </div>
                    <p className={styles['cv-description']}>Acquisition et fidélisation de la clientèle.
                        Webmastering du site e-commerce.</p>
                </div>
            </li>
            <li className={styles['cv-list-item']}>
                <h3>Responsable Webmarketing</h3>
                <div className={styles['cv-list-content']}>
                    <div className={styles['cv-top']}>
                        <p className={styles['cv-date']}>Septembre 2017 à janvier 2020</p>
                        <p className={styles['cv-entreprise']}><FontAwesomeIcon icon={brands.faJsSquare} />Comme des Papas</p>
                    </div>
                    <p className={styles['cv-description']}>Acquisition et fidélisation de la clientèle.
                        Webmastering du site e-commerce.</p>
                </div>
            </li>
            <li className={styles['cv-list-item']}>
                <h3>Responsable Webmarketing</h3>
                <div className={styles['cv-list-content']}>
                    <div className={styles['cv-top']}>
                        <p className={styles['cv-date']}>Septembre 2017 à janvier 2020</p>
                        <p className={styles['cv-entreprise']}><FontAwesomeIcon icon={brands.faJsSquare} />Comme des Papas</p>
                    </div>
                    <p className={styles['cv-description']}>Acquisition et fidélisation de la clientèle.
                        Webmastering du site e-commerce.</p>
                </div>
            </li>
        </ul>
    );
}

export default CvList;