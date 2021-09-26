import styles from "../styles/Card.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as brands from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import * as freeIcons from "@fortawesome/free-solid-svg-icons";


const TechnoList = props => {

    let fontAwesomeIcon = <></>;


    return(
        <ul className={styles['techno-list']}>
            {
                props.technos.map(
                    techno => {
                        const {id, nom, fa_class} = techno;
                        return <li className={styles['techno-list-item']} key={id}>
                            <Link href={'/technos/' + id}>
                                <a>
                                    {  brands[fa_class] ?  <FontAwesomeIcon icon={brands[fa_class]}/> : <FontAwesomeIcon icon={freeIcons[fa_class]}/>  }
                                    {nom}
                                </a>
                            </Link>

                        </li>
                    }
                )
            }
        </ul>
    )
}

export default TechnoList;