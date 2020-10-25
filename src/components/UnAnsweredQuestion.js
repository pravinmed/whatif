/* Shows the unanswered question */
/*
 User asks ...

 Photo   Question ...
          option 1 
          option 2
          Submit 
 */

import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'

class UnAnsweredQuestion extends  React.Component
{

    render()
    {
        return (
            <div className='a'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper >xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper >xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper >xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper >xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper >xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper >xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions},{match})
{
    return {
        questions,
    }
}

export default  connect(mapStateToProps)(UnAnsweredQuestion)