import EmployeeAdd from './EmployeeAdd.jsx';
import { response } from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './EmployeeList.jsx'


ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById('content')
);
