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
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Reportstastic ~ Pie Chart" />
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
  );
};

export default Pie;