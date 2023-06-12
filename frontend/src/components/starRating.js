import React, {Component, useState, useRef} from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const StarRating = (id, rating) => {
    const [value, setValue] = useState(0);
    var rate = 0; // set default as current lead rating

    const onRatingChange = (newValue) => {
      rate = newValue //use rate instead of value because value doesnt update
      setValue(rate)
      //add hook to update rating
    }

    return (
        <Rating
          name="simple-controlled"
          max={3}
          value={value}
          onChange={(event, newValue) => {
            onRatingChange(newValue)
          }}
        />
    );
}

export default StarRating