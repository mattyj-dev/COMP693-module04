import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name is required']
    },
    extension: {
        type: Number, 
        required: [true, 'Extension is required']
    },
    email: {
        type: String, 
        required: [true, 'Email is required']
    },
    title: {
        type: String, 
        required: [true, 'Title is required']
    },
    dateHired: {
        type: Date, 
        default: Date.now
    },
    currentlyEmployed: {
        type: Boolean,
        default: true,
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
