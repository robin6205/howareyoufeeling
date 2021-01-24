import React, { Component } from 'react';


class Form extends Component{

constructor(props) {
  super(props)

  this.state = {


      days: ['great','meh','bad'],
      Comments: ['it was good','whatever','shit'],
      rate: []
    
  }
}


  handleDayChange = (event) => {
      this.setState({
        days: event.target.value
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
      alert(JSON.stringify(this.state.days) + JSON.stringify(this.state.comments) + JSON.stringify(this.state.rate))
      const {days} = this.state;
      const newday = this.newday.value;
      event.preventDefault()

      this.setState({
        days: [...this.state.days, newday]
      })

      this.addForm.reset();
}


  render(){
    //const {days} = this.state;
    return(
    <div className ="content">
      <form ref={input => this.addForm = input} onSubmit={this.handleSubmit}>
        <div>
          <label>How was your day? :)</label>
          <input ref={input => this.newday = input} type='text' value ={this.state.days}  onChange = {this.handleDayChange}/>
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
        <button type="submit" className="btn btn-primary"> Submit</button>
      </form>
      <div>
        <h1>List of days</h1>
      

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">day</th>
      <th scope="col">comment</th>
      <th scope="col">rate</th>
    </tr>
  </thead>
  <tbody>
  {
            this.state.days.map(day => {
            return (<tr key={day}>
              <th scope="row">1</th>
              <td>{day}</td>
              <td>test1</td>
              <td>test2</td>
            </tr>)
          })
        }

  </tbody>
</table>



      </div>
      

    </div>
    )

  }
}

export default Form;
