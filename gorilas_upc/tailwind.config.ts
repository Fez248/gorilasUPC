import {nextui} from '@nextui-org/theme';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import type { Config } from "tailwindcss";

const config: Config = {
  plugins: [
    nextui(),
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bananas": "url(/images/background.png)",
        "heroImage": "url(/images/heroImage5.JPG)",
        "heroImage2": "url(/images/heroImage4.JPG)",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'bebas-neue':  ['Bebas Neue', 'sans-serif'],    
      }
    },
  },
};
export default config;
