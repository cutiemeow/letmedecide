import React,{Component} from 'react';
import './App.css';
import TextInput from './components/TextInput/';
import Tag from './components/Tag/';
import {Button} from 'reactstrap';
import thanos from './img/thanos.png'
import snap from './img/snap.gif';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class App extends Component {
  constructor(props){
    super(props);
    this.listTag = ["hihi",
                    "hiep",
                    "lan",
                    "tom hum chien xu",
                    "rau muon xao toi tuong ot",
                    "rau muon xao toi tuong ot rau muon xao toi tuong ot tom hum chien xu",];

  }

  

  addTag = (text)=>{
    this.listTag.push(text);
    this.forceUpdate();
    console.log(this.listTag);
  }
  removeTag = (text)=>{
    for( var i = 0; i < this.listTag.length; i++){ 
      if ( this.listTag[i] === text) {
        this.listTag.splice(i, 1); 
        i--;
      }
   }
   this.forceUpdate();
    console.log(this.listTag);
    //alert("hahah");
  }
  randInt = (max,min)=>{
    return ((min | 0) + Math.random() * (max + 1)) | 0;
  }
  snapTag = (arr,newLength) =>{
    var a = arr.slice();
    while (a.length > newLength) a.splice(this.randInt(a.length - 1), 1);
    return a;

  }
  onClickSnap = ()=>{
    this.listTag =  this.snapTag(this.listTag,1);
    this.forceUpdate();
    console.log(this.listTag);
  }
  

  render(){
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-2 col-lg-2 ' > 
                <img className='img-thanos img-circle' src={thanos} />
                <p>

                  
                </p>
            </div>
            <div className='col-md-8 col-lg-8 col-mid'>
                      <p className='title'>WHAT TO EAT ?</p>
                      
                      <div className='row row-text-input'>
                          
                          <TextInput addTag = {this.addTag}/> 
                      
                        
                        {/* <Button onClick={this.onClickSnap}  color='danger'>Snap!</Button> */}
                      </div>
                      <div className='row row-tag'>
                          <CSSTransitionGroup
                            className = 'contain-tag'
                            transitionName="tag"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={1100}>
                                {
                                  this.listTag.length > 0 && this.listTag.map((item,index)=>{
                                    return <Tag removeTag={this.removeTag} text ={item} index = {index}/>
                                  })
                                }
                            </CSSTransitionGroup>
                        
                      </div>
                    
                
            </div>
            <div className='col-md-2 col-lg-2 col-right' >
                <a className='btn-snap' onClick={this.onClickSnap}  src ={snap}>
                      <img src={snap}  width="100px" height="100px" />
                </a>
                <p>
                  
                </p>
            </div>


          </div>

        </div>



      
    );
  }
 
}

export default App;
