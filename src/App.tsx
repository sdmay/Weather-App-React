import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import Axios from 'axios';
import Temp from './components/temp';
import TempError from './components/temperror';

class App extends Component {
  state = {
    loaded: false,
    error: false,
    city: '',
    state: '',
    temperature: 0
  }
  cityChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({
      city: event.currentTarget.value
    })
  }
  handleStateSelection(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({
      state: event.currentTarget.value
    })
  }
  getTemperature() {
    if(this.state.city.length === 0) {
      alert('You must enter a city!')
      return false
    }
    if(this.state.state === '') {
      alert('You must select a state!')
      return false
    }
   axios.get(`weather/${this.state.city}/${this.state.state}`,
   ).then((value: AxiosResponse) => {
     if (value.data.error) {
       this.setState({
         loaded: true,
         error: true
       })
     }
     if (value.data.temperature) {
      this.setState({
        temperature: value.data.temperature,
        loaded: true
      })
     }
        
    }).catch((err: any) => {
      return err
    })
  }
  resetState() {
      this.setState({
          loaded: false,
          error: false,
          city: '',
          state: '',
          temperature: 0

      })
  }

  render() {
    const disable = this.state.city.length === 0 || this.state.state.length === 0;
    return (
      <div className="App">
        <header className="App-header">
        <h1>Weather App</h1>

{!this.state.loaded ? 
<>
<input className="formbox" name="City" placeholder="Enter City" onChange={(event: React.FormEvent<HTMLInputElement>) => this.cityChange(event)} />
        <select className="formbox"  value={this.state.state} onChange={(event: any) => this.handleStateSelection(event)}>
        <option value="">Select State</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select> </>: null }
{!this.state.loaded ? <button disabled={disable} className="formbox" onClick={() => this.getTemperature()}>Get Temperature</button> : <button className="resetButton"  onClick={() => this.resetState()}>Reset</button>}
{this.state.loaded && !this.state.error ? <Temp temperature={this.state.temperature} city={this.state.city} state={this.state.state}/>: null}
{this.state.loaded && this.state.error ? <TempError city={this.state.city} state={this.state.state}/> : null}
               </header>
      </div>
    );
  }
}

export default App;
