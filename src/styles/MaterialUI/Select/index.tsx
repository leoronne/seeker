import { Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const SelectComponent = withStyles({
  root: {
    backgroundColor: 'transparent',
    borderBottom: 'transparent !important',
    fontFamily: 'var(--font-family)',
    transition: 'var(--transition)',

    '&:focus': {
      backgroundColor: 'transparent',
    },

    '&.MuiInput-underline:after': {
      borderBottom: 'transparent !important',
    },

    '& span': {
      display: 'none',
    },

    '& p': {
      fontFamily: 'var(--font-family)',
      color: 'var(--text-color)',

      fontSize: '14px !important',
      fontWeight: 400,
    },
  },
})(Select);

export default SelectComponent;
