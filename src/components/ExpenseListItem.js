import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}> 
            <h3>{description}</h3>
        </Link>
        <p>Amount: ${amount/ 100}</p>
        <p>Created on {moment(createdAt).format('MMM DD YYYY')} at {moment(createdAt).format('hh:mma')}</p>
    </div>
);  

export default ExpenseListItem;