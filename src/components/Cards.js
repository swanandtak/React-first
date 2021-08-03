import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Call() {
    return (
        <div className="cards">

            <h1> Explore World With Us! </h1>

            <div className = 'cards__container'>
                <div className ='cards__wrapper'>
                    <ul className = 'cards__items'>
                       <CardItem
                       src = "/image/01image.jpg"
                       text = "Explore the Religious"
                       
                       label = 'TEMPLE'
                       path = '/servises'
                       />

                       <CardItem
                       src = "/image/02image.jpg"
                       text = "Explore the hidden Waterfall "
                       
                       label = 'WATERFALL'
                       path = '/servises'
                       />

                       <CardItem
                       src = "/image/03image.jpg"
                       text = "Explore the vibe of Mountain"
                       
                       label = 'MOUNTAIN'
                       path = '/servises'
                       />
 
                       <CardItem
                       src = "/image/04image.jpg"
                       text = "Enjoy with Friends"
                       
                       label = 'ENJOYMENT'
                       path = '/servises'
                       />

                       

                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Call;


