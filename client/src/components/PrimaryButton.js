import React from "react"
import '../App.css'
const PrimaryButton =({className, value,event}) =>{
    //Props is nothing but a property which brings data from its parent component
    return (
        <button className={className} >{value}</button>
    )
}

export default PrimaryButton