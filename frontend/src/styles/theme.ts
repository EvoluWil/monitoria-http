export const themeDark = {
  colors: {
    primary: {
      main: '#4caf50',
      dark: '#3e8e41',
    },
    disable: '#999',
    detail: '#ccc',
    background: '#212121',
    text: '#eee',
    attention: '#990024',
    feedback: {
      success: {
        main: '#d4edda',
        dark: '#c3e6cb',
      },
      error: {
        main: '#f8d7da',
        dark: '#f5c6cb',
      },
    },
  },
  fonts: {
    primary: 'Poppins, sans-serif',
  },
};

export const themeLight = {
  colors: {
    primary: {
      main: '#4caf50',
      dark: '#3e8e41',
    },
    disable: '#999',
    detail: '#ccc',
    background: '#f5f6fa',
    text: '#000',
    attention: '#721c24',
    feedback: {
      success: {
        main: '#d4edda',
        dark: '#c3e6cb',
      },
      error: {
        main: '#f8d7da',
        dark: '#f5c6cb',
      },
    },
  },
  fonts: {
    primary: 'Poppins, sans-serif',
  },
};

export type Theme = typeof themeLight;
