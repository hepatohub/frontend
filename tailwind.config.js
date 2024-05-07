module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bgHome":"url('/bghomepage.png')",
        "bgHeader":"url('/bgHeader.svg')",
        "bgCards":"url('/bgCards.png')",
        "bgFooter":"url('/bgFooter.png')",
        "bgSecCards":"url('/bgSecCards.png')",
        "bgHepatohub":"url('/hepato.png')",
        "bgSechepato":"url('/bgSechepato.png')",
        "bgauto":"url('/bgauto.png')",
        "bgLogin":"url('/bgLogin.png')",
        "login2":"url('/login.png')",
      },

      backgroundColor: {
        "bg-homepage": "rgba(179, 194, 216, 0.42)",
        "button-bg":"linear-gradient(227deg, #36B4E1 25.17%, #164B6D 73.99%);",
        "hepatodivs":"rgba(54, 180, 225, 0.11)",
        "buttons":"linear-gradient(227deg, #164B6D 25.17%, #36B4E1 73.99%, #36B4E1 74%)",
        "construcao":"rgba(255, 255, 255, 0.92);"

      },
      colors: {
        "spam-color": "#90332d",
        "h1-color":"#217196",
        "footer":"#237499",
        "cards": "#cad4da",
        "hepato-blue":"#164B6D",
        "title-color":"#174F73",
        "login":"#36b4e1f0",
        "button-login":"#0A3047",
        "button":"#2A87B5",
        "roxo":"#49237F",
        "fushia":"#d946ef"
      },
      fontSize:{
        "40px":"40px"
      }
    },
  },
  plugins: [],
};
