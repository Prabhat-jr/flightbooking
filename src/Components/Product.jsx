import React from 'react';
import {Card, CardMedia, CardContent,CardActions,Typography,IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyle from "./style";

const  Product=({product}) =>{
    const classes =useStyle();
    return (
        <Card className={classes.root}>
           <CardMedia className={classes.media} image="" title={product.name}/>
           <CardContent >
             <div className={classes.content}>
              <Typography varient="h5" gutterBottom>
                 {product.name}
              </Typography>
              <Typography varient="h5">
                 {product.name}
              </Typography>
              <Typography varient="h2" color="textSecondary">
                 {product.description}
              </Typography>
               <CardActions disableSpacing className={classes.CardAction}>
                 <IconButton aria-label="Add to Cart">
                     <AddShoppingCart/>
                 </IconButton>
               </CardActions>
             </div>
           </CardContent>
        </Card>
    )
}

export default Product
