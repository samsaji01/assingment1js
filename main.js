const coffeeorder1 = {
  customer_name: "steve",
  drink_type: "Coffee",
  coffee_size: "Grande",
  drizzle: "Yes",
  whipped_cream: "Yes",
  sweetener: "Yes",
  cold_foam: "No",
  dairy: "2% milk",
  display: function () {
    let ordertotal = "";
    ordertotal = "Customer Name : " + this.customer_name + "\n";
    ordertotal += "Drink Type : " + this.drink_type + "\n";
    ordertotal += "Coffee Size : " + this.coffee_size + "\n";
    if (this.drizzle == "Yes") ordertotal += "Drizzle\n";
    if (this.whipped_cream == "Yes") ordertotal += "Whipped Cream\n";
    if (this.sweetener == "Yes") ordertotal += "Sweetener\n";
    if (this.cold_foam == "Yes") ordertotal += "Cold Foam\n";
    ordertotal += "Dairy : " + this.dairy + "\n";
    alert(ordertotal);
  },
};

const coffeeorder2 = {
  customer_name: "Jack",
  drink_type: "Latte",
  coffee_size: "venti",
  drizzle: "No",
  whipped_cream: "No",
  sweetener: "Yes",
  cold_foam: "Yes",
  dairy: "Cream",
  display: function () {
    let ordertotal = "";
    ordertotal = "Customer Name : " + this.customer_name + "\n";
    ordertotal += "Drink Type : " + this.drink_type + "\n";
    ordertotal += "Coffee Size : " + this.coffee_size + "\n";
    if (this.drizzle == "Yes") ordertotal += "Drizzle\n";
    if (this.whipped_cream == "Yes") ordertotal += "Whipped Cream\n";
    if (this.sweetener == "Yes") ordertotal += "Sweetener\n";
    if (this.cold_foam == "Yes") ordertotal += "Cold Foam\n";
    ordertotal += "Dairy : " + this.dairy + "\n";
    alert(ordertotal);
  },
};
