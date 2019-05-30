import React , {Component} from 'react';
import FitText from '@kennethormandy/react-fittext'
import "./style.scss";



export default function(props){
    return(
        <div className='tag'>
            <FitText vertical compressor={0.4} minFontSize={9} maxFontSize={20}>
                <p>{props.text}</p>
                 
            </FitText>
            
        </div>

        
            
        
    );
}