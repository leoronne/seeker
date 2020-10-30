import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ButtonOutlined = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    borderRadius: '0 !important',
    border: `2px solid var(--color-primary)`,
    outline: 0,
    minWidth: '200px',
    fontFamily: 'var(--font-family)',
    fontSize: '14px',
    fontWeight: 700,
    color: 'var(--color-primary)',
    height: '40px',
    cursor: 'pointer',
    transition: 'var(--transition)',
    '& span': {
      transition: 'var(--transition)',
      color: 'var(--color-primary)',
    },
    '&:hover': {
      transition: 'var(--transition)',
      background: 'var(--color-primary)',
      color: 'var(--text-color)',
    },
    '&:hover span': {
      transition: 'var(--transition)',
      color: 'var(--text-color)',
    },
    '&:focus': {
      transition: 'var(--transition)',
      background: 'var(--color-primary)',
      color: 'var(--text-color)',
    },
    '&:disabled': {
      color: 'var(--disabled)',
      border: '2px solid var(--disabled)',
      cursor: 'not-allowed',
    },
    '& .MuiButton-label div': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
})(Button);

export default ButtonOutlined;
