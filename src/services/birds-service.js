import {birdsDataWithRightAnswers} from '../assets/data/birds'

export default class BirdsService {
  data = birdsDataWithRightAnswers;

  async getBirds() {
    const birds = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 2000)
    })
    
    return await birds
  }
}