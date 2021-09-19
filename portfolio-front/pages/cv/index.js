import TechnoList from "../../components/TechnoList";
import CvList from "../../components/CvList";
import styles from "../../styles/Cv.module.css";

const Cv = props => {

    return(
        <>
            <section className={styles['cv-title']}>
                <div className="container">
                    <h1>CV</h1>
                </div>
            </section>
            <section className={styles['cv-content']}>
                <div className="container">
                    <div className={styles.competences}>
                        <h2>Compétences</h2>
                        <div className={styles.front}>
                            <h3>Front</h3>
                            <TechnoList />
                        </div>
                        <div className={styles.back}>
                            <h3>Back</h3>
                            <TechnoList />
                        </div>
                    </div>
                    <div className={styles['cv-container']}>
                        <div className={styles.experiences}>
                            <h2>Expériences</h2>
                            <CvList />
                        </div>
                        <div className={styles.formations}>
                            <h2>Formations</h2>
                            <CvList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cv;