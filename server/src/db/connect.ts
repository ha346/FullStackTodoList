import mongoose from 'mongoose';
import config from 'config';

const USERNAME = config.get("username") as string;
const PASSWORD = config.get("password") as string;
 

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@chatapplication.z1kdrew.mongodb.net/?retryWrites=true&w=majority&appName=ChatApplication`;

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;