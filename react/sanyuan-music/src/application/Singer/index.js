import React, { useEffect, useRef, memo } from 'react'
import { connect } from 'react-redux'
import { NavContainer } from './style'
import { categoryTypes, alphaTypes } from '../../api/config'
import Horizen from '../../baseUI/horizen-item/index';


function Singers(props) {
  const { category, alpha } = props;
  const handleUpdateCategory = () => {

  }
  const handleUpdateAlpha = () => {

  }

  return (
    <div>
      <NavContainer>
        <Horizen title="分类(默认热门):" list={categoryTypes} handleClick={(v) => handleUpdateCategory(v)} oldVal={category}/>
        <Horizen title="首字母:" list={alphaTypes} handleClick={(v) => handleUpdateAlpha(v)} oldVal={alpha}/>
      </NavContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  category: state.singer.category,
  alpha: state.singer.alpha
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers))


