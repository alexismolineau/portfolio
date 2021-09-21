import styles from '../styles/Home.module.css';
import Card from "../components/Card";
import Link from "next/link";
import ProjetsApi from "../utils/api/ProjetsApi";
import {useEffect, useState} from "react";

export default function Home() {

    const [projets, setProjets] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        if(!loaded){
            ProjetsApi.getAllProjets()
                .then(response =>  {
                    setProjets((response.data));
                    setLoaded(true);
                });
        }
    }, []);




  return (
    <>
        <section className={styles.hero}>
            <div className="container">
              <h1>Contenu random</h1>
              <p>Donec condimentum sagittis nunc id pharetra. Phasellus nec libero eros. Proin erat nulla, interdum a
                eleifend dignissim, pretium congue velit. Donec id suscipit purus. Proin fringilla et mi sed tempor.
                Cras placerat dolor lorem, nec molestie ligula feugiat in. Fusce aliquam, arcu ac elementum tincidunt,
                lectus mi interdum risus, non.

              </p>
            </div>
        </section>
        <section className="projets">
            <h2>Quelques projets</h2>
            <div className="container">
                <div className={styles['projets-container']}>
                    {
                        projets.map(
                            projet => {
                                if(projet.accueil && projet.display){
                                  return  <Card key={projet.id} projet={projet} />
                                }
                            }
                        )
                    }
                </div>
            </div>
        </section>
        <section>
            <h2>En savoir plus</h2>
            <div className="container">
                <div className={styles.cta}>
                    <p>Nunc luctus ornare tellus, non facilisis enim. Integer quis quam non nisi mollis pharetra eu nec
                        arcu. Vivamus scelerisque vehicula lacus eu pellentesque. Nam at nulla sit amet felis
                        sollicitudin interdum. Aenean eleifend non leo.

                    </p>
                    <div className={styles['cta-buttons-container']}>
                        <Link href="/projets">
                            <a className="button button-red">Les projets</a>
                        </Link>
                        <Link href="/cv">
                            <a className="button button-blue">Mon CV</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
