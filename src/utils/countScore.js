function countStageScore(maxRoundScore, tries, stageScoreArray, gameStage) {
  const stageScore = maxRoundScore - tries <= 0 ? 0 : maxRoundScore - tries;
  const stagesScoreCopy = [...stageScoreArray];
  stagesScoreCopy[gameStage] = stageScore;
  return stagesScoreCopy
}

function countTotalScore(stagesScoreArray) {
  const stagesScoreCopy = [...stagesScoreArray];
  let totalScore = stagesScoreCopy.reduce((acc,curr) => acc+curr);
      totalScore = totalScore <= 0 ? 0 : totalScore;
  return totalScore
}

export {countStageScore, countTotalScore}