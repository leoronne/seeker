import { InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const InputLabelContainer = withStyles({
  root: {
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    transition: 'var(--transition-slow)',
    '&:hover': {
      color: 'var(--color-primary)',
      transition: 'var(--transition-slow)',
    },
    '&:focus': {
      color: 'var(--color-primary)',
      transition: 'var(--transition-slow)',
    },
    '& .Mui-focused': {
      color: `var(--color-primary) !important`,
    },
  },
  focused: {
    color: `var(--color-primary) !important`,
    borderColor: 'var(--color-primary)',
    transition: 'var(--transition-slow)',
  },
  outlined: {
    borderColor: 'var(--color-primary)',
    transition: 'var(--transition-slow)',
    '& .Mui-focused': {
      color: `var(--color-primary) !important`,
    },
  },
})(InputLabel);

export default InputLabelContainer;
