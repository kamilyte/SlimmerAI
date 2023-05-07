import React, {Component, useState, useRef} from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const StarRating = () => {
    const [value, setValue] = useState(0);

    return (
        <Rating
          name="simple-controlled"
          max={3}
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue)
            setValue(newValue);
            console.log(value);
          }}
        />
    );
}

export default StarRating