import React from 'react';
import Card from './Card';
// import {robots} from './robots'; /* if dont import robots here, can input robots 
/* as parameter of CardList */

const CardList = ({robots}) => {
    return (
        <div>
           {
                robots.map((user,i) => {
                    return (
                        <Card 
                            key = {i} 
                            id = {robots[i].id} 
                            name = { robots[i].name } 
                            email = { robots[i].email }
                        />
                    )
                })
            } 
        </div>
    );
}

export default CardList; 
