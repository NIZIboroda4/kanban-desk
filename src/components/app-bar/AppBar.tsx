import IconButton from '@mui/material/IconButton';
import img from 'assets/png111.png';
import BoardColuwn from 'components/board-column/BoardColuwn';
import React from "react";

export default function AppBar (): JSX.Element {
  return(
   
    <>
      <IconButton size="large" className='img'
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}>
        <img src="https://img.icons8.com/ios/40/000000/mac-os--v2.png"/>
      </IconButton>
      <div>
        <div className="form">
          <form className="search__form">
            <input
              type="text"
              placeholder="Search or jump to..."
              className="search__input" />
          </form>
        </div> 
      </div> </>
  );
}

