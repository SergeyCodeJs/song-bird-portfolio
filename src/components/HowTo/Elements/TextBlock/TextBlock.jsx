import React from 'react'
import classes from './TextBlock.module.scss'

export default function TextBlock({content}) {
    const {text_content} = classes;

    return (
        <p className={text_content}>{content}</p>
    )
}
