import React, {useState} from 'react'
import {useSelector} from 'react-redux'
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

export default function ReviewDetails(props) {
    const classes = useStyles()

    const reviews = useSelector(state => state.resources.reviews.reviews)

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const reviewDetails = reviews.find(review => review.id === props.movieId)

    return (
        <div>
            <button type="button" onClick={handleOpen}>More Details...</button>
            <Modal open={open} onClose={handleClose}>
                <div style={getModalStyle()} className={classes.paper}>
                    
                    <h2>{reviewDetails.display_title}</h2>
                    {reviewDetails.multimedia.src ? <img src={reviewDetails.multimedia.src} alt="movie review visual"/> : null}
                    <p>Headline: {reviewDetails.headline ? reviewDetails.headline : 'not available'}</p>
                    <p>MPAA Rating: {reviewDetails.mpaa_rating ? reviewDetails.mpaa_rating : 'not available'}</p>
                    <p>Critics Picks: {reviewDetails.critics_pick ? reviewDetails.critics_pick : 0}</p>
                    <p>Critic: {reviewDetails.byline ? reviewDetails.byline : 'not available'}</p>
                    <p>Summary: {reviewDetails.summary_short ? reviewDetails.summary_short : 'not available'}</p>
                    {reviewDetails.link.url ? <a href={reviewDetails.link.url} alt='additional information' target="">{reviewDetails.link.suggested_link_text}</a> : null}
                </div>
            </Modal>
        </div>
    )
}