import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Connected to database...');
    } catch (err) {
        console.error('Failed to connect to database:', err);
    }
};

export default connectDB;
