const crypto = require("crypto");

const header = JSON.stringify({
  alg: "HS256",
  typ: "JWT",
});

const payload = JSON.stringify({
  name: "Teste",
  email: "teste@teste.com",
  cpf: "12345678901",
  phone: "12345678901",
  data: "2020-01-01",
});

const base64Header = Buffer.from(header).toString("base64").replace(/=/g, "");
const base64Payload = Buffer.from(payload).toString("base64").replace(/=/g, "");
const secret = "secret";

const data = base64Header + "." + base64Payload;

const signature = crypto
  .createHmac("sha256", secret)
  .update(data)
  .digest("base64");

const signatureUrl = signature
  .replace(/=/g, "")
  .replace(/\+/g, "-")
  .replace(/\//g, "_");

const token = data + "." + signatureUrl;
