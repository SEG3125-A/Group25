// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  var currentTab = document.getElementById(tabName);
  currentTab.style.display = "block";
  evt.currentTarget.className += " active";

  // Update breadcrumb
  updateBreadcrumb(tabName);

  // Additional code to hide specific elements based on the selected tab
  var tabToHide = "";

  switch (tabName) {
    case "Client":
      tabToHide = ["Products", "Cart"];
      break;
    case "Products":
      tabToHide = ["Client", "Cart"];
      break;
    case "Cart":
      tabToHide = ["Client", "Products"];
      break;
    default:
      break;
  }

  // Hide elements in the specified tabs
  for (var i = 0; i < tabToHide.length; i++) {
    document.getElementById(tabToHide[i]).style.display = "none";
  }
}

function updateBreadcrumb(tabName) {
  // Update breadcrumb based on the selected tab
  var productBreadcrumb = document.getElementById("productBreadcrumb");
  var clientBreadcrumb = document.getElementById("clientBreadcrumb");
  var cartBreadcrumb = document.getElementById("cartBreadcrumb");

  productBreadcrumb.classList.remove("activeBreadcrumb");
  clientBreadcrumb.classList.remove("activeBreadcrumb");
  cartBreadcrumb.classList.remove("activeBreadcrumb");

  switch (tabName) {
    case "Products":
      productBreadcrumb.classList.add("activeBreadcrumb");
      break;
    case "Client":
      clientBreadcrumb.classList.add("activeBreadcrumb");
      break;
    case "Cart":
      cartBreadcrumb.classList.add("activeBreadcrumb");
      break;
    default:
      break;
  }
}

// Add event listeners for each tab button
document.getElementById("Client").addEventListener("click", function (event) {
  openInfo(event, "Client");
});

document.getElementById("Products").addEventListener("click", function (event) {
  openInfo(event, "Products");
});

document.getElementById("Cart").addEventListener("click", function (event) {
  openInfo(event, "Cart");
});

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price
function populateListProductChoices(slct1, slct2) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById(slct2);

  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";

  // obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(products, s1.value);

  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>

  for (i = 0; i < optionArray.length; i++) {
    var productName = optionArray[i];
    // create the checkbox and add in HTML DOM
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = productName;
    s2.appendChild(checkbox);

    // create an image element and set the source based on the product name
    var image = document.createElement("img");
    image.src = products.find((product) => product.name === productName).image;
    image.alt = productName + " Image";
    image.style.width = "100px";

    // create a label for the checkbox, and also add in HTML DOM
    var label = document.createElement("label");
    label.htmlFor = productName;
    label.appendChild(
      document.createTextNode(
        productName + " - $" + getProductPrice(productName)
      )
    );

    // create a container div for better alignment
    var container = document.createElement("div");
    container.className = "product-container";
    container.appendChild(checkbox);

    container.appendChild(label);

    container.appendChild(image);

    // append the container and a breakline to the HTML DOM
    s2.appendChild(container);

    // create a breakline node and add in HTML DOM
    s2.appendChild(document.createElement("br"));
  }
}

function selectedItems() {
  var ele = document.getElementsByName("product");
  var chosenProducts = [];

  var c = document.getElementById("displayCart");
  c.innerHTML = "";

  // build list of selected item
  var para = document.createElement("P");
  para.innerHTML = "You selected : ";
  para.appendChild(document.createElement("br"));
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      var price = getProductPrice(ele[i].value);
      para.appendChild(document.createTextNode(ele[i].value));
      para.appendChild(document.createTextNode(" $" + price));
      para.appendChild(document.createElement("br"));
      chosenProducts.push(ele[i].value);
    }
  }

  // add paragraph and total price
  c.appendChild(para);
  c.appendChild(
    document.createTextNode("Total Price is $ " + getTotalPrice(chosenProducts))
  );
}

function changeTextSize(size) {
  var newSize;

  switch (size) {
    case "small":
      newSize = "16px"; // Adjust the size as needed
      break;
    case "medium":
      newSize = "18px"; // Default size
      break;
    case "big":
      newSize = "20px"; // Adjust the size as needed
      break;
    default:
      newSize = "18px"; // Default size
      break;
  }

  document.body.style.fontSize = newSize;
}
