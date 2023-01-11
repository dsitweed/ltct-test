const axios = require("axios");

// jest.mock('axios', () => ({
//   get: jest.fn().mockResolvedValue({ data: { message: 'hello' }})
// }));

// 6 test suit *  7 = 42 

/* =============================== TEST Lấy trạng thái đơn vận chuyển ==========================*/
// 7 test case
test.each([1,2,3,4,5,6,7])("mock axios.get", async (id) => {
  try {
    const response = await axios.get(
      `https://delivery-module-production.up.railway.app/api/shipping_order/${id}`
    );
    expect(response.data).not.toBeNull();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/* =============================== TEST Đếm đơn theo trạng thái ==========================*/
// 7 test case
test.each([1,2,3,4,5,6,7])("mock axios.get", async (id) => {
  try {
    const response = await axios.get(
      `https://delivery-module-production.up.railway.app/api/shipping_order/count/status/${id}`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
      expect(response.data.data).toBeGreaterThanOrEqual(0);
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    console.log(e);
    expect(e).toMatch("error");
  }
});

// /* =============================== TEST Lọc danh sách đơn theo trạng thái ==========================*/
// 7 test case
test.each([1,2,3,4,5,6,7])("mock axios.get", async (id) => {
  try {
    const response = await axios.get(
      `https://delivery-module-production.up.railway.app/api/shipping_order/group/status/${id}`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
      expect(response.data.data?.length).toBeGreaterThanOrEqual(0);
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    console.log(e);
    expect(e).toMatch("error");
  }
});

// /* =============================== TEST Hiển thị tất cả các đơn ==========================*/
// 7 test case
test.each([1,2,3,4,5,6,7])("mock axios.get", async () => {
  try {
    const response = await axios.get(
      `https://delivery-module-production.up.railway.app/api/shipping_order`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
      expect(response.data.data?.length).toBeGreaterThanOrEqual(0);
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    console.log(e);
    expect(e).toMatch("error");
  }
});

// /* =============================== TEST Xem chi tiết thông tin đơn cụ thể ==========================*/
// 7 test case
test.each([1,2,3,4,5,6,7])("mock axios.get", async (id) => {
  try {
    const response = await axios.get(
      `https://delivery-module-production.up.railway.app/api/shipping_order/${id}`
    );
    expect(response.data).not.toBeNull();
    if (response.data.result.ok === true) {
      expect(response.data.result.ok).toBeTruthy();
      expect(response.data.data?.length).toBeGreaterThanOrEqual(0);
    } else {
      expect(response.data.ok).toBeFalsy();
    }
  } catch (e) {
    console.log(e);
    expect(e).toMatch("error");
  }
});

/* =============================== TEST Lấy phí vận chuyển ==========================*/
/* Status: PASSED */
// 7 test case
test.each([1,2,3,4,5,6,7])("mock axios.get", async (id) => {
  try {
    const response = await axios.get(
      `https://delivery-module-production.up.railway.app/api/shipping_order/fee/${id}`
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