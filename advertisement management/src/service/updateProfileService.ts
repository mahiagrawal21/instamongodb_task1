import User from '../models/Users';

const updateProfileService = async (id: any, username: string, email: string, name: string, phoneNumber: bigint) => {
    try {
        const user = await User.findOne({ where: { id } });
        console.log("user:", user);
        user?.set({
            username,
            email,
            name,
            phoneNumber
        });

        await user?.save();
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Error in updating profile from the service.");
    }
};

export default updateProfileService;