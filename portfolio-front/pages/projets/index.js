import Card from "../../components/Card";
import styles from '../../styles/Projets.module.css';
import Pagination from "../../components/Pagination";
import {useEffect, useState} from "react";
import ProjetsApi from "../../utils/api/ProjetsApi";

const Projets = props => {

    const [projets, setProjets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [displayedProjets, setDisplayedProjets] = useState([]);
    const [offset, setOffset] = useState(0);
    const [stepTransition, setStepTransition] = useState(0);
    const [sectionBackground, setSectionBackground] = useState(null);

    const title = 'titre';

    useEffect(() => {
        if(props.techno && props.techno.bg_img){
            setSectionBackground(
                {
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(' + process.env.NEXT_PUBLIC_API_URL.slice(0, -3) + 'uploads/' + props.techno.bg_img + ')',
                }
            )
        }
        if(props.projets){
            setProjets(props.projets);
            setLoaded(true);
            updateOffset(0);
        }else {
            if(!loaded){
                ProjetsApi.getAllProjets(props.http)
                    .then(response =>  {
                        setProjets((response.data));
                        setLoaded(true);
                        updateOffset(0);
                    });
            }
        }
    }, [projets, props.techno]);

    const updateOffset = offsetUpdated => {

        setOffset(offsetUpdated);
        paginateProjets(offsetUpdated);

    }

    const slideRight = () => {
            setStepTransition(1);
            setTimeout(() => setStepTransition(2), 150);
            setTimeout(() => setStepTransition(0), 300);
    }

    const slideLeft = () => {
        setStepTransition(2);
        setTimeout(() => setStepTransition(1), 150);
        setTimeout(() => setStepTransition(0), 300);
    }

    const paginateProjets = offsetUpdated => {
        const projetsToDisplay = projets.slice(offsetUpdated, offsetUpdated + 6);
        setTimeout(() => setDisplayedProjets(projetsToDisplay), 100)
    }



    return(
        <>
            {
                !props.techno &&
                <section className={styles.hero + ' ' + styles.projects}>
                    <div className="container">
                        <h1>Projets</h1>
                        <p>
                            Retrouvez ci-dessous certains de mes projets web développés dans un contexte personnel et/ou professionnel.

                        </p>
                    </div>
                </section>
            }
            {
                props.techno &&
                <section className={styles.technos} >
                    <div className="container">
                        {props.techno ? <h1>{props.techno.nom}</h1> : <h1>Mes projets</h1>}
                    </div>
                </section>
            }
            <section className="projets">
                {props.techno ? <h2>Projets {props.techno.nom}</h2> : <h2>Mes projets</h2>}
                <div className="container">
                    <div className={`${styles['projets-container']} ${stepTransition === 1 ? styles.transitionIn : ''}  ${stepTransition === 2 ? styles.transitionOut :'' }`}>
                        {
                            displayedProjets.map(
                                projet => {
                                    if(projet.display){
                                        return <Card key={projet.id} projet={projet} />
                                    }
                                }
                            )
                        }
                        {
                            projets.length === 0 &&
                            <div>Aucun projet à afficher</div>
                        }
                    </div>
                </div>
                <div className="container">
                    <Pagination offset={offset} updateOffset={updateOffset} nbProjets={projets.length} slideRight={slideRight} slideLeft={slideLeft} />
                </div>
            </section>



        </>
    )

}

Projets.title = 'Projets';
Projets.meta = 'Retrouvez quelques projets réalisés par mes soins.';

export default Projets