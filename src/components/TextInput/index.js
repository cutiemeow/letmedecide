import React , {Component} from 'react';



export default class TextInput extends Component{
     

    constructor(props){
        super(props);
        //destructoring props
        
        //console.log(listTag)
        //value of textInput
        this.state = {value: ""};
        //event
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
    }
    handleSubmit(event){
        this.props.setText(this.state.value);
        this.setState({value : ""});
    }
    render(){
        return(
                <form >
                    <div className="input-group mb-3">
                        <input className='form-control' type="text" value={this.state.value} onChange={this.handleChange} />
                            <div className="input-group-append">
                                    <button className="btn btn-success" type="button" onClick={this.handleSubmit}>Go</button> 
                            </div>
                    </div>
                </form>     
        );
    }

}



