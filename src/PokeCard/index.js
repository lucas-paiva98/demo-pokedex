import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./styles.css";

const PokeCard = props => (
  <Card className="Card">
    <CardActionArea>
      <CardMedia
        className="Image"
        image={props.poke.image}
        title={props.poke.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.poke.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Type: {props.poke.type}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          XP: {props.poke.base_experience}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default PokeCard;
