import { useRouter } from 'next/router'
import TechnosApi from "../../utils/api/TechnosApi";
import {useEffect, useState} from "react";
import Projets from "../projets";



const Technos = props => {
    const router = useRouter();
    const { tid } = router.query;
    const [oldRoute, setOldRoute] = useState('0');
    const [techno,setTechno] = useState(null);

    useEffect(
        () => {
            if(tid !== oldRoute){
                TechnosApi.getTechnoById(tid, props.http)
                    .then(
                        response => {
                            setTechno(response.data);
                            setOldRoute(tid);
                        }
                    ).catch(
                        error => console.log(error)
                )
            }
        } , [router.query.tid]
    );





    return (
        <Projets techno={techno} projets={techno ? techno.projets : []} />
    )
}


Technos.title = 'Techno';
Technos.meta = 'Retrouvez les projets réalisés avec cette technologie';

export default Technos;