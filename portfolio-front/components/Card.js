import Image from "next/image";
import styles from '../styles/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import TechnoList from "./TechnoList";
import * as brands from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";


const Card = props => {

    const [hover, setHover] = useState(false);

    const {id, titre, description, img_path, display, technos, lien_exts} = props.projet;



    return(
        <>
        {
        display &&
        <div className={styles.card} >
            <div className={styles['card-top']}>
                <div className={styles['card-title-container']}>
                    <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH +  img_path} alt="marketflex"
                           layout="responsive"
                           objectFit="cover"
                           objectPosition={"center"}
                           quality={100}
                           className={`${styles.cardImg} ${hover ? styles.hover : ''}`}
                           width={100}
                           height={50}
                    />
                    <div className={styles.cardTitleGit}>
                        <h3 className={styles['card-title']}>{titre}</h3>
                        {lien_exts.length > 0 &&
                        lien_exts.map(
                            lien => {
                                if(lien.git){
                                    return  <Link href={lien.url} key={id}>
                                        <a target={"_blank"}  rel={"noreferrer"}>
                                            <FontAwesomeIcon icon={brands.faGithub} />
                                        </a>
                                    </Link>
                                }
                            }

                        )
                        }
                    </div>
                </div>
                <p className={styles['card-description']}>
                    {description}
                </p>
            </div>
            <TechnoList technos={technos}/>
            {lien_exts.length > 0 &&
                lien_exts.map(
                    lien => {
                        if(!lien.git){
                            return <Link href={lien.url} key={lien.id}>
                                <a className={styles.button + ' button'} target={"_blank"} rel={"noreferrer"} onMouseOver={() => setHover(!hover)} onMouseOut={() => setHover(!hover)}>
                                    <span>
                                        Visiter
                                        <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                                    </span>
                                </a>
                            </Link>
                        }
                    }

                )
            }
        </div>
        }
        </>
    );
}

export default Card;