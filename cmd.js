// getMenu() function
async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menuData = await response.json();

        // Displaying food items to the user
        console.log('Menu:', menuData);

        // Get the container element
        const container = document.getElementById('menu-container');

        // Loop through the menu items
        menuData.forEach(item => {
            // Create a new div for each menu item
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            // Create an image element
            const image = document.createElement('img');
            image.src = item.imgSrc;
            image.alt = item.name;

            // Create a heading element for the menu item name
            const name = document.createElement('h3');
            name.textContent = item.name;

            // Create a paragraph element for the menu item price
            const price = document.createElement('p');
            price.textContent = 'Price: ' + item.price;

            // Append the image, name, and price elements to the menu item div
            menuItem.appendChild(image);
            menuItem.appendChild(name);
            menuItem.appendChild(price);

            // Append the menu item div to the container
            container.appendChild(menuItem);

        });
        return menuData;
    } catch (error) {
        console.error('Error:', error);
    }
}

// takeOrder() function
/* function takeOrder() {
   return new Promise((resolve,reject) => {
     setTimeout(() => {
       const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
       const order = {
         burgers: burgers.slice(0, 3), // Selecting 3 random burgers
       };
       if(order.burgers.length === 3){
       resolve(order);
       }else{
         reject(new Error("Failed to take the order."));
       }
     }, 2500);
   });
 }*/

/*async function getMenu() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const menuData = await response.json();
    return menuData;
  } catch (error) {
    console.error('Failed to fetch the menu:', error);
    throw new Error('Failed to fetch the menu.');
  }
}*/

function takeOrder(menu) {
    return new Promise(resolve => {
        setTimeout(() => {
            const ordersContainer = document.getElementById('orders-container');
            //const menuContainer = document.getElementById('menu-container');
            ordersContainer.innerHTML = ''; // Clear previous orders
            //menuContainer.innerHTML = ''; // Clear menu items


            const orders = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * menu.length);
        const order = menu[randomIndex];
        orders.push(order);

        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');

        const image = document.createElement('img');
        image.src = order.imgSrc;
        image.alt = order.name;

        const name = document.createElement('h3');
        name.textContent = order.name;

        const price = document.createElement('p');
        price.textContent = 'Price: ' + order.price;

        orderItem.appendChild(image);
        orderItem.appendChild(name);
        orderItem.appendChild(price);

        ordersContainer.appendChild(orderItem);
      }

            resolve(orders);
        }, 2500);
    });
}




// orderPrep() function
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = {
                order_status: true,
                paid: false,
            };
            if (orderStatus.order_status && !orderStatus.paid) {
                resolve(orderStatus);
            } else {
                reject(new Error("Failed to prepare the order."));
            }
        }, 1500);
    });
}

// payOrder() function
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = {
                order_status: true,
                paid: true,
            };
            if (orderStatus.order_status && orderStatus.paid) {
                resolve(orderStatus);
            } else {
                reject(new Error("Failed to process the payment."));
            }
        }, 1000);
    });
}

// thankyouFnc() function
function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

// Execute the restaurant flow when the screen loads
window.onload = async function () {
    const menuData = await getMenu();
    // console.log('Menu:', menuData);

    const order = await takeOrder(menuData);
    console.log('Order:', order);

    const orderStatus = await orderPrep();
    console.log('Order Status:', orderStatus);

    const paidOrder = await payOrder();
    console.log('Order Status:', paidOrder);

    thankyouFnc();
};
