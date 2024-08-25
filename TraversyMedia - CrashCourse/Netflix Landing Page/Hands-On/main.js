const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content-item");
// console.log(tabItems, tabContent);

function selectItem(e) {
  removeBorder();
  removeContent();

  //Add border to the selected tab
  this.classList.add("tab-border");
  // Grab the Id of the selected tab
  console.log(this.id);
  const clickedTab = document.querySelector(`#${this.id}-content`);
  clickedTab.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeContent() {
  tabContent.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
