import { useRouter } from 'next/router'
import TechnosApi from "../../utils/api/TechnosApi";
import {useEffect, useState} from "react";
import Projets from "../projets";



const Technos = () => {
    const router = useRouter();
    const { tid } = router.query;
    const [techno,setTechno] = useState(null);




    useEffect(
        () => {
            if(!techno){
                TechnosApi.getTechnoById(tid)
                    .then(
                        response => setTechno(response.data)
                    ).catch(
                        error => console.log(error)
                )
            }
        } , [router.isReady, techno, tid]
    )





    return (
        <Projets techno={techno} projets={techno ? techno.projets : []} />
    )
}

Technos.getInitialProps = async (c) => {

    const tech = await TechnosApi.getTechnoById(c.query.tid)
        .then(resp => {
            return resp.data
        });

    return {
        id: String(c.query.tid),
        key: String(c.query.tid),
        technos: tech
    };
};

Technos.title = 'Techno';
Technos.meta = 'Retrouvez les projets réalisés avec cette technologie';

export default Technos;