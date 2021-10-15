import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid  from "@material-ui/core/Grid";
import RevSec from "./../../Assets/images/rEVERSIBLE_SECTIONAL.jpeg";
import LivingRoomSet from "./../../Assets/images/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg";
import QueenSet from "./../../Assets/images/khloe-arledge-QDMmnuvKGGU-unsplash.jpg";
import { useStyles } from "./Home-styles"
  
const ResponsiveCarousel = (props) => {
    const classes = useStyles(props);
    return (
	<Grid className={classes.carousel}>
		<Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} >
			<div className={classes.slide}>
				<img style={{width: "100%"}} src={`${RevSec}`} alt="Reversible Gray Sectional" />
			</div>
			<div className={classes.slide}>
				<img  src={`${LivingRoomSet}`} alt="livingroom set"/>
			</div>
			<div className={classes.slide}>
				<img  src={`${QueenSet}`} alt="Queen Bedroom Set"/>
			</div>
		</Carousel>
	</Grid>
  );
}

export default ResponsiveCarousel;