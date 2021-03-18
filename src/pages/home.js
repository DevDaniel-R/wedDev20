import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
  render() {
    let myVar = "oh snap";
    return (
      <div>
        <Header title="look here"></Header>
          <Grid dynamicTitle={"testing " + myVar}/>
      </div>
    )
  }
}