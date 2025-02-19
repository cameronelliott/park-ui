export const Badge = {
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'medium',
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  defaultProps: {
    variant: 'subtle',
    size: 'md',
  },
  sizes: {
    sm: {
      textStyle: 'xs',
      px: '2',
      h: '5',
      gap: '1',
      '& svg': {
        width: '3',
        height: '3',
      },
    },
    md: {
      textStyle: 'xs',
      px: '2.5',
      h: '6',
      gap: '1.5',
      '& svg': {
        width: '4',
        height: '4',
      },
    },
    lg: {
      textStyle: 'sm',
      px: '3',
      h: '7',
      gap: '1.5',
      '& svg': {
        width: '4',
        height: '4',
      },
    },
  },
  variants: {
    solid: {
      background: 'accent.default',
      color: 'accent.fg',
    },
    subtle: {
      background: 'bg.subtle',
      borderColor: 'border.subtle',
      borderWidth: '1px',
      color: 'fg.default',
      '& svg': {
        color: 'fg.muted',
      },
    },
    outline: {
      borderWidth: '2px',
      borderColor: 'border.default',
    },
  },
}
