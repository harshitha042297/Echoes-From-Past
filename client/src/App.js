import React,{useState,useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
// Dispatches action
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts';
import memories from './images/memories2.png';

const App= () =>{
    const [currentId,setCurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
        // Dispatch action getPosts
        dispatch(getPosts());
    },[currentId,dispatch]);

    const typographyStyle = {
         // Replace 'blue' with the color you desire
        color: 'black', // Text color
      };

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} style={typographyStyle} variant="h3" align="center">
                {/* /* EchoesFromPast */ }
                Echoes From Past
               </Typography>
               {/* <img className={classes.image} src={memories} alt="memories" height="60"/> */}
            </AppBar>

            <Grow in>
            <Container>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
            </Container>
            </Grow>

        </Container>
    );
}
export default App;