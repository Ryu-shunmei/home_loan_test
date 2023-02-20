import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Main.propTypes = {
  children: PropTypes.node,
};

export default function Main({ children }) {

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1 }}
    >
      {children}
    </Box>
  );
}
