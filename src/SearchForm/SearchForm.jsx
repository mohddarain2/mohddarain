import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchForm.css"
const SearchForm = () => {
    return (
        <div className='main'>
            <h2 style={{ textAlign: "center" }}>Search  Capsule Data</h2>

            <div className='searchForm'>

                <div className='textFeild'>
                    <TextField id="outlined-basic" label="Check Capsule Status" variant="outlined" />
                    <TextField id="outlined-basic" label="Check Capsule Type" variant="outlined" />
                    <TextField id="outlined-basic" label="Check Capsule Original Launch" variant="outlined" />
                </div>
                
                    <Button variant="outlined">Search</Button>
                

            </div>
        </div>
    )
}

export default SearchForm
