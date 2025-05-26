import { AppBar, Box, Typography } from "@mui/material";

import StudentRegister from "./components/StudentRegister";

export default function App() {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "secondary.main",
          color: "primary.main",
          typography: "h6",
          textAlign: "left",
          p: 2,
          pl: 3,
        }}
      >
        <Typography variant="h6">Student Registry</Typography>
      </AppBar>

      <Box
        sx={{
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "100vh",
          pt: 4,
        }}
      >
        <Box sx={{ width: "90%" }}>
          <StudentRegister />
        </Box>
      </Box>
    </>
  );
}
