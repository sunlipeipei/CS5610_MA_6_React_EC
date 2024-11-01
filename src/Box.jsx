// import { useState } from "react"
// import { useContext } from 'react';
import { useContext } from 'react'
import './Box.css'
import { BoxGroupContext } from './BoxGroupContext'

export default function Box({index}) {
    const {isSelectedState, setIsSelected} = useContext(BoxGroupContext);

    const className = isSelectedState[index] ? 'defaultBox blackBox' : 'defaultBox';

    return (
        <div className={className} onClick={()=>setIsSelected(index)}></div>
    )

}
