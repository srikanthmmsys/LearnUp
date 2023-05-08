// import './App.css';
import React, { Component } from 'react'

export default class TodoClass extends Component {
  state={value:"",data:[]}
   onchangeHandeller(e){
    this.setState({value:e.target.value})
        }
    onclickHandeller(){
this.setState({data:[this.state.value,...this.state.data]})
this.setState({value:""})

    }
    ondeleteHandeller(e){
      this.setState({data:this.state.data.filter((_,k)=>{
return(k!==e.target.value)
      })})
    }
  render() {
  
    return (
      <div>
        <h1>To Do</h1>
        <hr></hr>
        <input type="text" value={this.state.value} onChange={this.onchangeHandeller.bind(this)} />
        <button onClick={this.onclickHandeller.bind(this)}>ADD</button>
       <ol start="20"> {this.state.data.map((value,key)=>{return (
          <li key={key} value={key} onClick={this.ondeleteHandeller.bind(this)}>{value}</li>
        )
        } ) }</ol>
      </div>
    )
  }
}
