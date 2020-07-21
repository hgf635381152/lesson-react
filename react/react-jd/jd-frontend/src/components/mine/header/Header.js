import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className="wrapper1">
      <div className="header">
        <div className="header_avatar">
          <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="" />
        </div>
        <div className="header_info">
          <div className="header_info_name">
            夜尽天明_1119
          </div>
          <div className="header_info_more">
            <span>京享值544&gt;</span>
            <span>小白成长分4040&gt;</span>
            <span>家庭号&gt;</span>
          </div>
        </div>
        <div className="header_set">
          <img src="https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png" alt="" />
          <span>设置</span>
        </div>
      </div>
      <div className="details" >
        <div>
          <p>6</p>
          <span>商品关注</span>
        </div>
        <div>
          <p>7</p>
          <span>店铺关注</span>
        </div>
        <div>
          <p>22</p>
          <span>喜欢的内容</span>
        </div>
        <div>
          <p>57</p>
          <span>浏览记录</span>
        </div>
      </div>
      <div className="vip">
        <div>
          <span>plus会员</span>
          <p>免费试用30天 &gt;</p>
        </div>
        <div>
          <span>天天省钱购</span>
          <p>沐浴露优惠价 &gt;</p>
        </div>
        <div>
          <span>车主福利馆</span>
          <p>全国加油8折 &gt;</p>
        </div>
      </div>
    </div>
  
  );
}

export default Header;