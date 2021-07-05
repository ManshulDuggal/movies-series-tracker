import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
margin: 0px;
padding: 0px;

* {
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  width: 0.3rem;
  
 
}

*::-webkit-scrollbar-button {
  background: transparent;
  
}

*::-webkit-scrollbar-track {
  background: transparent;
 
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(109, 105, 105, 0);
  border-radius: 50px;
  border: solid 10px;
  color: black;

}

body{
    background: radial-gradient(#e66465, #9198e5);

    
}

h2{
    font-family: 'Francois One', sans-serif;
   font-weight: lighter;
   
}

}

Link{
text-decoration: none;
}



`;

export default GlobalStyles;
