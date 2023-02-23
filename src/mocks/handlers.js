import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
      ])
    );
  }),
  rest.post("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 1,
        id: 101,
        title: "Occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      })
    );
  }),
  rest.get("https://dog.ceo/api/breeds/list/all", (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
        message: {
          affenpinscher: [],
          african: [],
          airedale: [],
          akita: [],
          australian: [],
          husky: [],
          cattledog: [],
        },
      })
    );
  }),
  rest.get("https://dog.ceo/api/breed/cattledog/images", (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
        message: [
          "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ",
          "https://images.dog.ceo/breeds/cattledog-australian/IMG_5177.jpg",
        ],
      })
    );
  }),
  rest.get("http://localhost:3500/tasks", (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: "Title one", text: "Text one", category: "job" },
        { id: 2, title: "Title two", text: "Text two", category: "house" },
        { id: 3, title: "Title three", text: "Text three", category: "job" },
      ])
    );
  }),
  rest.post("http://localhost:3500/tasks", (req, res, ctx) => {
    return res(
      ctx.json({ id: 1, title: "Title one", text: "Text one", category: "job" })
    );
  }),
];
