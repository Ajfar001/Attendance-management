import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#7C7BAD",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" color="white" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="h5" color="white" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
