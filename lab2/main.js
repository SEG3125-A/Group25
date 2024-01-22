
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
var customerInfo = "customer-info";
var productPage = "products-page";
var cartPage = "cart-page";
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
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

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

// Function to update product choices based on selected restrictions
function updateProductChoices() {
    // Get selected restrictions
    var vegetarianCheckbox = document.getElementById("Vegetarian");
    var glutenFreeCheckbox = document.getElementById("GlutenFree");
    var organicCheckbox = document.getElementById("Organic");

    // Build a string representing the selected restrictions
    var selectedRestrictions = [];
    if (vegetarianCheckbox.checked) {
        selectedRestrictions.push("Vegetarian");
    }
    if (glutenFreeCheckbox.checked) {
        selectedRestrictions.push("GlutenFree");
    }
    if (organicCheckbox.checked) {
        selectedRestrictions.push("Organic");
    }

    // Populate product choices based on selected restrictions
    populateListProductChoices(selectedRestrictions.join(','), 'displayProduct');
}


	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}

