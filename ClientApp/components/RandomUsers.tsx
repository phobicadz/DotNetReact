import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface randomUserState {
  pictures: any,
  peopleToDisplay: number
}

export default class RandomUsers extends React.Component<any,randomUserState> {
    constructor(props) {
      super(props);
      this.handleNumberChange = this.handleNumberChange.bind(this);
      this.state = { pictures:null, peopleToDisplay: 10 };
    }
  
    componentDidMount() {
      this.getPictures(this.state.peopleToDisplay);
    }
  
    getPictures(value) {
      fetch(`https://randomuser.me/api/?results=${value}`)
        .then(results => results.json()).then(data => {
          let pictureData = data.results.map((pic) => (
            <div key={pic.login.salt}>
              <img src={pic.picture.medium} alt="" />
              <span>{pic.name.title}&nbsp;{pic.name.first}&nbsp;{pic.name.last}</span>
            </div>
          ));
          this.setState({ pictures: pictureData, peopleToDisplay: value });
        });
    }
  

    handleNumberChange(value) {
      this.getPictures(value);
    }
  
    render() {
      return (
        <div>
        {this.state.pictures}
      </div> )
    }
  }
  