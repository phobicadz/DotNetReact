import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const divStyle = {
  height: '80px',
  lineHeight: '80px'
};

interface randomUserState {
  pictures: any,
  peopleToDisplay: number,
  isLoading: boolean
}

export default class RandomUsers extends React.Component<any, randomUserState> {
  constructor(props) {
    super(props);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.state = { pictures: null, peopleToDisplay: 100, isLoading: true };
  }


  componentDidMount() {
    this.getPictures(this.state.peopleToDisplay);
  }

  getPictures(value) {
    fetch(`https://randomuser.me/api/?results=${value}`)
      .then(results => results.json()).then(data => {
        let pictureData = data.results.map((pic) => (
            <div className="row" style={divStyle} key={pic.login.salt}>
              <div className="col-sm-1" >
                  <img src={pic.picture.medium} alt="" />
              </div>
              <div className="col-sm-4">
                <span><strong>{pic.name.title}&nbsp;{pic.name.first}&nbsp;{pic.name.last}</strong></span>
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
    return (<div>
      {this.state.pictures}
    </div>
    )
  }
}
