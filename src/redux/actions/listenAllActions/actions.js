function openListenAllModal() {
  return {
    type: "TOGGLE_LISTEN_ALL_MODAL"
  }
}

function changeBirdType(e, index) {
  
  return {
    type: "CHANGE_BIRD_TYPE",
    payload: index,
    zeroIndex: 0
  }
}

function changeListenAllBirdIndex(e, index) {
  return {
    type: "CHANGE_LISTEN_ALL_BIRD_INDEX",
    payload: index
  }
}


export {openListenAllModal, changeBirdType, changeListenAllBirdIndex}