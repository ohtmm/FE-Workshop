import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        white: '#ffffff',
        black: '#212529',
        brown: '#794F34',
        sand: '#D8AB83',
        red: '#E9431D',
        error: '#F24F29',
        yellowBeige: '#FBEBCB',
        lightBeige: '#FCF4E4',
        beige: '#F4EDE8',
        lightGrey: '#DFDFDF',
        grey: '#818080',
        grey50: '#FBFAF8',
        grey100: '#F2F1ED',
        grey150: '#E7E6E1',
        grey200: '#D6D5D4',
        grey300: '#B9B8B7',
        grey400: '#A2A1A0',
        grey500: '#818080',
        grey600: '#6A6969',
        grey700: '#565655',
        grey800: '#3A3A39',
        grey900: '#242320',
        deepGreen: '#6D9167',
        deepYellow: '#F8D394',
        deepOrange: '#EC7357',
      },
    },
  },
  plugins: [],
};
export default config;
