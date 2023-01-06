var origTitle = document.title;

function oldTitle() { document.title = origTitle }

function newTitle() { document.title = "noo come back :(" }
window.onblur = newTitle, window.onfocus = oldTitle