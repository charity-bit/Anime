import { GridListTile, Typography,Grid,Paper } from '@material-ui/core';
import React, {useContext} from  'react';
import {useHistory} from 'react-router-dom';
import {AiringContext} from '../../context/AiringContext';




const AiringCard = (props) =>{
    const title = props.airing_anime.title;
    const imageUrl = props.airing_anime.image_url;
    const episodes = props.airing_anime.episodes;
    const startDate = props.airing_anime.start_date;
    const type= props.airing_anime.type;
    const score = props.airing_anime.score;


    return(
<GridListTile className="animeCard__container">
    <Grid container item xs={12}>
        <Paper className="animeCard__paper">
            <image src={imageUrl}>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </image>
        </Paper>

    </Grid>
</GridListTile>


    );
}
export default AiringCard;