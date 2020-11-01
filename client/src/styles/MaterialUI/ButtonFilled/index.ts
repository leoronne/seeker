import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ButtonFilled = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--secondaryTextColor)',
    border: `1px solid var(--secondaryTextColor)`,
    outline: 0,
    width: '100%',
    borderRadius: 'var(--border-radius)',
    fontFamily: 'var(--font-family)',
    fontSize: '14px',
    color: 'white',
    height: '40px',
    cursor: 'pointer',
    fontWeight: 500,
    '&:hover': {
      background: 'var(--secondaryTextColor)',
      color: 'white',
    },
    '&:focus': {
      background: 'var(--secondaryTextColor)',
      color: 'white',
    },
    '&:disabled': {
      background: 'transparent',
      color: 'var(--disabled)',
      border: '1px solid var(--disabled)',
      cursor: 'not-allowed',
    },
    '& .MuiButton-label div': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
})(Button);

export default ButtonFilled;
