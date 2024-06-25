import React, { useState } from 'react'
import './FilterbyPrice.scss'

const FilterByPrice = ({onChange}) => {
    const [values,setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handleChange = (event) => {
        const {name,value} = event.target
        setValues((prevValues) => ({
            ...prevValues,
            [name]:value,
        }))
    }

    const handleSubmit = () => {
        console.log(values)
    }
  return (
    <div>
        <p>Filter Price</p>
        <span>From </span>
        <input type="number" name='salePrice_gte' value={values.salePrice_gte} onChange={handleChange}/>
        <span> to </span>
        <input type="number" name='salePrice_lte' value={values.salePrice_lte} onChange={handleChange}/>
        <button onClick={handleSubmit}>Apply</button>
    </div>
  )
}

export default FilterByPrice