import React,{Component} from 'react';
import './App.css';
import TextInput from './components/TextInput/';
import Tag from './components/Tag/';
import thanos from './img/thanos.png';
import snap from './img/snap.gif';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import MediaQuery from 'react-responsive';
import hulk from './img/hulk.png'
import antman from './img/ant_man.png'
import blackpanner from './img/black_panner.png'
import captain from './img/captain.png'
import ironman from './img/ironman.png'
import thor from './img/thor.png'
import vission from './img/vission.png'



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
            <div className='col-sm-2 col-md-2 col-lg-2 ' > 
                <MediaQuery query="(max-device-width: 1224px)">
                  {/* //for mobile */}
                  <img className='img-thanos-mobile img-circle' src={thanos} />
                  <a className='btn-snap-moblie' onClick={this.onClickSnap}  src ={snap}>
                        <img className='img-snap' src={snap}  width="100px" height="100px"  />
                  </a>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                
                <img className='img-thanos img-circle' src={thanos} />
                <img className='avenger captain' src={captain} width="112px" height="150px" ></img>
                <img className='avenger ironman' src={ironman} width="112px" height="150px" ></img>
                <img className='avenger vission' src={vission} width="112px" height="150px" ></img>
                
                
                
                </MediaQuery>
                
            </div>
            <div className='col-sm-8 col-md-8 col-lg-8 col-mid'>
                      <p className='title'>LET ME DECIDE</p>
                      
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
            <div className='col-sm-2 col-md-2 col-lg-2 col-right' >
                <MediaQuery query="(max-device-width: 1224px)">
                    {/* //for mobile */}
                    <div></div>
                   
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                      
                      <a className='btn-snap' onClick={this.onClickSnap}  src ={snap}>
                          <img className='img-snap' src={snap}  width="100px" height="100px" />
                      </a>
                      <img className='avenger hulk' src={hulk} width="135px" height="180px" ></img>
                      <img className='avenger antman' src={antman} width="112px" height="150px" ></img>
                      <img className='avenger blackpanner ' src={blackpanner} width="112px" height="150px" ></img>
                      
                      
                      
                      
                      

                </MediaQuery>
                <p>
                  
                </p>
            </div>


          </div>

        </div>



      
    );
  }
 
}

export default App;
