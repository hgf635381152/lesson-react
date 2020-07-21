import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './SortList.css';
import Recommend from './Recommend';
import Supermarket from './Supermarket'
import International from './International'

class SortList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <div className="SortList">
          <div className="left-List">
            <ul>
              <li><Link to="/sort/recommend">推荐分类</Link></li>
              <li><Link to="/sort/supermarket">京东超市</Link></li>
              <li><Link to="/sort/international">国际名牌</Link></li>
              <li>奢侈品</li>
              <li>京东国际</li>
              <li>唯品会</li>
              <li>男装</li>
              <li>女装</li>
              <li>男鞋</li>
              <li>女鞋</li>
              <li>母婴童装</li>
              <li>内衣配饰</li>
              <li>箱包手袋</li>
              <li>美妆护肤</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
              <li>推荐分类</li>
              <li>京东超市</li>
            </ul>
          </div>
          <div className="right-List">
            <div className="right-goods">
              <Route path="/sort/recommend" exact component={Recommend} />
              <Route path="/sort/supermarket" exact component={Supermarket} />  
              <Route path="/sort/international" exact component={International} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SortList;