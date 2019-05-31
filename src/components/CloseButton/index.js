import React , {Component} from "react";
import "./style.scss"


export default function(props){

    const handleClick= () =>{
        props.removeTag(props.text);
    };
   
    return(
        <div>
            <a onClick={handleClick} className="close-thik">✖</a>
        </div>
    );
}