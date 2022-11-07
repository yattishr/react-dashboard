import {
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";

import { ColorModeContext, tokens } from "../../theme";
import { Header } from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Reportstastic ~ Line Chart" />
        <Box height="75vh">
            <LineChart />
        </Box>
    </Box>
  );
};

export default Line;