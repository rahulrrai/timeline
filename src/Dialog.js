import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Carousel from 'react-material-ui-carousel';
import CardMedia from '@material-ui/core/CardMedia';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open != props.open)
      setOpen(props.open);
  }, [props.open])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const images = [];
 for(let i = 0; i < 10; i++) {

   images.push(<CardMedia
     component="img"
     alt="Contemplative Reptile"
     height="200"
     image="https://source.unsplash.com/random"
     title="Contemplative Reptile"
   />)
 }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>

          <Carousel
          autoPlay= {true}
            animation={"slide"}
            indicators= {true}
            timeout={500}
            navButtonsAlwaysVisible={true}>

          {images}
          </Carousel>

        </DialogContent>

      </Dialog>
    </div>
  );
}
