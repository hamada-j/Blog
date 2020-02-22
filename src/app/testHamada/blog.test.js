// utilizando JEST para analizar  Meh(x) sin Jasmine y Karma a medias.

import "jest-preset-angular";

const { getAllPosts } = require("../servicio.service");

test("Descripcion: debe analizar los campos que el usario ha introducido", () => {
  const posts = getAllPosts(
    "titulo",
    "autor",
    "imagen",
    "categoria",
    "fecha",
    "texto",
    "id"
  );

  expect(text).toBe("test", "test", "test", "test", "test", "test", "test");
  // tercer test
});
