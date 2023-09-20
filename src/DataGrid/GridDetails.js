import React, { useContext, useEffect, useState } from 'react'
import { DataParentContext } from '../App';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './grid_Data.css';
import ModalData from './ModalData';


const GridDetails = ({ open, setOpen, item, handleClose }) => {
    const {singleData, setSeingleData} = useContext(DataParentContext)
    function moreFun(para) {
         setSeingleData(para)
        setOpen(true)
        console.log("para",para)
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className='itemGrid' key={item.capsule_serial}>
                <CardMedia className='cardmediaIMg'
                    sx={{ height: 140 }}
                    image="https://scitechdaily.com/images/rendering-orion-space-capsule.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <strong>Capsule Serial : </strong>{item.capsule_serial}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Status : </strong>{item.status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>type : </strong>{item.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>moreFun(item)}>More</Button>
            </CardActions>
        </Card>
        
        </div >
    )
}

export default GridDetails