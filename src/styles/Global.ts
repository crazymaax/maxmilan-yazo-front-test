import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
	--red: #811B39;
	--black: #000000;
	--yellow-700: #FCC325;
	--yellow-800: #FFA00C;
	--green: #00C07F;
	--white: #FFFFFF;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html {
        //font-size: 16px
	@media (max-width: 1080px) {
		font-size: 93.75%; //15px
	}

	@media (max-width: 720px) {
		font-size: 87.5%; // 14px
	}
}

body {
	line-height: 1;
	-webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
	font-family: 'Lato', sans-serif;
	font-weight: 400;
}

h1, h2 , h3, h4, h5, h6, strong {
	font-weight: 600;
}

a {
	text-decoration: none;
}

ol, ul {
	list-style: none;
}

button {
    cursor: pointer;
}
`