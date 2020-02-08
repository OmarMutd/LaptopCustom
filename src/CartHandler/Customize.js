import React, { Component } from 'react';
import Feature from './Feature';

export default class Customize extends Component {
    render() {
        const features=Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature]
                return (
                    <Feature
                        key={featureHash}
                        feature={feature}
                        options={options}
                        onUpdateFeature={this.props.onUpdateFeature}
                        selected={this.props.selected}
                        USCurrencyFormat={this.props.USCurrencyFormat} />
                )
        })
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
       
}
