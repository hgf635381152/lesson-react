import React, { useState, useEffect } from 'react'


function Recommend(props) {
  const [ list, setlist ] = useState([]);
  const [ title, settitle ] = useState('')
  useEffect(() => {
    fetch('http://localhost/sort/recommend')
      .then(data => data.json())
      .then(data => {
        setlist(data.recommend)
        settitle(data.title)
        // console.log(data)
        // console.log(this.state.list)
      })
  }, [])
    return (
      <div className="sort-goods-list">
        <h2 >{title}</h2>
        <ul >
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <img  src={item.src} width={75} height={75} alt="" />
                  <span>{item.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
}

export default Recommend;