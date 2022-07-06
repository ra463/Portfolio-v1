export default {
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "codelink",
      title: "Codelink",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
