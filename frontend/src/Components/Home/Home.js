import React from "react";
import {Link, withRouter} from "react-router-dom";
import {useSelector,} from "react-redux";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Carousel from "./../../Components/Home/Carousel";
import livrm from "./../../Assets/images/living_room.jpg";
import diningrm from "./../../Assets/images/dining_room.jpg";
import bedrm from "./../../Assets/images/khloe-arledge-QDMmnuvKGGU-unsplash.jpg";
import bnkbed from "./../../Assets/images/bunk_bed.jpg";
import mattress from "./../../Assets/images/mattress.jpg";
import recliners from "./../../Assets/images/recliners.jpeg";
import { useStyles } from "./Home-styles";
import Button from "./../UI/Button/Button";
import { AddShoppingCartOutlined, TouchAppOutlined,  MarkunreadMailboxOutlined } from "@material-ui/icons";
import {savings, categories } from "./../../Util/data";

// Material UI breakpoints
// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

const Home = (props) => {
  const classes = useStyles(props);
  const products = useSelector(state => state.product.products);

  const loading = useSelector(state => state.product.loading);
  const error = useSelector(state => state.product.error);
console.log("products", products)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //  dispatch(getProducts())
   

  //   return () => {
  //     console.log("unsubscribe")
  //   }
  // },[dispatch]);

  const cat = [
    {
      name: "Living Room",
      image: livrm,
    },
    {
      name: "Dining Room",
      image: diningrm,
    },
    {
      name: "Bedrooms",
      image: bedrm,
    },
    {
      name: "Bunkbeds",
      image: bnkbed,
    },
    {
      name: "Mattresses",
      image: mattress,
    },
    {
      name: "Recliners",
      image: recliners,
    },
  ]
    return (
        <Grid className={classes.root}>
          <Carousel/>
          <Grid className={classes.financing}>
            <Typography className={classes.financingText}>See if you prequalify for our special financing</Typography>
            <Button
              aria-label="finance"
              className="squareBtn" 
              buttonStyle="submitButton"
            > prequalify now</Button>
          </Grid>
          <Grid container className={classes.main}>
            <Grid item className={classes.section}>
                <Typography className={classes.heading} component="h1" variant="h1">Shop By Department</Typography>
                <Grid className={classes.departmentsWrapper}>
                  {error || loading ? <CircularProgress/>  : cat.map((item, key) => (
                      <Grid className={classes.department} key={key}>
                        <Grid className={classes.departmentImageWrapper}>                      
                          <img className={classes.image} src={item.image} alt={item.name}/>
                        </Grid>
                        <Link className={classes.link} to={`/product/category/${item.name}`}>
                           <Typography variant="button" display="block" className={classes.title}>{item.name}</Typography>  
                        </Link> 
                      </Grid>
                
                  ))}
                </Grid>
              </Grid>



            <Grid item className={classes.howItWorks}>
              <Typography component="h1" variant="h1" className={classes.heading}>How We Work</Typography>
              <Grid className={classes.steps}>
                <Grid className={classes.step}>
                  <Grid className={classes.stepNum}>
                    <TouchAppOutlined className={classes.icon}/>
                  </Grid>
                  <Typography style={{minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center"}} className={classes.stepHeader} component="h3" varient="h3">Select Your Furniture</Typography>
                  <Typography className={classes.stepText} component="p" >Browse our selection of stylish furniture. We have many options available to fit every style, budget, and preference.</Typography>                      
                </Grid>


                <Grid className={classes.step}>
                <Grid className={classes.stepNum}>
                  <AddShoppingCartOutlined className={classes.icon}/>
                </Grid>  
                  <Typography className={classes.stepHeader} component="h3" varient="h3">Add items to your Cart</Typography>  
                  <Typography className={classes.stepText} component="p" variant="body1"> After making a decision on your brand new piece of furniture add your item to your cart and proceed to booking.</Typography>                      
                  </Grid>


                <Grid className={classes.step}>
                <Grid >
                    <MarkunreadMailboxOutlined className={classes.icon}/>
                  </Grid> 
                  <Typography className={classes.stepHeader} component="h3" varient="h3">receive confirmation </Typography>     
                  <Typography className={classes.stepText} component="p" variant="body1">We will provide you with available delivery slots by email; in most cases we can deliver the very  next day. You pay for your product on delivery with either cash or card. </Typography>          
                </Grid>
              </Grid>
            </Grid>

            {/* SAVINGS SECTION */}
            <Grid className={classes.savingsSection}> 
              <Typography component="h1" variant="h1" className={`${classes.heading, classes.savingsHeader}`}> <Typography component="span" varient="span" className={classes.span}>it's savings weather</Typography> TREAT YOURSELF TO THESE DEALS </Typography>
              <Grid className={classes.savingsWrapper}>
                {savings.map(saving => (
                  <Grid key={saving.title} className={classes.savingsImageWrapper}>
                    <img src={saving.image} alt={saving.title} className={classes.savingsImage}/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            <Grid className={classes.hiringWrapper}>
              <Typography component="h1" variant="h1" className={classes.hiringHeading}>We're growing - <Typography component="span" variant="span" className={classes.span}>come join us on the journey!</Typography>
              </Typography>
              <Button
              aria-label="now hiring"
              className="squareBtn" 
              buttonStyle="linkButton"
              onClick="/chfagent"
            > Learn More</Button>
            </Grid>

            {/* <Typography className={classes.heading} component="h1" variant="h1">Welcome to Family Home Furniture</Typography>
            <Typography className={classes.paragraph} component="p" variant="body1">
            We pride ourselves on providing fast, affordable and reliable furniture across Central Texas. We believe that leasing furniture should be a thing of the past. Our financing option is hassle free. 
             Owning your furniture outright is easy with us. <a aria-label="Apply Now" target="_blank" rel="noopener noreferrer" className={classes.link} href="https://consumer.snapfinance.com/#/?mid=490237487">Apply Now.</a> 
              Currently we service the following areas, the Greater Austin area, Houston, Kileen, Dallas, and Waco with plans to expand into more cities in the up coming months. 

              We also offer an exciting freelance opportunity to make some extra money online as a Family Home Furniture sales agent. 
              These freelance positions can be done from home anywhere in the United States. 
               We welcome any and everyone willing to go the extra mile to provide quality customer service and sales.
              Interested applicants can <Link to="/chfagent" className={classes.link}>find out more information</Link> on the Family Home Furniture sales agent page.
            </Typography> */}
        
    

           
            {/* <Grid item className={classes.centerSection}>
              <Typography  component="h2" variant="h2" onClick={() => props.history.push("/chfagent")}>Become An Agent</Typography>
              <Typography className={classes.paragraph} style={{textTransform: "none"}} component="p" variant="body1">
                Anyone can sign up to be a Familys Home Furniture sales agent. We welcome any and everyone willing to go the extra mile to provide quality customer service and sales. To learn more visit our <Link className={classes.link} to="/chfagent">CHF sales agent page.</Link>
            </Typography>
            </Grid> */}
          </Grid>
        </Grid>
    )
};

export default withRouter(Home);