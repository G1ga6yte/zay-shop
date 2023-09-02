import {Box, Button, Typography, Modal} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useCartContext} from "../../../../CartContext";
import "./image-modal.scss"

const style = {
  position : "absolute",
  top      : "50%",
  left     : "50%",
  transform: "translate(-50%, -50%)",
  bgcolor  : "background.paper",
  boxShadow: 24,
  p: 0,
  outline: "none"
};

function ImageModal ({...props}){
  const {open, handleClose}=useCartContext()
  
  
  
  
  return(
       <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
       >
         <Box sx={style} className="modal-box" >
           <IconButton className="close-icon">
             <CloseIcon onClick={handleClose} />
           </IconButton>
           <img  className="modal-img" src={props.img} alt=""/>
         </Box>
       </Modal>
  )
}

export default ImageModal