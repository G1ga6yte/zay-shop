import React from "react";
import {Button, styled, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useCartContext} from "../../../CartContext";
import "./dialog-page.scss"


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const {openDialog, handleDialogClose, checkedItems, sum} =useCartContext()
  
  return (
     <div className="dialog-block">
       
       <BootstrapDialog className="dialog-box"
          onClose={handleDialogClose}
          aria-labelledby="customized-dialog-title"
          open={openDialog}
       >
         <DialogTitle className="dialog-title" sx={{ m: 0, p: 0 }} id="customized-dialog-title">
           Modal title
         </DialogTitle>
         
         <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
         >
           <CloseIcon />
         </IconButton>
         
         <DialogContent dividers>
           <div className="paying-types G-flex G-flex-between">
             <span className="pay-icon icon-cc-paypal"></span>
             <span className="pay-icon icon-googlepay"></span>
             <span className="pay-icon icon-applepay"></span>
             <span className="pay-icon icon-credit-card"></span>
  
           </div>
           
           <div className="checked-items">
             {checkedItems.map((el)=>{
               return <div className="checked-item G-flex G-flex-between">
                 <img className="checked-item-img" src={el.img} alt=""/>
                 <div className="item-name-color G-flex">
                   <h3 className="checked-item-name">{el.name}</h3>
                   <span className="checked-item-color">{el.info.color}</span>
                 </div>
                 <span className="checked-item-price">
                   {el.price}
                 </span>
               </div>
             })}
           </div>
  
           <div className="item-price">
             Total Sum : <span className="price-span">${sum}.00</span>
           </div>
           
           
         </DialogContent>
         <DialogActions>
           <button className="go-to-pay">
             Go To Pay
           </button>
         </DialogActions>
       </BootstrapDialog>
     </div>
  );
}
