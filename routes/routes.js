// import express from 'express'
// import {getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.js'
//
// const router = express.Router()
//
// router.route('/')
//     .get(getAllEmployees)
//     .post(createEmployee)
// router.route('/:id')
//     .get(getEmployee)
//     .patch(updateEmployee)
//     .delete(deleteEmployee)
//
// export default router


import express from 'express';
import { getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.js';

const router = express.Router();

// Define routes
router.get('/api/employees', getAllEmployees);
router.post('/api/employees', createEmployee);

// router.get('/:id', getEmployee);
// router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
