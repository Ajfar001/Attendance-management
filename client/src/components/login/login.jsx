import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { getToken } from "./api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const response = await getToken(username, password);
    if (response.token) {
      sessionStorage.setItem("token", response.token);
      window.location.href = "/";
    } else {
      setError(response.invalid);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#7C7BAD",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        sx={{
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "#fff",
          width: "50%",
        }}
      >
        <h2 style={{ color: "#7C7BAD" }}>Login</h2>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ width: "100%", marginBottom: "1rem" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "100%", marginBottom: "1rem" }}
        />
        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{ backgroundColor: "#7C7BAD", color: "#fff", width: "100%" }}
        >
          Login
        </Button>
      </Grid>
    </Box>
  );
}

export default Login;
