import 'styled-components';

declare module 'style-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      text_header: string;
      background_header: string;
    };
  }
}
