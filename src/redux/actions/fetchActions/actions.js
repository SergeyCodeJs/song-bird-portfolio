function dataRequest() {
  return {
    type: "FETCH_DATA_REQUEST"
  }
}

function dataLoaded(data) {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data
  }
}

function dataError() {
  return {
    type: "FETCH_DATA_ERROR"
  }
}

export {dataRequest, dataLoaded, dataError}