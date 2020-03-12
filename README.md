This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This application is a quick PoC that can detect when a user selects a non-transparent element from a stack of PNGs on a page. We do this by mapping the pixels to a canvas, then recursivley detecting the first `a` value (rgba) on the stack. 
