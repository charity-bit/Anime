import { GridListTile, Typography,Grid,Paper,CircularProgress} from '@material-ui/core';
import React, {useContext} from  'react';
import {useHistory} from 'react-router-dom';
import {AiringContext} from '../../context/AiringContext';




const AiringCard = (props) =>{
const {
    title,image_url,episodes,start_date,type,score

} = props.airing_anime;

    return(
<GridListTile className="animeCard__container">
    <Grid container item xs={12}>
        <Paper className="animeCard__paper">
            <img src={image_url} />
            <h3>{title}</h3>
            <CircularProgress value={score} />

        </Paper>

    </Grid>
</GridListTile>


    );
}
export default AiringCard;