const md5 = require("./md5")

test("Hashes some random strings", () => {
    expect(md5("test")).toBe("098f6bcd4621d373cade4e832627b4f6")
    expect(md5("string")).toBe("b45cffe084dd3d20d928bee85e7b0f21")
    expect(md5("password")).toBe("5f4dcc3b5aa765d61d8327deb882cf99")

})