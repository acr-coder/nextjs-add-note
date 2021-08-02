import mongoose from 'mongoose';

const connection = {};


async function dbConnect() {
    

    mongoose.connect("mongodb+srv://library:libraryTest@cluster0.qhb5u.mongodb.net/myNotes?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true})
    .then(console.log("Connected to Database"))
    .catch((err) => console.log(err))
}

export default dbConnect;