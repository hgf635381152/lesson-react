import React from 'react';
import Header from './header/Header';
// import Top from './top/Top';
import Content from './content/Content';

function Mine() {
  return (
    <div className="mine">
      {/* <Top/> */}
      <Header />
      <Content/>
    </div>
  );
}

export default Mine;