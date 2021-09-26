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
                ProjetsApi.getAllProjets()
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
                        <h1>Contenu random</h1>
                        <p>Donec condimentum sagittis nunc id pharetra. Phasellus nec libero eros. Proin erat nulla,
                            interdum a
                            eleifend dignissim, pretium congue velit. Donec id suscipit purus. Proin fringilla et mi sed
                            tempor.
                            Cras placerat dolor lorem, nec molestie ligula feugiat in. Fusce aliquam, arcu ac elementum
                            tincidunt,
                            lectus mi interdum risus, non.

                        </p>
                    </div>
                </section>
            }
            {
                props.techno &&
                <section className={styles.projects} style={sectionBackground}>
                    <div className="container">
                        {props.techno ? <h1>{props.techno.nom}</h1> : <h1>Contenu random</h1>}
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
                    </div>
                </div>
                <div className="container">
                    <Pagination offset={offset} updateOffset={updateOffset} nbProjets={projets.length} slideRight={slideRight} slideLeft={slideLeft} />
                </div>
            </section>



        </>
    )

}

export default Projets