import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && this.props.country  && <p className="weather__key">Location:<span className="weather__value">{this.props.city},{this.props.country}</span></p>}
                {this.props.temperature && <p className="weather__key">Temp:<span className="weather__value">{this.props.temperature} °C</span></p>}
                {this.props.humidity && <p className="weather__key">Humidity:<span className="weather__value">{this.props.humidity}</span></p>}
                {this.props.description && <p className="weather__key">Description:<span className="weather__value">{this.props.description}</span></p> }
                {this.props.err && <p className="weather__error">{this.props.err}</p> }
                
            </div>
        )
    }
}

export default Weather;