import { GridListTile,Grid,Paper,Chip} from '@material-ui/core';
import React, {useContext} from  'react';
import "./AiringCard.scss";






const AiringCard = (props) =>{
const {
    //score //episodes
    title,image_url,start_date,type,
} = props.airing_anime;
//used this in order to set the image to a prop
const paperStyle = {
    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${image_url})`,
    backgroundSize: 'cover',
    display:'flex',
    flexDirection:'column',
    color:'white',
    fontSize:'12px',
    padding: '10px',
    height: '200px',
    width:'350px',
    aspectRatio:'contain',
  }

    return(
<GridListTile className="airingCard__container" >
    <Grid container item xs={12}>
        <Paper style={paperStyle} >
            <div>
        <Chip label={type} className="score"/>
        </div>
        <div className="airingCard__paper_container">  
             <p className="date">{start_date}</p>
             <p className="title">{title}</p>

            </div>
    </Paper> 

    </Grid>
</GridListTile>


    );
}
export default AiringCard;