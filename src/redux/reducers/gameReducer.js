const initialState = {
    listenAll: {
        isInterfaceOpen: false,
        listenAllBirdType: 0,
        currentBirdIndex: 0
    },
    gameLogic: {
        isGameStarted: false,
        isGameFinished: false,
        isPlaying: false,
        gameStage: 0,
        gameBirdSelected: null,
        wormsNumber: 5,
        showWinMessage: false
    },
    score: {
        totalScore: 0,
        tries: 0,
        worms: 5,
        maxRoundScore: 5,
        stagesScore: new Array(6).fill(0),
        showScore: false
    }
}

function GameReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_LISTEN_ALL_MODAL":
            return {
                ...state,
                listenAll: {
                    ...state.listenAll,
                    isInterfaceOpen: !state.listenAll.isInterfaceOpen
                }
            }
        case "CHANGE_BIRD_TYPE":
            return {
                ...state,
                listenAll: {
                    ...state.listenAll,
                    listenAllBirdType: action.payload,
                    currentBirdIndex: action.zeroIndex
                }
            }
        case "CHANGE_LISTEN_ALL_BIRD_INDEX":
            return {
                ...state,
                listenAll: {
                    ...state.listenAll,
                    currentBirdIndex: action.payload
                }
            }
        case "START_GAME":
            return {
                ...state,
                gameLogic: {
                    ...state.gameLogic,
                    isGameStarted: true,
                    isPlaying: true
                },
                listenAll: {
                    ...state.listenAll,
                    isInterfaceOpen: false
                }
            };
        case "CHANGE_GAME_BIRD_INDEX":
            return {
                ...state,
                gameLogic: {
                    ...state.gameLogic,
                    gameBirdSelected: action.payload
                }
            }
        case "WRONG_BIRD_SELECTED":
            return {
                ...state,
                score: {
                    ...state.score,
                    worms: state.score.worms - action.payload,
                    tries: state.score.tries + action.payload
                }
            }
        case "RIGHT_BIRD_SELECTED":
            return {
                ...state,
                gameLogic: {
                    ...state.gameLogic,
                    showWinMessage: !state.gameLogic.showWinMessage,
                    isPlaying: false
                },
                score: {
                    ...state.score,
                    stagesScore: action.score,
                    totalScore: action.totalScore
                }
            }
        case "GO_TO_NEXT_ROUND":
            return {
                ...state,
                gameLogic: {
                    ...state.gameLogic,
                    gameStage: state.gameLogic.gameStage + action.addStage,
                    gameBirdSelected: null,
                    wormsNumber: 5,
                    showWinMessage: false,
                    isPlaying: true
                },
                score: {
                    ...state.score,
                    tries: 0,
                    worms: 5
                }
            }
        case "SET_GAME_FINISHED":
            return {
                ...state,
                gameLogic: {
                    ...state.gameLogic,
                    isGameFinished: true
                }
            }
        case "START_AGAIN":
            return {
                ...state,
                gameLogic: {
                    isGameStarted: true,
                    isGameFinished: false,
                    isPlaying: true,
                    gameStage: 0,
                    gameBirdSelected: null,
                    wormsNumber: 5,
                    showWinMessage: false
                },
                score: {
                    totalScore: 0,
                    tries: 0,
                    worms: 5,
                    maxRoundScore: 5,
                    stagesScore: new Array(6).fill(0),
                    showScore: false
                }
            }
            default: return state
    }
}

export default GameReducer
