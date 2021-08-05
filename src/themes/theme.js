/**
 * Hydrate styling when page is first loaded
 */

export default {
  fonts: {
    // Used in styled/Post.js
    main:
      'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    code: 'Roboto Mono, monospace',
  },
  size: {
    xxSmall: '0.25rem',
  },
  colors: {
    main1: '#357ae8',
    main2: 'hsl(207, 70%, 94%)',
    dark1: 'hsl(227, 2%, 12%)',
    dark2: 'hsl(227, 2%, 26%)',
    dark3: 'hsl(227, 2%, 64%)',
    dark4: '#414244',
    light1: 'hsl(0, 0%, 100%)',
    light2: 'hsl(0, 0%, 95%)',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 50rem)',
    tablet: 'only screen and (max-width: 65rem)',
  },
  spacings: {
    xxSmall: '.25rem',
    xSmall: '.5rem',
    small: '0rem',
    medium: '2rem',
    large: '8rem',
    xLarge: '3rem',
    x2Large: '3.5rem',
    xxLarge: '3rem',
  },
  animations: {
    button: 'box-shadow 0.3s ease',
    link: 'color 0.2 ease',
  },
  shadows: {
    shadow1: '2px 5px 20px rgba(30, 30, 31, 0.05)',
  },
};
