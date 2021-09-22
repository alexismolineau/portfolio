import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Pagination.module.css';
import {useState} from "react";

const Pagination = props => {

    const [current, setCurrent] = useState(0);

    const previous = () => {
        if(props.offset >= 6){
            props.updateOffset(props.offset - 6)
            props.slideLeft()
        }
    }

    const next = () => {
        if(props.offset + 6 < props.nbProjets){
            props.updateOffset(props.offset + 6)
            props.slideRight()
        }
    }

    const pagination = () => {
        let pageNb = [];
        for(let i = 0; i < (Math.ceil(props.nbProjets / 6)); i++)
        {
            pageNb.push(
            <li className={`${styles['projets-pagination-item']} ${props.offset === 6*i ? styles.active : ''}`} key={i}>
                <button onClick={() => {
                    props.updateOffset(6 * i);
                    current > i ? props.slideLeft() : props.slideRight();
                    setCurrent(i);
                    }
                }>
                    {i + 1}
                </button>
            </li>
            )

        }
        return pageNb
    }

    return(
        <ul className={styles['projets-pagination']}>
            {
             <li className={styles['projets-pagination-item']}>
                    <button onClick={() => previous()}  disabled={ props.offset < 6}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </li>
            }
            {pagination()}
            {
                <li className={styles['projets-pagination-item']}>
                    <button onClick={() => next()}  disabled={ props.offset + 6 > props.nbProjets}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </li>
            }
        </ul>
    )
}

export default Pagination;