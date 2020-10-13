import React from 'react'

function renderData(data, Component, options) {
    if (typeof data === 'string') {
        return <Component content={data}/>
    }

    return data.map((text, index) => {
        return <Component key={index} index={index} content={text} options={options}/>
    })
}

export {renderData}