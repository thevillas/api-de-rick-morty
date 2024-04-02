import { API_RM } from "../constants/api.constan";

class RMservice {

    async getCharacters(){
        const response = await fetch(API_RM.CHARACTAERS());
        return response.json();
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        return response.json();
    }
}

const rmServiceInstance = new RMservice();
export default rmServiceInstance;