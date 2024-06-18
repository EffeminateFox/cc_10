//U54529624

// Function to load data and display it in the DOM
function loadData() {
    d3.csv("data/purchase_orders.csv").then(function(data) {
       
      // Selects the unordered list elements
        const ul = d3.select("#orderList");

        // For each row, creates a list item and appends it to the list
        data.forEach(function(order) {
            ul.append("li")
              .text(`${order.customerName} - Order ID: ${order.orderId} : ${order.purchaseAmount}`);
        });
    }).catch(function(error) {
        console.error('Error loading the CSV file:', error);
    });
}

//  Needed to display data
loadData();
