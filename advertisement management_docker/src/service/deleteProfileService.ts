import User from '../models/Users';


const deleteProfileService = async (id: any) => {
    
    try {
        const result = await User.destroy({where:{ id} }); 
        return result;
    } catch (err) {
        console.log(err);
        throw new Error("Error in deleting profile from the service.");
    } 
};

export default deleteProfileService;