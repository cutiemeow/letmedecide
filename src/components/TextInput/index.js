import React , {Component} from 'react';
import "./style.scss";



export default class TextInput extends Component{
     

    constructor(props){
        super(props);
        
        
        
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
        event.preventDefault();
        this.props.addTag(this.state.value);
        this.setState({value : ""});
        
    }
    render(){
        return(
                <form className='form-input'>
                    <div className="input-group">
                        <div class="input-group-prepend">
                            <input className='form-control '
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleChange}
                                    onKeyPress={e => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            this.handleSubmit(e);
                                        }
                                    }
                                    }/>
                                <div className="input-group-append">
                                        <button className="btn btn-success" 
                                                type="button"
                                                onClick={this.handleSubmit}>Go
                                        </button> 
                                </div>
                        </div>
                    </div>
                </form>     
        );
    }

}



