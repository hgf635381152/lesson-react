import React, { Component } from 'react'


class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
      title: ''
    };
  }
  render() {
    fetch('http://localhost/sort/recommend')
      .then(data => data.json())
      .then(data => {
        this.setState({
          list: data.recommend,
          title: data.title
        })
        // console.log(data)
        // console.log(this.state.list)
      })
    return (
      <div>
        <h2 >{this.state.title}</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li className="list-li" key={index}>
                  <img src={item.src} width={75} height={75} alt="" />
                  <span>{item.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Recommend;