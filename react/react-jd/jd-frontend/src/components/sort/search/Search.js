import React from 'react';
import './Search.css';
import LIMG from './扫一扫.png';
import RIMG from './消息.png';
import limg from './搜索.png';
import rimg from './相机.png';

function Search (){

    return (
      <div>
        <div className="search-input">
          <div className="left-Image">
            <img width={30} height={30} src={LIMG} alt=" " />
          </div>
          <div className="input-div">
            <div className="left-image">
              <img width={15} height={15} src={limg} alt=" " />
            </div>
            <div className="input-a">
              <input width={235} type="text" placeholder="扫描仪" className="input"/>
            </div>
            <div className="right-image">
              <img width={20} height={20} src={rimg} alt=" " />
            </div>
          </div>
          <div className="right-Image">
            <img width={30} height={30} src={RIMG} alt=" " />
          </div>
        </div>
      </div>
    );
}

export default Search;