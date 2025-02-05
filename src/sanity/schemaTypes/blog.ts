const blogSchema = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Tech", value: "tech" },
          { title: "Health", value: "health" },
          { title: "Finance", value: "finance" },
          { title: "Lifestyle", value: "lifestyle" },
          { title: "Education", value: "education" },
        ],
        layout: "radio", // Use radio buttons for selection
      },
    },
  ],
};

export default blogSchema;
