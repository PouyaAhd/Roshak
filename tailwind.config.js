/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#212121",
        darkGreen: "#35B19B",
        lightGreen: "#4AF5D7",
        darkerGreen: "#00604E"
      },
      boxShadow: {
        custom: "0 10px 10px  rgba(0, 0, 0, 0.1)",
        innerCustom: "inset 0px 0px 45px 20px rgb(0 0 0 / 0.25);",
        headerShado: "0px 20px 50px 0px #00000080;",
        slowShadow: " 0px 4px 4px 0px #00000040",
        shadowSite: " 0px 4px 20px 0px #00000040"
      },
      screens: {
        mq1476: { max: "1476px" },
        mq1440: { max: "1440px" },
        mq1410: { max: "1410px" },
        mq1380: { max: "1380px" },
        mq1300: { max: "1300px" },
        mq1292: { max: "1292px" },
        mq1128: { max: "1128px" },
        mq1150: { max: "1150px" },
        mq1130: { max: "1130px" },
        mq1080: { max: "1080px" },
        mq1070: { max: "1070px" },
        mq980: { max: "980px" },
        mq920: { max: "920px" },
        mq812: { max: "812px" },
        mq850_min: { min: "850px" },
        mq850: { max: "850px" },
        mq784: { max: "784px" },
        mq768: { max: "769px" },
        mq650: { max: "650px" },
        mq580: { max: "580px" },
        mq480: { max: "480px" }
      }
    }
  },
  plugins: []
};
