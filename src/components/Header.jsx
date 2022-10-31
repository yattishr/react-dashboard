import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme"

import React from 'react'

export const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
  return (
    <Box mb="30px">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px"}}>
            {title}
        </Typography>
        
        <Typography variant="h5" color={colors.greenAccent[400]}>
            {subtitle}
        </Typography>

    </Box>
  )
}
