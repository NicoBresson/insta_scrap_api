import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Example extends PureComponent {


  render() {
    const maxFollowers = 50000
    const minFollowers = 5000
    const dataFiltered = this.props.scrapes.filter(element => element.nbFollowers < maxFollowers && element.nbFollowers > minFollowers)
    return (
      <div>
        <h4>Intersting follower chart(inferior to {maxFollowers} and superior to {minFollowers})</h4>
      <BarChart
        width={1000}
        height={300}
        data={dataFiltered}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey='instagramId' />
        <YAxis domain={['dataMin','dataMax']}/>
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey='nbFollowers' fill="#8884d8"/>
      </BarChart>
      </div>
    );
  }
}
