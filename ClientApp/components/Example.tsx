import * as React from 'react';

const items = [
  'first item',
  'second item',
  'third item',
];

class Example extends React.Component<any,any> {
  state = { items : [] };

  componentWillMount() {
    setTimeout(()=> {
      this.setState( ()=>({items}))
    }, 100  + Math.random() * 600)
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Wait a bit and it'll load</h1>
        {!items.length ? <h2>Loading...</h2> : (
          <ul>
            { items.map(item => <li key={item} className="list-item">{item}</li>) }
          </ul>
        )}

      </div>
    )
  }
}

export default Example;