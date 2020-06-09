import React from 'react';
import '../styles/FooterCompon.css';
class FooterComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <footer>
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-title">
                            <h2>COLLECTION 2020</h2>
                        </div>
                        <div class="footer-description">
                            <h5>All Photos From Dribbble Collection</h5>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;