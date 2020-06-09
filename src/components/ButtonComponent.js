import React from 'react';
import '../styles/ButtonCompon.css';
class ButtonComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div class="button-container">
                <input type="button" value="Read More" class="read-btn"/>
            </div>
        );
    }
}

export default ButtonComponent;