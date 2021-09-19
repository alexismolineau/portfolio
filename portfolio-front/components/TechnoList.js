import styles from "../styles/Card.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as brands from "@fortawesome/free-brands-svg-icons";


const TechnoList = props => {


    return(
        <ul className={styles['techno-list']}>
            <li className={styles['techno-list-item']}>
                <a href="#">
                    <FontAwesomeIcon icon={brands.faWordpress} />
                    WordPress</a>
            </li>
            <li className={styles['techno-list-item']}>
                <a href="#">
                    <FontAwesomeIcon icon={brands.faPhp} />
                    PHP
                </a>
            </li>
            <li className={styles['techno-list-item']}>
                <FontAwesomeIcon icon={brands.faHtml5} />
                <a href="#">
                    HTML</a>
            </li>
            <li className={styles['techno-list-item']}>
                <a href="#">
                    <FontAwesomeIcon icon={brands.faCss3Alt} />
                    CSS
                </a>
            </li>
            <li className={styles['techno-list-item']}>
                <a href="#">
                    <FontAwesomeIcon icon={brands.faJsSquare} />
                    Javascript
                </a>
            </li>
        </ul>
    )
}

export default TechnoList;