import { createGlobalStyle } from "styled-components";
import fluid from "@/utils/fluid";

const GlobalStyle = createGlobalStyle`
/* root font size must be fixed */
/* scale 1.067, 16px, 320px viewport and 1.2 18px, 1440px viewport */
/* viewport - viewport, fluid-container-padding - fluid container horizontal padding */
:root {
  --fluid-lg: clamp(1.38rem, calc(0.98rem + 2.02vw), 2.80rem);
  --fluid-h1: clamp(1.30rem, calc(1.00rem + 1.48vw), 2.33rem);
  --fluid-h2: clamp(1.22rem, calc(1.01rem + 1.04vw), 1.94rem);
  --fluid-h3: clamp(1.14rem, calc(1.00rem + 0.69vw), 1.62rem);
  --fluid-h4: clamp(1.07rem, calc(0.99rem + 0.40vw), 1.35rem);
  --fluid-h5: clamp(1.00rem, calc(0.96rem + 0.18vw), 1.13rem);
  --fluid-h6: clamp(0.94rem, calc(0.94rem + 0.00vw), 0.94rem);
  --fluid-sm: clamp(0.78rem, calc(0.91rem + -0.14vw), 0.88rem);
  --fluid-line-height: calc(1.8em - .4 * ((100vw - 29.08324552em) / (77.58342115)));

  --grey: #252525;

  /* --viewport-small: 375;
  --viewport-medium: 768;
  --viewport-large: 1440;
  --viewport-min: 375;
  --viewport-max: 1440; */
}

/* to prevent font-size looping use :not()*/
*:not(html, small, blockquote *)  {
  font-size: var(--fluid-h5);
}
h1 {font-size: var(--fluid-h1);}
h2 {font-size: var(--fluid-h2);}
h3 {font-size: var(--fluid-h3);}
h4 {font-size: var(--fluid-h4);} 
/* h5 is alread set to var(--heading-5)*/
h6 {font-size: var(--fluid-h6);} 
p {line-height: var(--fluid-line-height);}

@media (max-width: 414px){
p {line-height: 1.8em;} 
}

@media (min-width: 1920px){
p {line-height: 1.4em;} 
}

* {
  box-sizing: border-box;
  margin: 0;
  /* outline: rgba(25, 250, 25) solid 1px; */
}

html {
  font-family: 'Epilogue', sans-serif;
  color: var(--grey);
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
}

a:any-link {
    text-decoration: none;
    color: inherit;
}

a:any-link:hover, a:any-link:focus {
    cursor: pointer;
    text-decoration: none;
}

abbr:hover , acronym:hover { cursor: help;}

kbd {
    background-color: #333333;
    color: #ffffff;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

code {
    color: #c7254e;
    background-color: #f9f2f4;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

sub, sup {
    font-size: 75%;
}

blockquote {
    padding: 0.5em 1.5em;
    margin-left: 0;
    margin-right: 0;
    font-size: var(--fluid-h4);
    border-left: 5px solid #eee;
}

blockquote > p {
    margin: 0;
}

dt {font-weight: 700;}
dd {margin-inline-start: 0;}
address {font-style: normal;}

pre {
    display: block;
    padding: 1.5em;
    font-size: var(--fluid-sm);
    line-height: 1.6em;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: .3em;
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    width: 100%;
    font-size: var(--fluid-h3);
    border-bottom: solid 1px #d6d6d6;
    margin-bottom: 1em;
}

label {
    font-weight: 700;
}

button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
    cursor: pointer;
}

.container {
    width: 100vw;
    padding-inline: ${fluid.container()};
}

/* ::-webkit-scrollbar {
    display: none;
} */
`;

export default GlobalStyle;