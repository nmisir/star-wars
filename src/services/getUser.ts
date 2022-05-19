import { get as axiosGet } from '../adapters/xhr';;

export const getUser = async (peopleEndpoint : string) : Promise<any> => {
    try {
        const response = await axiosGet(peopleEndpoint);
        const userName: string = response.data.name;
        return userName;
    } catch (error) {
        console.error(error);
    }    
};