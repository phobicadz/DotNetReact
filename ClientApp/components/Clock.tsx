import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface clockState {
    currentDate: Date;
    timerId: number;
}

export default class Clock extends React.Component<any,clockState> {

    constructor(props) {
       super(props);
        this.state = { currentDate : new Date(), timerId: 0 };
    }
  
    componentDidMount() {
      this.setState({ timerId : setInterval(() => this.tick(),1000) });
    }
  
    componentWillUnmount() {
      clearInterval(this.state.timerId);
    }
  
    private tick() {
      this.setState({ currentDate: new Date() });
    }
  
    public render() {
      return (
        <div>
          <h1>Current Time is</h1>
          <FormattedDate date={this.state.currentDate} />
        </div>
      );
    }
  }

 function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
  
  