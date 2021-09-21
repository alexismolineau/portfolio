import TechnoList from "../../components/TechnoList";
import CvList from "../../components/CvList";
import styles from "../../styles/Cv.module.css";
import {useEffect, useState} from "react";
import TechnosApi from "../../utils/api/TechnosApi";
import ExperiencesApi from "../../utils/api/ExperiencesApi";
import FormationsApi from "../../utils/api/FormationsApi";

const Cv = props => {

    const [technos, setTechnos] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [formations, setFormations] = useState([]);
    const [technosFront, setTechnosFront] = useState([]);
    const [technosBack, setTechnosBack] = useState([]);

    useEffect(() => {
        if(technos.length === 0){
            TechnosApi.getAllTechnos()
                .then(response =>  {
                    setTechnos(response.data);
                    setTechnosFront(response.data.filter(
                        techno => techno.isFront
                    ));
                    setTechnosBack(response.data.filter(
                        techno => techno.isBack
                    ));
                });
        }

        if(experiences.length === 0){
            ExperiencesApi.getAllExperiences()
                .then(response =>  {
                    setExperiences((response.data.filter(
                        experience => experience.displayed
                    )));
                });
        }

        if(formations.length === 0){
            FormationsApi.getAllFormations()
                .then(response =>  {
                    setFormations((response.data.filter(
                        formation => formation.displayed
                    )));
                });
        }
    }, []);



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
                            <TechnoList technos={technosFront}/>
                        </div>
                        <div className={styles.back}>
                            <h3>Back</h3>
                            <TechnoList technos={technosBack}/>
                        </div>
                    </div>
                    <div className={styles['cv-container']}>
                        <div className={styles.experiences}>
                            <h2>Expériences</h2>
                            <CvList items={experiences}/>
                        </div>
                        <div className={styles.formations}>
                            <h2>Formations</h2>
                            <CvList items={formations}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cv;