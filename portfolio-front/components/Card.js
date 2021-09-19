import Image from "next/image";
import styles from '../styles/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import banner from '../public/img/bann.jpg';
import TechnoList from "./TechnoList";

const Card = props => {

    return(
        <div className={styles.card}>
            <div className={styles['card-top']}>
                <div className={styles['card-title-container']}>
                    <Image src={banner} alt="marketflex"
                           layout="responsive"
                           objectFit="cover"
                           objectPosition={"center"}
                           quality={100}
                           className={styles.cardImg}
                    />
                        <h3 className={styles['card-title']}>Titre du projet</h3>
                </div>
                <p className={styles['card-description']}>
                    Donec condimentum sagittis nunc id pharetra. Phasellus nec libero eros. Proin erat nulla,
                    interdum a eleifend dignissim, pretium congue velit. Donec id suscipit purus. Proin
                    fringilla et mi sed tempor.
                </p>
            </div>
            <TechnoList />
            <a className={styles.button + ' button'} href="#">
                <span>
                    Visiter
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
            </a>
        </div>
    );
}

export default Card;