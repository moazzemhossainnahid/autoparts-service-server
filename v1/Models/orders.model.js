const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = mongoose.Schema(
  {
    total_amount: String,
    currency: String,
    tran_id: String,
    success_url: String,
    fail_url: String,
    cancel_url: String,
    paymentStatus: String,
    deliveryStatus: String,
    shipping_method: String,
    product_name: String,
    product_category: String,
    product_profile: String,
    product_image: String,
    cus_name: String,
    cus_email: String,
    cus_add1: String,
    cus_add2: String,
    cus_city: String,
    cus_state: String,
    cus_postcode: Number,
    cus_country: String,
    cus_phone: String,
    cus_fax: String,
    ship_name: String,
    ship_add1: String,
    ship_add2: String,
    ship_city: String,
    ship_state: String,
    ship_postcode: Number,
    ship_country: String,
    multi_card_name: String,
    value_a: String,
    value_b: String,
    value_c: String,
    value_d: String,
    ipn_url: String,
    val_id: String,
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("orders", orderSchema);

module.exports = Orders;
