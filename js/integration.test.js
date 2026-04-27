const { expect, test } = require("@jest/globals");

test("Hashes some random strings", async () => {
  let tmp = { login: "unknown", password: "nonexistant" };
  let jsonPayload = JSON.stringify(tmp);

  let url = "http://localhost" + "/Login." + "php";

  //   let xhr = new XMLHttpRequest();
  //   xhr.open("POST", url, true);
  //   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  //   xhr.onreadystatechange = function () {
  //     expect(JSON.parse(xhr.responseText)).toEqual({
  //       id: 0,
  //       firstName: "",
  //       lastName: "",
  //       error: "No Records Found",
  //     });
  //   };
  //   xhr.send(jsonPayload);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: jsonPayload,
  });

  expect(await response.json()).toEqual({
    id: 0,
    firstName: "",
    lastName: "",
    error: "No Records Found",
  });
});
