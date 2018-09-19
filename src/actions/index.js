export const selectPlayerAction = (player) => {
  console.log("hit action")
  return {type: "SELECT_PLAYER", player: player}
}

export const otherAction = () => {
  console.log('OtherGUY');
}
