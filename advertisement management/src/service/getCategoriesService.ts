import {Category} from '../models/category'



const getCategoriesService:any= async () => {
    
    try {
        const result = await Category.findAll(); 
        return result;
    } catch (err) {
        console.log(err);
        throw new Error("Error in Categories fetching from the service.");
    } 
};

export default getCategoriesService;