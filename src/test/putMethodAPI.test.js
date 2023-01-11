const axios = require("axios");

const base = "https://delivery-module-production.up.railway.app/api";

// 4 test suit * 7 = 28 test case
/* =============================== TEST Cập nhật trạng thái đơn ==========================*/
/* Status: PASSED */
// 7 test case
test.each([
  [1, 2],
  [1, 1],
  [2, 2],
  [2, 3],
  [2, 2],
  [4, 1],
  [4, 2],
])("mock axios.get", async (orderCode, statusId) => {
  try {
    const response = await axios.put(
      `${base}/shipping_order/status/${orderCode}/${statusId}`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/* =============================== TEST Xử lý trả hàng ==========================*/
/* Status: PASSED */
// 7 test case
test.each([1, 2, 3, 4, 5, 6, 7])("mock axios.get", async (orderCode) => {
  try {
    const response = await axios.put(
      `${base}/shipping_order/return/${orderCode}`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/* =============================== TEST Xác nhận đã nhận đơn hàng ==========================*/
/* Status: PASSED */
// 7 test case
test.each([1, 2, 3, 4, 5, 6, 7])("mock axios.get", async (orderCode) => {
  try {
    const response = await axios.put(
      `${base}/shipping_order/confirmReceipt/${orderCode}`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/* =============================== TEST Giao lại hàng ==========================*/
/* Status: PASSED */
// 7 test case
test.each([1, 2, 3, 4, 5, 6, 7])("mock axios.get", async (orderCode) => {
  try {
    const response = await axios.put(
      `${base}/shipping_order/redeliver/${orderCode}`,
      {
        order_id: "DH962",
        products: [
          {
            id: "1234567890",
            name: "Product 1",
            color: "red",
            size: "M",
            price: 100000,
            quantity: "2",
          },
          {
            id: "1234567890",
            name: "Product 2",
            color: "blue",
            size: "L",
            price: 150000,
            quantity: "1",
          },
          {
            id: "1234567890",
            name: "Product 3",
            color: "black",
            size: "S",
            price: 100000,
            quantity: "1",
          },
        ],
      }
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    expect(e).toMatch("error");
  }
});
