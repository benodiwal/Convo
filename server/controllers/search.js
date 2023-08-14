import User from "../models/User.js";

const search = async (req, res) => {
    const username = req.query.name;
    console.log(username);

    try {
        const results = await User.find({ username: { $regex: username, $options: 'i' }});
        if (results) {
        res.status(200).json(results);
        } else {
            res.status(404)
        }   
    } catch (error) {
        console.error('Error serching user', error);
        res.status(500).json({ error: `Error findind user in the database, ${error}` })
    }
}

export default search