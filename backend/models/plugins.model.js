import mongoose from 'mongoose';


const pluginData = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number,
    },
    image: {
        type: String
    }
})

const Plugin = mongoose.model("Plugin", pluginData)

export default Plugin;

