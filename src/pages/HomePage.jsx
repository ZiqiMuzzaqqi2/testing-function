import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const HomePage = () => {
  return (
    <>
      <AppBar sx={{ color: "primary" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          p={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Home Page</Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue",
              ":hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </AppBar>
      <Container
        maxWidth="md"
        sx={{
          display: "grid",
          gap: 10,
          py: 8,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Typography variant="h3">Welcome to Home Page</Typography>
        <Typography variant="h6">
          This page is used to test your knowledge of React.js and Material UI
          technology.
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{ 
                width: "20%", 
                bgcolor: "blue",
                textTransform: "none", 
                ":hover": {
                  bgcolor: "primary.light",
                },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
