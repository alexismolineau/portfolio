import * as brands from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../styles/CvList.module.css';
import Image from "next/image";

const CvList = props => {


    return(
        <ul className={styles['cv-list']}>
            {
                props.items.map(
                    item => {
                        const {id, poste, nom, date_debut, date_fin, entreprise,  lieu, entreprise_img_path,formation_img_path, description, displayed} = item;
                        return displayed && <li className={styles['cv-list-item']} key={id}>
                            <h3>{ poste ? poste : nom }</h3>
                            <div className={styles['cv-list-content']}>
                                <div className={styles['cv-top']}>
                                    <p className={styles['cv-date']}>
                                        {new Date(date_debut).toLocaleDateString("fr-FR", {year: 'numeric', month: 'long', day: 'numeric'})}
                                        {date_fin  && ' - ' + new Date(date_fin).toLocaleDateString("fr-FR", {year: 'numeric', month: 'long', day: 'numeric'})}
                                   </p>
                                    <div className={styles['cv-entreprise']}>
                                        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${entreprise_img_path ? entreprise_img_path : formation_img_path}`}
                                               alt="marketflex"
                                               layout="fixed"
                                               objectFit="contain"
                                               objectPosition={"center"}
                                               quality={100}
                                               width={50}
                                               height={30}
                                        />
                                        { entreprise ? entreprise : lieu }
                                    </div>
                                </div>
                                <p className={styles['cv-description']}> {description} </p>
                            </div>
                        </li>
                    }
                )
            }
        </ul>
    );
}

export default CvList;