import Plugin from '../models/plugins.model.js';


export const getPlugin = async(req, res)=>{
    try{
        const data = await Plugin.find({});
        if(data.length === 0){
            return res.status(404).json({msg: "No plugins found"});
        }
        res.status(200).json(data);
    }
    catch(error){
        console.error("error fetching plugins: ", error);
        res.status(500).json({msg: "Server error"});
    }
    
}