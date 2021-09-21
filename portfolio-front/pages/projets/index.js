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

    useEffect(() => {
        if(!loaded){
            ProjetsApi.getAllProjets()
                .then(response =>  {
                    setProjets((response.data));
                    setLoaded(true);
                    updateOffset(0);
                });
        }
    }, [projets]);

    const updateOffset = offsetUpdated => {
        setOffset(offsetUpdated);
        paginateProjets(offsetUpdated);
    }

    const paginateProjets = offsetUpdated => {
        const projetsToDisplay = projets.slice(offsetUpdated, offsetUpdated + 6);
        setDisplayedProjets(projetsToDisplay);
    }



    return(
        <>
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
            <section className="projets">
                <h2>Mes projets</h2>
                <div className="container">
                    <div className={styles['projets-container']}>
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
                    <Pagination offset={offset} updateOffset={updateOffset} nbProjets={projets.length} />
                </div>
            </section>



        </>
    )

}

export default Projets