export default function putRandomNumbersToArray(arr) {
    const getRandomNumber = () => Math.floor(Math.random() * 6);

    return arr.map(subArr => {
        let random = getRandomNumber();
        return subArr.map(innerArr => {
            if ((innerArr.id - 1) === random) {
                innerArr.rightAnswer = true;
            }
            return innerArr
        })
    })
}
