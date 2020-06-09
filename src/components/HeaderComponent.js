import React from 'react';
import '../styles/HeaderCompon.css';
class HeaderComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <header>
                    <div class="header-container">
                    <h1>ENCHANTING TAMILNADU</h1>
                    </div>
            </header>
        );
    }
}

export default HeaderComponent;