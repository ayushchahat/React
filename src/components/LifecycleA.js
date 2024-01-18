import React, { Component } from 'react'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Vishwas'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }
  
  shouldComponentUpdate(){
    console.log('LifecycleA render')
    return true
  }
  
  getSnapshotBeforeUpdate(){
    console.log('LifecycleA componentDidUpdate')
    return null
  }

  

  changeState =()=>{
    this.setState({
      name:'Codevolution'
    })
  }

  render() {
    console.log('LifecycleB componentDidMount')
    return (
      <div>
      <div>LifecycleA</div>
      <button onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}

export default LifecycleA