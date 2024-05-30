import React from "react";

const Select = (props) => {
    return (
        <select onChange={(event)=>props.onChangeSelect(event.target.value)} value={props.value}>
            <option value='MALAYALAM'>Malayalam</option>
            <option value='HINDI'>Hindi</option>
            <option value='TAMIL'>Tamil</option>
            <option value='ENGLISH'>English</option>
        </select>
    )   
}

export default Select;