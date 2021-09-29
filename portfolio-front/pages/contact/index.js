import styles from '../../styles/Contact.module.css';
import {useState} from "react";
import MessagesApi from "../../utils/api/MessagesApi";

const Contact = props => {

    const [email, setEmail] = useState('');
    const [objet, setObjet] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [statut, setStatut] = useState(null);
    //honeypot
    const [h, setH] = useState('');



    const validateForm = event => {
        event.preventDefault();
        const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailReg.test(email)){
            setStatut('error');
            setResponse('Votre email n\'est pas valide');
            return;
        }

        if(objet.length < 5 || objet.length > 400){
            setStatut('error');
            setResponse('Merci de renter un objet entre 5 et 400 caractères');
            return;
        }

        if(message.length < 5 || message.length > 4000){
            setStatut('error');
            setResponse('Merci de renter un message entre 5 et 4000 caractères');
            return;
        }

        if(h !== ''){
            return;
        }

        MessagesApi.postMessage({email: email, objet: objet, message: message})
            .then(
                resp => {
                    if(resp.status === 201){
                        setStatut('success');
                        setResponse('Votre message a bien été envoyé');
                        setEmail('');
                        setMessage('');
                        setObjet('');
                    }
                    else{
                        setStatut('error');
                        setResponse('Une erreur est survenue lors de l\'envoi du message');
                    }
                }
            )

    }

    const closeFlash = () => {
        setStatut('close');
    }

    return (
        <>
        <section className={styles.hero}>
            <div className="container">
                <h1>Contactez moi</h1>
            </div>
        </section>
        <section>
            <div className={'container'}>
                <div className={`${styles.flash}  ${statut ? styles[statut] : '' }`}>
                    {
                    response &&
                    <>
                        <button className={styles.close} onClick={() => closeFlash() }>X</button>
                        {response}
                    </>
                    }
                </div>
                <form className={styles.form} onSubmit={event => validateForm(event)}>
                    <div className={styles.h}>
                        <label htmlFor="emailh">Email</label>
                        <input id="emailh" name="emailh" type="emailh" autoComplete="off" value={h} onChange={event => setH(event.target.value)} />
                    </div>
                    <div className={styles.h}>
                        <label htmlFor="messageh">Message</label>
                        <textarea id="messageh" name="messageh" autoComplete="off" value={h} onChange={event => setH(event.target.value)}/>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor={"email"}>Votre adresse email :
                            <input type={"email"} id={"email"} name={"email"} value={email} onChange={event => setEmail(event.target.value)} required/>
                        </label>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor={"objet"}>L&apos;objet de votre message :
                            <input type={"text"} id={"objet"} name={"objet"} value={objet} onChange={event => setObjet(event.target.value)}  required/>
                        </label>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor={"message"}>Votre message :
                            <textarea required={true} id={"message"} name={"message"} rows={4}  value={message} onChange={event => setMessage(event.target.value)}>

                            </textarea>
                        </label>
                    </div>
                    <div className={styles.formgroup}>
                    <button type={"submit"} className={"button button-blue"}>Envoyer</button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

Contact.title = 'Contact';
Contact.meta = 'Envoyez moi un mot doux.'

export default Contact;