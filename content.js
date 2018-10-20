// StackBlitz Logo
const SVG = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="18px" height="18px" viewBox="0 0 128.000000 128.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
fill="#ffffff" stroke="none">
<path d="M10 867 l0 -224 111 113 c61 61 162 162 223 223 l113 111 -224 0
-223 0 0 -223z"/>
<path d="M466 1074 c-3 -9 -6 -57 -6 -107 l0 -92 -115 -115 -115 -115 132
-132 132 -132 -13 -41 c-6 -22 -21 -56 -33 -76 l-21 -36 -201 201 c-111 111
-205 201 -209 201 -4 0 -7 -97 -7 -215 l0 -215 630 0 630 0 0 215 c0 118 -3
215 -8 215 -4 0 -102 -94 -217 -210 -115 -115 -213 -210 -217 -210 -5 0 -8 46
-8 103 l0 102 115 115 115 115 -131 131 c-122 123 -131 134 -125 160 11 41 47
124 55 124 3 0 96 -90 206 -200 110 -110 203 -200 207 -200 5 0 8 97 8 215 l0
215 -213 0 -212 0 -12 -27 c-7 -16 -22 -50 -34 -78 -12 -27 -39 -93 -61 -145
-22 -52 -42 -101 -45 -108 -5 -11 19 -13 116 -10 66 2 121 2 121 0 0 -12 -467
-502 -478 -502 -10 0 -12 4 -4 13 5 6 37 77 71 157 34 80 66 153 71 163 9 16
2 17 -110 17 -66 0 -120 4 -120 9 0 8 81 97 210 231 24 25 71 74 104 110 34
36 84 89 111 118 l49 52 -181 0 c-156 0 -182 -2 -187 -16z"/>
</g>
</svg>
`;

const addButton = () => {
  const files = Array.from(
    document.querySelectorAll('.files .content .js-navigation-open')
  ).map(n => n.innerHTML);

  // No package.json === stop
  if (!files.includes('package.json')) {
    return null;
  }

  // .Get the toolbar
  const toolbar = document.querySelector(
    '.file-navigation.in-mid-page.d-flex.flex-items-start'
  );
  // Get everything after https://github.com/
  const URL = window.location.pathname;

  // Create the button
  const button = document.createElement('a');
  button.setAttribute('href', `https://stackblitz.com/github${URL}`);
  button.setAttribute('target', '_blank');
  button.setAttribute('rel', 'noopener noreferrer');

  button.classList.add(
    'btn',
    'btn-sm',
    'btn-primary',
    'open-stackblitz-chrome-extension'
  );
  button.innerHTML = `
  ${SVG}
  Open in StackBlitz
`;

  // Add it to the DOM
  return toolbar.append(button);
};
addButton();
