const somme = require("./sum")

test("1 + 2 doit être égale à 3", () => {
  expect(somme(1, 2)).toBe(3)
})
