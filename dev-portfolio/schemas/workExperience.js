import { string } from "prop-types";

export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "job",
      title: "Job",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          name: "desc",
          title: "Desc",
          type: "string",
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
