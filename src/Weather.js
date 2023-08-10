import React from "react";
import Day from "./Day";
class Weather extends React.Component {
  componentWillUnmount() {
    console.log("Weather Unmounting...");
  }
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    // console.log(max, min, dates, codes);
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              max={max.at(i)}
              min={min.at(i)}
              day={date}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
