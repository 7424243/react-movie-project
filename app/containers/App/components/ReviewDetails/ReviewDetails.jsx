import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function ReviewDetails() {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <button type="button" onClick={handleOpen}>More Details...</button>
            <Modal open={open} onClose={handleClose}>
                <div style={getModalStyle()} className={classes.paper}>
                    <h2>Title</h2>
                    <p>MPAA Rating: </p>
                    <p>Critics Pick?: </p>
                    <p>Critic's Name: </p>
                    <p>Headline: </p>
                    <p>Summary of Review: </p>
                    <a>Link to Article</a>
                </div>
            </Modal>
        </div>
    )
}