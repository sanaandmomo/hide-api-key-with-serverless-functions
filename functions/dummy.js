const fetchDummySearchData = require("../dummy/fetch.js");
const stringify = require("../utils/stringify.js");

exports.handler = async () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Vary: "Origin",
  };

  try {
    const body = await fetchDummySearchData();

    return {
      statusCode: 200,
      ok: true,
      headers,
      body: stringify(body),
    };
  } catch (error) {
    return {
      statusCode: 400,
      ok: false,
      headers,
      body: stringify(error),
    };
  }
};
