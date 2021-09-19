import styles from "../styles/Card.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as brands from "@fortawesome/free-brands-svg-icons";


const TechnoList = props => {



    return(
        <ul className={styles['techno-list']}>
            {
                props.technos.map(
                    techno => {
                        const {id, nom, fa_class} = techno;
                        return <li className={styles['techno-list-item']} key={id}>
                            <a href="#">
                                <FontAwesomeIcon icon={brands[fa_class]} />
                                {nom}</a>
                        </li>
                    }
                )
            }
        </ul>
    )
}

export default TechnoList;