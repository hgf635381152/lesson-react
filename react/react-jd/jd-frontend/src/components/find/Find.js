import React, { useEffect, useState } from 'react';
import './Find.css'


function Find(){
  // window.addEventListener('scroll', function () {
  //   let t = document.querySelector('html').scrollTop;   
  //   if (t > 55) {
  //     document.querySelector(".find-bg").classList.add('box-active')
  //   } else {
  //     document.querySelector('.find-bg').classList.remove('box-active')
  //   }
  // })
  const [shoplist, setshoplist] = useState([]);
  useEffect(() => {
    fetch('http://localhost/find/shoplist')
      .then(data => data.json())
      .then(data => {
        setshoplist(data.shoplist)
        // console.log(data)
      })
  }, [])
  return ( 
    <div className="find">
      <div className="find-bg">
        <div className="find-bg-top">
          <i className="iconfont iconfont1">&#xe654;</i>
          <span className="find-bg-top-title">发现</span>
          <i className="iconfont iconfont2">&#xe636;</i>
          <i className="iconfont iconfont3">&#xe606;</i>
        </div>
        <div className="find-bg-bar">
          <div className="find-bg-bar-content">
            <span className="bar-span-1">关注</span>
            <span>直播</span>
            <span>5G</span>
            <span>视频</span>
          </div>
        </div>
      </div>
      <div className="find-list">
        {
          shoplist.map((Item, Index) => {
            return (
              <div className="find-list-shop" key={Index}>
                <div className="find-list-shop-top">
                  <img src={Item.shopimg} alt="" width={22} height={22} />
                  <span className="find-list-shop-top-span">{Item.shopname}</span>
                  <div className="find-list-shop-top-button">
                    <i className="iconfont iconfont4">&#xe613;</i>
                    <span>关注</span>
                  </div>
                </div>
                <div className="find-list-shop-goods">
                  {
                    Item.goods.map((item, index) => {
                      return (
                        <div className="find-list-shop-good" key={index}>
                          <img src={item.goodsimg} alt="" width={105} height={105} />
                          <span className="span-1">{item.content}</span>
                          <span className="span-2">{item.newprice}</span>
                          <span className="span-3">{item.oldprice}</span>
                        </div>
                      )
                    })
                  }
                  <div className="find-list-shop-more">
                    <span>更多商品</span>
                    <i className="iconfont iconfont5">&#xe61e;</i>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Find;