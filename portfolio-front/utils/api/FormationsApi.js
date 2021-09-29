
export default class FormationsApi{

    static getAllFormations(http){
        return http.get( process.env.NEXT_PUBLIC_API_URL + '/formations')
            .then(response =>  {
                return response
            })
    }



}