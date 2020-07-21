import React,{useCallback} from 'react';
import './App.css';
import Index from './components/index/Index';
import Sort from './components/sort/Sort';
import Find from './components/find/Find';
import Cart from './components/cart/Cart';
import Mine from './components/mine/Mine';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  const handleClickIndex = useCallback((e) => {
    // console.log(e.target.src)
    e.target.src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"
    console.log(111)
  },[])
  const handleClickSort = useCallback((e) => {
    e.target.src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png"
  },[])
  const handleClickFind = useCallback(() => {
    console.log(333)
  },[])
  const handleClickCart = useCallback((e) => {
    e.target.src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png"
  },[])
  const handleClickMine = useCallback((e) => {
    e.target.src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png"
  },[])
  return (
    <Router>
      <div className="footer">
        <div className="footer_index"><Link to="/" onClick={handleClickIndex}>
          <div>
            <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png" alt="" />
          </div>
        </Link></div>
        <div className="footer_sort"><Link to="/sort/" onClick={handleClickSort}>
          <div>
            <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png" alt="" />
          </div>
        </Link></div>
        <div className="footer_find"><Link to="/find/" onClick={handleClickFind}>
          <div>
            <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png" alt="" />
          </div>
        </Link></div>
        <div className="footer_cart"><Link to="/cart/" onClick={handleClickCart}>
          <div>
            <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png" alt="" />
          </div>
        </Link></div>
        <div className="footer_mine"><Link to="/mine/" onClick={handleClickMine}>
          <div>
            <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png" alt="" />
          </div>
        </Link></div>
      </div>
      <Route path="/" exact component={Index} />
      <Route path="/sort/" component={Sort} />
      <Route path="/find/" component={Find} />
      <Route path="/cart/" component={Cart} />
      <Route path="/mine/" component={Mine} />
    </Router>
  );
}

export default App;
