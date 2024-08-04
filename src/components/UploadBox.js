import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function UploadBox({ onFileUpload }) {  // Add onFileUpload as a prop here
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileUpload) {  // Check if onFileUpload is provided
      onFileUpload(file);
    }
  };

  return (
    <Box sx={{ border: '2px dashed #ccc', borderRadius: '10px', p: 10, textAlign: 'center' }}>
      <CloudUploadIcon fontSize="large" />
      <br />
      <Typography>Drag & Drop or Choose Files to Upload</Typography>
      <Typography variant="caption">Select .mp4 or .mov files</Typography>
      <br />
      <Button 
        variant="contained" 
        component="label"
        sx={{ 
          mt: 2,
          bgcolor: '#000000',
          color: 'common.white',
          borderRadius: '50px',
          padding: '10px 10px',
          paddingLeft: '25px',
          paddingRight: '25px',
          '&:hover': {
            bgcolor: 'grey.800',
          },
        }}>
        Browse Files
        <input
          type="file"
          hidden
          accept=".mp4,.mov"
          onChange={handleFileChange}
        />
      </Button>
    </Box>
  );
}

export default UploadBox;