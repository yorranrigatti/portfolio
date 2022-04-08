import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --color-white:  #ffffff;
    --color-gray-1: #a5a5a5;
    --color-gray-2: #909096;
    --color-gray-3: #515152;
    --color-gray-4: #282828;
    --color-gray-5: #1d1d1d;
    --color-gray-6: #181818;
    --color-black:  #000000;
    --color-red:    #ef5466;

    --a-font-size: 1rem;

    --font-family-la-belle: 'La Belle Aurore', cursive;
    --font-family-open-sans: 'Open Sans', sans-serif;
}
body{
    background: var(--color-gray-5);
    color: var(--color-white);
    font-family: var(--font-family-open-sans)
}
a{
    text-decoration: none;
}
li{
    list-style-type: none;
}
h1{
    font-size: 33px;
}
p{
    font-size: 14px;
}

button{
    cursor: pointer;
}
`;
