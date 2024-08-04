import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Typography, Paper, Box, Container, CircularProgress } from '@mui/material';
import theme from '../styles/theme';
import CustomStepper from '../components/CustomStepper';
import UploadBox from '../components/UploadBox';
import NavigationButtons from '../components/NavigationButtons';
import Iris_2 from '../images/Iris_2.png';

function UploadPage() {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBack = () => {
    navigate('/');
  };

  const handleContinue = () => {
    // Check if a file has been uploaded
    if (uploadedFile) {
      // You might want to show a loading indicator here
      setIsLoading(true);
  
      // Simulate file processing or API call
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to the next page, e.g., analysis page
        navigate('/analyze');
      }, 2000); // Simulating a 2-second process
    } else {
      // If no file is uploaded, show an error message
      setErrorMessage('Please upload a file before continuing.');
    }
  };

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setErrorMessage(''); // Clear any previous error messages
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex',
        height: '100vh', 
        overflow: 'hidden'
      }}>
        <Box 
          component="img"
          src={Iris_2}
          alt="Iris_2"
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
            pl: 15,
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
              bgcolor: 'background.default',
            }}
          >
            <CustomStepper />
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Let's begin <span role="img" aria-label="waving hand">👋</span> 
              </Typography>
            </Box>
            <UploadBox onFileUpload={handleFileUpload} />
            {isLoading && <CircularProgress sx={{ alignSelf: 'center', mt: 2 }} />}
            {errorMessage && <Typography color="error" sx={{ mt: 2 }}>{errorMessage}</Typography>}
            <br/>
            <NavigationButtons onBack={handleBack} onContinue={handleContinue} />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default UploadPage;