import { Box } from "@mui/material";
import { Header } from "../../components/Header";

const Calendar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CALENDAR" subtitle="Reportstastic ~ Calendar" />
      </Box>
    </Box>
  );
};

export default Calendar;
