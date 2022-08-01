# STYLED-PDF
## _STYLED-PDF is an interactive pdf layout building library, with dev experience similar to css_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

 STYLED-PDF is an interactive pdf layout building library, with dev experience similar to css.
 
 See an amazing example:
 ```js
 let style = {
     marginTop: '10%',
     marginLeft: '2%',
     ...
 }
  container.dv(doc, style)
 ```

- Component
- Style
- Javascript function

## Features

 Component class : 
  At the moment we have 7 components, they are:
  
   DIV 
 <details>
    <summary> div component </summary>
 
```js
let style = {
            marginLeft: '45.5%',
            width: '35%',
            heigth: '13%',
            padding: '15%',
            border: [0,0,0],
     }
     container.div(doc, style)
```

 </details>
    TH 
 <details>
    <summary> th component </summary>

```js
let style = {
            marginLeft: '2%',
            width: '14.3%',
            heigth: '36%',
            padding: '4%',
            border: [0,0,0],
            bgColor: [201, 201, 201],
     }
     container.th(doc, style)
```

 </details>
   TD 
 <details>
    <summary> td component </summary>

```js
let style = {
             marginLeft: '2%',
			width: '14.3%',
			heigth: '38.9%',
			padding: '4%',
			border: [0,0,0]
     }
     container.td(doc, style)
```

 </details>
    P 
 <details>
    <summary> p component </summary>

```js
let style = {
            marginTop: '40.5%',
            marginLeft: '4%',
            fontSize: 8,
            fontWeigth: 'normal'
     }
     container.p(text, style)
```

 </details>
     HR 
 <details>
    <summary> hr component </summary>

```js
let style = {
            top:  "20%",
           marginLeft: "2%",
           marginRight: '4%',
           bottom:  "30%",
     }
     container.hr(style)
```

 </details>
    IMAGE 
 <details>
    <summary> div component </summary>
	
```js

let style = {
    marginTop: "2%",
    width: "25%",
    height: "20%",
    marginLeft: "3%",
  };
  container.Image(imgBlob, style);
```
 </details>
