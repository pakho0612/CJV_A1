
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function Hero(props) {
    var responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        }
      };
    return(
        <Box >
            { props.moviesTV.length>0?(
            <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={3000} transitionDuration={500} rewind={true} rewindWithAnimation={true}>
                { 
                    props.moviesTV.map((mv, index)=>(
                        <div key={index}>
                        <img src={mv.poster} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', background: 'cover'}} />
                        </div>)
                    )
                }
            </Carousel>
            ):(
                <div>
                    <CircularProgress />
                    Loading</div>
            )}
        </Box>
    );
}

export default Hero;