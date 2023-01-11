const axios = require("axios");

// jest.mock('axios', () => ({
//   get: jest.fn().mockResolvedValue({ data: { message: 'hello' }})
// }));

const base = "https://delivery-module-production.up.railway.app/api";

// Còn 2

/* =============================== TEST tạo đơn vận chuyển ==========================*/
/* Status: PASSED */
// 7 test case type POST + 1 test case GET list
test.each([1])("mock axios.post", async (id) => {
  try {
    const response = await axios.get(`${base}/shipping_order`);
    expect(response.data).not.toBeNull();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test.each([1, 2, 3, 4, 5, 6, 7])("mock axios.post", async (id) => {
  try {
    const response = await axios.post(`${base}/shipping_order`, {
      orderId: "DH562",
      warehouse: {
        address: {
          ward: "1A0302",
          district: "1488",
          province: "201",
          detail: "Số 1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội",
        },
      },
      receiver: {
        name: "Nguyễn Văn A",
        phone: "0353754098",
        address: {
          ward: "2A0396",
          district: "1496",
          province: "211",
          detail:
            "Số nhà 40, ngõ 12, Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
        },
      },
      cod: 350000,
      weight: 1000,
      products: [
        {
          id: "1234567890",
          name: "Product 1",
          color: "red",
          size: "M",
          price: 100000,
          quantity: "2",
        },
      ],
    });
    expect(response.data).not.toBeNull();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/* =============================== TEST Tính phí ship ==========================*/
/* Status: PASSED */
// 7 test case type POST + 1 test case GET list
test.each([1])("mock axios.post", async (id) => {
  try {
    const response = await axios.get(`${base}/shipping_fee`);
    expect(response.data).not.toBeNull();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/* Status: PASSED */
test.each([1, 2, 3, 4, 5, 6, 7])("mock axios.post", async (id) => {
  try {
    const response = await axios.post(`${base}/shipping_fee`, {
      from_district_id: 1454,
      to_district_id: 1452,
      to_ward_code: "21012",
      weight: 200,
      insurance_value: 2000,
    });
    expect(response.data).not.toBeNull();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
