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
import GridDetails from './GridDetails';
import ModalData from './ModalData';


const DataGrid = () => {
  const contextData = useContext(DataParentContext)
  const { setData, data } = contextData;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
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
        return <GridDetails open={open} setOpen={setOpen} item={item} handleClose={handleClose}/>

      })
      }
      {open &&  <ModalData open ={open} handleClose={handleClose} setOpen={setOpen} />}
    </div>
  )
}

export default DataGrid;