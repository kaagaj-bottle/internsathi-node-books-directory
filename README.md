## API Reference

#### Get all books

```http
  GET /api/books
```

#### Get book

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post a book

```http
  POST /api/books
```

To post a book. One needs to have following information about the book:

- title
- author
- price
- publisher
- description
- datePublished
- genre
- url

#### Update a book

```http
  PUT /api/books/${id}
```

To update the book, and id must be provided. Along with that body must have the all information about the updated book.

#### Delete a book

```http
  DELETE /api/books/${id}
```
