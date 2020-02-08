import React, { Component } from 'react';
import slugify from 'slugify';
import Item from './Item'

export default class Feature extends Component {
    render() {
        const items = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item))
            const checked = item.name === this.props.selected[this.props.feature].name
            return(
                <Item
                    key={itemHash}
                    itemHash={itemHash}
                    item={item}
                    feature={this.props.feature}
                    checked={checked}
                    onUpdateFeature={this.props.onUpdateFeature}
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}/>
            )
        })
        return(
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {items}
            </fieldset>  
        )
    }
       
}