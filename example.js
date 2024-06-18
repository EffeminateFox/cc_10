//U54529624

// Function to display data
function loadData() {
    d3.csv("data/purchase_orders.csv").then(function(data) {
        // Select the unordered list element
        const ul = d3.select("#orderList");

        // For each row in the data, creates a list item and appends it to the list
        data.forEach(function(order) {
            ul.append("li")
              .text(`${order.customerName} - Order ID: ${order.orderId} : ${order.purchaseAmount}`);
        });
    }).catch(function(error) {
        console.error('Error loading the CSV file:', error);
    });
}

// Loads data and display it
loadData();
