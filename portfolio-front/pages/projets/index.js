import Card from "../../components/Card";
import styles from '../../styles/Projets.module.css';
import Pagination from "../../components/Pagination";

const Projets = props => {

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
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className="container">
                    <Pagination />
                </div>
            </section>



        </>
    )

}

export default Projets