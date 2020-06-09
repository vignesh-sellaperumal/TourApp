import React from 'react';
import ButtonComponent from './ButtonComponent.js';
import image from '../resources/images/pollachi.png';
import '../styles/CardCompon.css';
class CardComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div class="card-container">
                <div class="image-container">
                    <img src={this.props.card.image} alt="Cover Image"/>
                </div>
                <div class="quotes-container">
                    <h1>{this.props.card.title}</h1>
                </div>
                <div class="city-container">
                    <h3>{this.props.card.location}</h3>
                </div>
                <div class="description-container">
                    <p>{this.props.card.description}</p>
                </div>
                <ButtonComponent />
            </div>
        );
    }
}

export default CardComponent;