import React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Login from "./Login";
import SignUp from "./SignUp";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const SignInOut = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "20px auto" };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Sign In"  />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp handleChange={handleChange}/>
      </TabPanel>
    </Paper>
  );
};

export default SignInOut;
