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


const DataGrid = () => {
  const contextData = useContext(DataParentContext)
  const { setData, data } = contextData;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const getApi = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/capsules");
    const result = await response.json();
    setData(result)
  }
  useEffect(() => {
    getApi();
    console.log(data)
  }, []);
  return (
    <div className='dataGrid'>
      {data.length > 0 && data.map((item, index) => {
        return <Card sx={{ maxWidth: 345 }} className='itemGrid' key={index}>
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
            <Button size="small" onClick={() => { setOpen(true) }}>More</Button>
          </CardActions>
        </Card>

      })
      }
      {open && <Dialog
        open={open}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <CardActions style={{position:"absolute",paddingLeft:"180px",top:"-10px",left:"10px"}}>
      <Button size="small" onClick={() => { setOpen(false) }}>❌</Button>
    </CardActions>
        <div className='dataGrid' style={{width:"100%"}}>
          <Card sx={{ maxWidth: 345 }} className='itemGrid' >
            <CardMedia className='cardmediaIMg'
              sx={{ height: 140 }}
              image="https://scitechdaily.com/images/rendering-orion-space-capsule.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>Capsule Serial : </strong>
              </Typography>
              <Typography gutterBottom variant="h5" component="div">

              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Status : </strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>type : </strong>
              </Typography>
            </CardContent>

          </Card>
        </div>
      </Dialog>}
    </div>
  )
}

export default DataGrid;