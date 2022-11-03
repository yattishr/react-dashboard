import { Box, IconButton, Typography, TextField, Button, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


import { ColorModeContext, tokens } from "../../theme";
import { Header } from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Reportstastic ~ FAQs Page" />

      {/* FAQ Question 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}> 
          <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem animi voluptatibus! 
            Impedit iusto corporis nesciunt consequuntur aspernatur repellendus? Ullam, qui earum nisi nobis magnam cupiditate 
            perspiciatis ipsa libero consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* FAQ Question 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}> 
          <Typography color={colors.greenAccent[500]} variant="h5">
              Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem animi voluptatibus! 
            Impedit iusto corporis nesciunt consequuntur aspernatur repellendus? Ullam, qui earum nisi nobis magnam cupiditate 
            perspiciatis ipsa libero consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>      

      {/* FAQ Question 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}> 
          <Typography color={colors.greenAccent[500]} variant="h5">
              Just another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem animi voluptatibus! 
            Impedit iusto corporis nesciunt consequuntur aspernatur repellendus? Ullam, qui earum nisi nobis magnam cupiditate 
            perspiciatis ipsa libero consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* FAQ Question 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}> 
          <Typography color={colors.greenAccent[500]} variant="h5">
              A very important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem animi voluptatibus! 
            Impedit iusto corporis nesciunt consequuntur aspernatur repellendus? Ullam, qui earum nisi nobis magnam cupiditate 
            perspiciatis ipsa libero consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>      

      {/* FAQ Question 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}> 
          <Typography color={colors.greenAccent[500]} variant="h5">
              This is an important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem animi voluptatibus! 
            Impedit iusto corporis nesciunt consequuntur aspernatur repellendus? Ullam, qui earum nisi nobis magnam cupiditate 
            perspiciatis ipsa libero consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>      

      {/* FAQ Question 6 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}> 
          <Typography color={colors.greenAccent[500]} variant="h5">
              My last important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem animi voluptatibus! 
            Impedit iusto corporis nesciunt consequuntur aspernatur repellendus? Ullam, qui earum nisi nobis magnam cupiditate 
            perspiciatis ipsa libero consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>      

    </Box>
  );
};

export default FAQ;
