import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'

const Player = (props) => {
  // console.log("PLAYER", props);
  return (
    <div onClick={() => props.selectPlayerAction(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}


export default connect(null, actions)(Player)
