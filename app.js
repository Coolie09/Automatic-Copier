// ==UserScript==
// @name         Automatic copier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copie
// @author       Coolie09
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

"use strict"
document.addEventListener('mouseup', () => {  
    if (window.getSelection().toString().length){
      let text = (window.getSelection().toString());
      console.log(text)
      navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}})