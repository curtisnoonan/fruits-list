import React from 'react';
import { Card } from '../card/card.component.jsx'

import './card-list.styles.css';

export const CardList = props => (

    <div className='card-list'>
    {props.fruits.map(fruit =>(
        <Card key={fruit.imageurl} fruit={fruit}/>
      ))}
    </div>
);