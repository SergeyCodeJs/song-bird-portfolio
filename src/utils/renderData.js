import React from 'react'

function renderData(data, Component) {
    if (typeof data === 'string') {
        return <Component content={data}/>
    }

    return data.map((text, index) => {
        return <Component key={index} index={index} content={text}/>
    })
}

export {renderData}