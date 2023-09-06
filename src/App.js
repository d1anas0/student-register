import { AppBar, Box } from "@mui/material";
import React from "react";

export default function App() {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#2546ce",
          color: "#ffffff",
          typography: "h6",
          textAlign: "left",
        }}
        style={{ padding: 10, paddingLeft: 20 }}
      >
        Education Horizons Student Registry
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        style={{
          height: "100vh",
          padding: "6%",
        }}
        backgroundColor="#17e07d"
        align="center"
      >
        {/* <StudentRegistry /> */}
      </Box>
    </>
  );
}
