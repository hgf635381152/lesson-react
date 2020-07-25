import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './SortList.css';
import Recommend from './Recommend';
import Supermarket from './Supermarket'
import International from './International'

function SortList() {
    return (
      <div>
        <div className="sort-SortList">
          <div className="sort-left-List">
            <ul>
              <li><NavLink to="/sort/recommend" activeClassName="selected">推荐分类</NavLink></li>
              <li><NavLink to="/sort/supermarket" activeClassName="selected">京东超市</NavLink></li>
              <li><NavLink to="/sort/international" activeClassName="selected">家具家装</NavLink></li>
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
            </ul>
          </div>
          <div className="sort-right-List">
            <div className="sort-right-goods">
              <Route path="/sort" exact component={Recommend} />
              <Route path="/sort/recommend" exact component={Recommend} />
              <Route path="/sort/supermarket" exact component={Supermarket} />  
              <Route path="/sort/international" exact component={International} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default SortList;