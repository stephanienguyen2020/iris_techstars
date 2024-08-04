import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Paper, Button, Stepper, Step, StepLabel, StepConnector, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import irisImage from './images/iris1.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4',
    },
    grey: {
      main: '#BDBDBD',
    }
  },
});

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.MuiStepConnector-alternativeLabel`]: {
    top: 15, // Adjust this value to align the connector with the center of the circle
  },
  [`&.MuiStepConnector-active`]: {
    [`& .MuiStepConnector-line`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.MuiStepConnector-completed`]: {
    [`& .MuiStepConnector-line`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .MuiStepConnector-line`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const steps = ['Upload', 'Analyze', 'Detect', 'Review', 'Publish'];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex',
        height: '100vh', 
        overflow: 'hidden'
      }}>
        <Box 
          component="img"
          src={irisImage}
          alt="Iris Privacy First"
          sx={{ 
            width: 'auto',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Container 
          maxWidth={false} 
          disableGutters 
          sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            pl: 15, // Space between image and content
            pr: 15,
            pt: 15,
            pb: 2,
          }}
        >
          <Paper 
            elevation={0} 
            sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
              bgcolor: 'background.default', // To match the background color
            }}
          >
            <Stepper activeStep={0} alternativeLabel connector={<ColorlibConnector />}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    StepIconProps={{
                      sx: {
                        width: 35,
                        height: 35,
                        color: index === 0 ? 'primary.main' : 'grey.main',
                        '&.Mui-active': {
                          color: 'primary.main',
                        },
                        '&.Mui-completed': {
                          color: 'primary.main',
                        },
                        '& .MuiStepIcon-text': {
                          fontSize: '.7rem', // Adjust the font size of the number
                        },
                      },
                    }}
                  >
                    <Typography
                      color={index === 0 ? 'primary' : 'grey.main'}
                      fontWeight={index === 0 ? 'bold' : 'normal'}
                    >
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <br />
            <br />
            <br />
            <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
              Let's begin <span role="img" aria-label="waving hand">👋</span> 
            </Typography>
            <br />
            <br />
            <Box sx={{ border: '2px dashed #ccc', borderRadius: '10px', p: 10, textAlign: 'center' }}>
              <CloudUploadIcon fontSize="large" />
              <br />
              <Typography>Drag & Drop or Choose file to upload</Typography>
              <Typography variant="caption">Select .mp4 or .mov file</Typography>
              <br />
              <Button variant="contained" sx={{ mt: 2 }}>
                Choose File
              </Button>
            </Box>
            <br />
            <br />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: 'grey.400',
                  color: 'text.primary',
                  borderRadius: '50px',
                  padding: '8px 8px',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  '&:hover': {
                    borderColor: '#000000',
                    bgcolor: 'transparent',
                  },
                }}
              >
                Back
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#000000',
                  color: 'common.white',
                  borderRadius: '50px',
                  padding: '8px 8px',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  '&:hover': {
                    bgcolor: 'grey.800',
                  },
                }}
              >
                Continue
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;