import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CircleChart, RenderBarChart } from "../chart";

export default function Charts(){
    return(
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <RenderBarChart/>
            <CircleChart/>
        </Box>
    )
}