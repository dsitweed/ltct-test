import axios from "axios";

jest.mock('axios', () => ({
    get: jest.fn().mockResolvedValue({ data: { message: 'hello' }})
  }));
  
  test('mock axios.get', async () => {
    const response = await axios.get('https://test.com/t/1');
    expect(response.data).toEqual({ foo: 'bar' });
  });
  
  
