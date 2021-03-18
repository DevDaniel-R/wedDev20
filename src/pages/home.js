import React from 'react';
import Header from '../components/header';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="look here now at this pic"></Header>
        <img src="https://cdn.pixabay.com/photo/2014/06/27/22/49/chameleon-abstract-378557_960_720.jpg"/>
      </div>
    )
  }
}