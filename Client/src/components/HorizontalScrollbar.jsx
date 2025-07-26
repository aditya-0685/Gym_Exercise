import React, { useContext } from 'react';
import BodyPart from './BodyPart';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import 'react-horizontal-scrolling-menu/dist/styles.css'; // Add if styles not applied
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodypart, setBodyPart, isBodyParts }) => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto' }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            sx={{
              display: 'inline-block',
              m: '0 20px',
            }}
          >
            {isBodyParts ? <BodyPart item={item} bodypart={bodypart} setBodyPart={setBodyPart} />
            :<ExerciseCard exercise={item} />
          }
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
