import React, { Component } from 'react';


class Form extends Component{

constructor(props) {
  super(props)

  this.state = {
      day: '',
      Comments: '',
      rate: ''
  }
}

  handleDayChange = (event) => {
      this.setState({
        day: event.target.value
      })
  }

  handleCommentsChange = (event) =>{
    this.setState({
      comments: event.target.value
    })
  }

  handleRateChange = (event) =>{
    this.setState({
      rate: event.target.value
    })
  }

  handleSubmit = (event) =>{
      alert(JSON.stringify(this.state.day) + JSON.stringify(this.state.comments) + JSON.stringify(this.state.rate))
      event.preventDefault()
}
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>How was your day? :)</label>
          <input type='text' value ={this.state.day}  onChange = {this.handleDayChange}/>
        </div>
        <div>
          <label>Why?</label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}/>
        </div>
        <div>
          <label>Rate your day</label>
          <select value={this.state.rate} onChange = {this.handleRateChange}>
          <option value= "one">1</option>
          <option value= "two">2</option>
          <option value= "three">3</option>
          <option value= "four">4</option>
          <option value= "five">5</option>
          </select>
        </div>
        <button type="Submit">Submit</button>
      </form>
      <div>JSON.stringify(this.state.day)</div>
    )

  }
}

export default Form;
