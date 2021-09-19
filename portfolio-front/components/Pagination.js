import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Pagination.module.css';

const Pagination = props => {


    return(
        <ul className={styles['projets-pagination']}>
            <li className={styles['projets-pagination-item']}>
                <a href="">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </a>
            </li>
            <li className={styles['projets-pagination-item']}><a href="">1</a></li>
            <li className={styles['projets-pagination-item']}><a href="">2</a></li>
            <li className={styles['projets-pagination-item']}><a href="">3</a></li>
            <li className={styles['projets-pagination-item']}>
                <a href="">
                    <FontAwesomeIcon icon={faChevronRight} />
                </a>
            </li>
        </ul>
    )
}

export default Pagination;