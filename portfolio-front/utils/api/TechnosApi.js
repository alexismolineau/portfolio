
export default class TechnosApi{


    static getAllTechnos(http){
        return http.get( process.env.NEXT_PUBLIC_API_URL + '/technos')
            .then(response =>  {
                return response
            });
    }

    static getTechnoById(id, http){
        return http.get( process.env.NEXT_PUBLIC_API_URL + '/technos/' + id)
            .then(response =>  {
                return response
            });
    }



}