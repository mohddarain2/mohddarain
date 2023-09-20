import React, { useContext, useEffect, useState } from 'react'
import { DataParentContext } from '../App';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './grid_Data.css';
import { Dialog } from '@mui/material';


const ModalData = ({open,handleClose,setOpen,item}) => {
  const {singleData, setSeingleData} = useContext(DataParentContext)

  console.log("singleData",singleData)
    return (
        <div>
        {open && <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <CardActions >
              <Button size="small" onClick={() => { setOpen(false) }}>❌</Button>
            </CardActions>
            <div className='dataGrid' >
              <Card sx={{ maxWidth: 345 }} className='itemGrid' >
                <CardMedia className='cardmediaIMg'
                  sx={{ height: 140 }}
                  image="https://scitechdaily.com/images/rendering-orion-space-capsule.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>Capsule Serial : {singleData.capsule_serial}</strong>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                  landings: {singleData.landings}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                  original launch: {singleData.original_launch}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Status : {singleData.status}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>type :{singleData.type} </strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Details :{singleData.details} </strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>missions name :{singleData.missions[0].name} </strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>missions flight :{singleData.missions[0].flight} </strong>
                  </Typography>
                  
                </CardContent>
    
              </Card>
            </div>
          </Dialog>
          }
    </div>
  )
  
}

export default ModalData