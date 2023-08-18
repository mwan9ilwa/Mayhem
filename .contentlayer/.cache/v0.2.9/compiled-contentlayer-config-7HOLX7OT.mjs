// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Service = defineDocumentType(() => ({
  name: "Service",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    tags: {
      type: "json",
      description: "Related concepts to the post",
      required: true
    },
    draft: {
      type: "boolean",
      description: "Determines if the post has been published",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (service) => `${service._raw.flattenedPath}`
    },
    url: {
      type: "string",
      resolve: (service) => `/services/${service._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "services",
  documentTypes: [Service]
});
export {
  Service,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7HOLX7OT.mjs.map
