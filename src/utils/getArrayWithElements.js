import React from 'react'

function getArrayWithElements(num, Component) {
    return new Array(num)
        .fill(num)
        .map((el, index) => <Component key={index}/>);
}

export default getArrayWithElements