import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'

export default function ReviewDetails() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <button type="button" oncClick={handleOpen}>More Details...</button>
            <Modal open={open} onClose={handleClose}>
                <h2>Title</h2>
                <p>MPAA Rating: </p>
                <p>Critics Pick?: </p>
                <p>Critic's Name: </p>
                <p>Headline: </p>
                <p>Summary of Review: </p>
                <a>Link to Article</a>
            </Modal>
        </div>
    )
}