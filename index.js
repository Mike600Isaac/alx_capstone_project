// alert('working and loading.......')

/*-----------about me-----------*/
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName('tab-content');

function openTab(tabName){
  for(tab of tabLinks){
    tab.classList.remove("active-link");
  };
  for(content of tabContents){
    content.classList.remove("active-tab");
  };
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
  
};

 /* ----------sideBar navigator--------  */
let sideBar = document.getElementById("mySideMenu");
function closeBar(){
  sideBar.style.right = "-180px";
}
function openBar(){
  sideBar.style.right = "0";
}


/* ----------code to send form data to email-------- */

function formDataEmail(){
  
}


