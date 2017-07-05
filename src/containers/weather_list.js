import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  //const weather = state.weather
  return {weather} //same as {weather: weather}
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
// take application state as an argument, application state contains array of books and active book.
// return value will show up as props inside of bookList.  Ex. the this.props.weather of Component
// will return state.weather.  mapStateToProps is the link from react to redux

export default connect(mapStateToProps)(WeatherList)

// connect our component to mapStateToProps
