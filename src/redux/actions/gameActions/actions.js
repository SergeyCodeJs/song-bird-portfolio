import {countStageScore, countTotalScore} from '../../../utils/countScore'

function startGame() {
    return {type: "START_GAME"}
}

function changeGameBirdIndex(e, index) {
    return {type: "CHANGE_GAME_BIRD_INDEX", payload: index}
}

function wrongBirdSelected(decreaseNumber) {
    return {type: "WRONG_BIRD_SELECTED", payload: decreaseNumber}
}

function rightBirdSelected(e, index, score, totalScore) {
    return {type: "RIGHT_BIRD_SELECTED", payload: index, score, totalScore}
}

function goToNextRound(addStage) {
    return {type: "GO_TO_NEXT_ROUND", addStage}
}

function setGameFinished() {
    return {type: "SET_GAME_FINISHED"}
}

function startAgain() {
  return {type: "START_AGAIN"}
}

function onAnswerTry(e, index) {
    return (dispatch, getState) => {
        dispatch(changeGameBirdIndex(e, index));

        const {birdsData, game} = getState();
        const {
            score: {
                maxRoundScore,
                tries,
                stagesScore
            }
        } = game;
        const {
            gameLogic: {
                gameStage,
                gameBirdSelected
            }
        } = game;
        const {data} = birdsData;
        const rightAnswer = data[gameStage][gameBirdSelected].rightAnswer;

        const stagesScoreArray = countStageScore(maxRoundScore, tries, stagesScore, gameStage);
        const totalScore = countTotalScore(stagesScoreArray);

        if (rightAnswer) {
            dispatch(rightBirdSelected(e, index, stagesScoreArray, totalScore))

            if (gameStage >= 5) {
                dispatch(setGameFinished());
            }

        } else {
            dispatch(wrongBirdSelected(1))
        }
    }
}

export {
    startGame,
    wrongBirdSelected,
    changeGameBirdIndex,
    rightBirdSelected,
    onAnswerTry,
    goToNextRound,
    startAgain
}