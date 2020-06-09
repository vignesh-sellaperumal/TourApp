import React from 'react';
import axios from 'axios';
import image from '../resources/images/pollachi.png';
import '../styles/HomeCompon.css';
import HeaderComponent from '../components/HeaderComponent.js';
import FooterComponent from '../components/FooterComponent.js';
import CardComponent from '../components/CardComponent.js';
import TouristServices from '../util/TouristServices.js';
class HomeComponent extends React.Component{
    constructor(){
        super();
        this.state={
            CityLists:[]
        }
    }
    componentWillMount(){
        this.setState({
            CityLists:TouristServices.readFromJSONFile()
        });
        axios.fetch('https://foodiespot.herokuapp.com/users/')
        .then(response => {
            const datas = response.data;
            for(let data of datas)
            {
                alert(data.tags);
            }
        })
    }
    printList(){
        let arrayOfCards=[]
        for(let object of this.state.CityLists){
            arrayOfCards.push(<CardComponent card={object}/>)
        }
        return arrayOfCards;
    }
    render(){
        return(
        <div class="main-container">
           <HeaderComponent />
            <div class="main-card">
               {this.printList()}
            </div>
            <div class="para-container">
                <div class="para-title">
                    <h1>Many Wonders, One Emotion</h1>
                </div>
                <div class="para-description">
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets</h4>
                </div>
            </div>
            <FooterComponent />
        </div>
        );
    }
}

export default HomeComponent;
