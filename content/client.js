const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.CONTENTFUL_SPACE || process.env.space,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.accessToken,
});
