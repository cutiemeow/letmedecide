import React , {Component} from 'react';
import "./style.scss";
import { Textfit } from 'react-textfit';
import CloseButton from '../CloseButton/'




export default function(props){

    const {removeTag,text,index} = props;
    
 
    return(
        <Textfit mode="multi" 
                 forceSingleModeWidth = {true} 
                 max={100} min ={1} 
                 throttle={50}  
                 className="textFit" >
                <CloseButton removeTag = {removeTag} text = {text} ></CloseButton>
                {text}
        </Textfit>
    );

}
