import { Box, Button, Container, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LoginPage = () => {
  return (
    <Container
      sx={{
        py: 8,
        textAlign: "center",
        justifyItems: "center",
        // bgcolor: "red",
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        Register
      </Typography>
      <Box
        sx={{
          width: "50%",
        //   bgcolor: "blue",
          display: "grid",
          justifyItems: "center",
          gap: 2,
        }}
      >
        <TextField sx={{ width: "50%" }} variant="filled" label="Full Name" />
        <TextField sx={{ width: "50%" }} variant="outlined" label="Email" />
        <TextField sx={{ width: "50%" }} variant="standard" label="Password" />
        <TextField
          sx={{ width: "50%" }}
          variant="outlined"
          label="Confirm Password"
        />
      </Box>
      <Button
        sx={{ 
            mt: 4, 
            textTransform: "none",
            bgcolor: "primary.main",
            ":hover": { bgcolor: "primary.light" }
        }}
        variant="contained"
        startIcon={<LoginIcon />}
      >
        Sign In
      </Button>
    </Container>
  );
};

export default LoginPage;
