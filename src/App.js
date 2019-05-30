import React,{Component} from 'react';
import './App.css';
import TextInput from './components/TextInput/';
import Tag from './components/Tag/';

class App extends Component {
  constructor(props){
    super(props);
    this.listTag = ["hihi","hiep","lan","tom hum chien xu","rau muon xao toi tuong ot","rau muon xao toi tuong ot rau muon xao toi tuong ot tom hum chien xu"];

  }

  

   setText = (text)=>{
    this.listTag.push(text);
    this.forceUpdate();
    console.log(this.listTag);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <TextInput setText = {this.setText}/>
          <div className='contain-tag'>
            {
              this.listTag.length > 0 && this.listTag.map((item,index)=>{
                return <Tag text ={item} index = {index}/>
              })
            }
          </div>
        </header>
      </div>
    );
  }
 
}

export default App;
