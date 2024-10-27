import mongoose from "mongoose";

async function init() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

export default {
    init
}