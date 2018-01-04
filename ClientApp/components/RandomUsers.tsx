import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface randomUserState {
  pictures: any,
  peopleToDisplay: number,
  isLoading: boolean
}

export default class RandomUsers extends React.Component<any,randomUserState> {
    constructor(props) {
      super(props);
      this.handleNumberChange = this.handleNumberChange.bind(this);
      this.state = { pictures:"loading...", peopleToDisplay: 1000, isLoading:true };
    }
  
    componentDidMount() {
      try {
        this.getPictures(this.state.peopleToDisplay);
      }
      catch(e) {
        console.error('Error occured ' + e);
      }
    }
  
    getPictures(value) {
      fetch(`https://randomuser.me/api/?results=${value}`)
        .then(results => results.json()).then(data => {
          let pictureData = data.results.map((pic) => (
            <div id='people-images'>
              <div key={pic.login.salt}>
                <img src={pic.picture.medium} alt="" />
                <span>{pic.name.title}&nbsp;{pic.name.first}&nbsp;{pic.name.last}</span>
              </div>
            </div>
          ));
          this.setState({ pictures: pictureData, peopleToDisplay: value, isLoading: false });
        });
    }
  

    handleNumberChange(value) {
      this.getPictures(value);
    }
  
    render() {
      return (
        <div id='parent'>
        {this.state.pictures}
      </div> )
    }
  }
  