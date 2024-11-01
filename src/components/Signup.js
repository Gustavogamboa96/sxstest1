import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react'

export default function Signup() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      // border:  '2px solid #000',
      boxShadow: 24,
      p: 4,
      color: '#3fea4b',
      backgroundColor: '#212121',
      outline: 'none',
    };

    useEffect(()=>{
        handleOpen();
    }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2" 
          sx={{
              fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
              width: '100%', // Adjust the width as needed
              margin: 'auto', // Center the TextField horizontally  
              paddingBottom: '2vh'
          }}>
            Subscribete a nuestro newsletter!
          </Typography>
          <TextField  
            id="outlined-basic" 
            label="Email" 
              variant="outlined"
              InputLabelProps={{
                style: { color: '#3fea4b' },
              }}
              sx={{
                '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
                  borderColor: '#3fea4b',
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#3fea4b', /* Replace 'green' with your desired color */
                },
                width: '100%', // Adjust the width as needed
                margin: 'auto', // Center the TextField horizontally
                paddingBottom: '2vh'
              }}
          />
          </Box>
        <Box>
            <Button onClick={handleClose} variant="contained" color="primary"
              sx={{
                fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                backgroundColor: '#3fea4b',
                color: 'black',
                width: '100%', // Adjust the width as needed
                margin: 'auto', // Center the TextField horizontally
                '&:hover': {
                  backgroundColor: 'black',
                  color: '#3fea4b',
                },
              }}>
              Subscribir
          </Button>
        </Box>
        </Box>
      </Modal>
    </div>
  )
}
