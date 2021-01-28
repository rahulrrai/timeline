import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogSlide from './Dialog';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setShowDialog(true)}>
          More
        </Button>
      </CardActions>
    </Card>
    <DialogSlide open={showDialog}/>
    </>
  );
}
