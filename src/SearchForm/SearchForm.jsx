import React, { useState,useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataParentContext } from '../App';
import "./SearchForm.css"
const SearchForm = () => {
    const contextData = useContext(DataParentContext)
    const { setData, data } = contextData;

    const [status, setStatus] = useState("");
    const [types, setTypes] = useState("");
    const [original, setOriginal] = useState("");
    const searchFun=()=>{
        const filterted =data.filter((item)=>{
            const launch = JSON.stringify(new Date(item.original_launch))
            console.log("original_launch",launch,typeof(launch))
            return item.status.toLowerCase().includes(status) && item.type.toLowerCase().includes(types) && launch.includes(original)
        })
        setData(filterted)
    }
    const originalfun =(e)=>{
        console.log(e.target.value,"original",typeof(e.target.value))
        setOriginal(e.target.value)
    }

    return (

        <div className='main'>
            <h2 style={{ textAlign: "center" }}>Search  Capsule Data</h2>

            <div className='searchForm'>

                <div className='textFeild'>
                    <TextField id="outlined-basic" label="Check Capsule Status" variant="outlined" onChange={(e)=>setStatus(e.target.value) } />
                    <TextField id="outlined-basic" label="Check Capsule Type" variant="outlined" onChange={(e)=>setTypes(e.target.value) }/>
                    <TextField id="outlined-basic" label="Check Capsule Original Launch" variant="outlined" onChange={originalfun}/>
                </div>

                <Button variant="outlined" onClick={searchFun}>Search</Button>


            </div>
        </div>
    )
}

export default SearchForm
