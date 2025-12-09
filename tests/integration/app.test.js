const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hey world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hey world!");
  });
});
