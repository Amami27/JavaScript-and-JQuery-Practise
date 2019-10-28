var visitor = document.getElementById('guest');
var blogOwner = document.getElementById('admin');
// CREATING MY PAGE TITLE
var header = document.createElement('h1');
header.innerHTML = "WELCOME TO WORK OF ART";
var merge = document.getElementsByTagName('body')[0].appendChild(header);
// CREATING THE ARTICLE SECTION
var articleHead = document.createElement('article');
var merge2 = document.getElementsByTagName('body')[0].appendChild(articleHead);
var inVisible = document.getElementsByTagName('article');
inVisible[0].style.display = 'none';
// ADDING A CHILD TO THE ARTICLE
var subHead = document.createElement('h3');
var merge3 = document.getElementsByTagName('article')[0].appendChild(subHead);
merge3.innerHTML = "Trending News in Nigeria"
    // SECOND CHILD OF THE ARTICLE
var parag = document.createElement('p');
var merge4 = document.getElementsByTagName('article')[0].appendChild(parag);
merge4.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// ANOTHER ARTICLE SECTION(SIBLING TO THE THE FIRST ARTICLE)
var articleHead2 = document.createElement('article');
var merge5 = document.getElementsByTagName('body')[0].appendChild(articleHead2);
// CHILD TO THIS NEW ARTICLE SECTION
var editPost = document.createElement('textarea');
var attribute = document.createAttribute('autofocus');
var attribute2 = document.createAttribute('placeHolder');
var attribute3 = document.createAttribute('class');
attribute2.value = "Add New Post";
attribute3.value = 'text';
editPost.setAttributeNode(attribute);
editPost.setAttributeNode(attribute2);
editPost.setAttributeNode(attribute3);
var merge6 = document.getElementsByTagName('article')[1].appendChild(editPost);
inVisible[1].style.display = 'none';
// ADDING AN EVENTLISTNER TO THE GUEST BUTTON
visitor.addEventListener('click', blogPost);

function blogPost(e) {
    inVisible[0].style.display = 'block';
}

// ADDING AN EVENTLISTNER TO THE ADMIN BUTTON
blogOwner.addEventListener('click', blogPost0);

function blogPost0(e) {
    let password = prompt("Password?");
    if (password === "TheMaster") {
        inVisible[0].style.display = 'block';
        inVisible[1].style.display = 'block';
    };
}