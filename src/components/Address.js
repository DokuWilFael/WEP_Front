import React, { Component } from 'react';

//This class render an address as a table cell
export class Address extends Component{
  render(){
    const address = this.props.address;
    return(
      <tr>
        <td>
        <p>
          {address.type}
        </p>
        <ul>
          <li>{address.city+", "+address.country}</li>
          <li>{address.streetNumber + ", "+address.street}</li>
          <li>{address.complement}</li>
        </ul>
        </td>
      </tr>
    )
  }
}
