/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run dev`. Additional config files will
| inherit these settings, and can override them when necessary.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  locals: {
    companyName: "K-Industries",
  },
  companyName: "K-Industries",
  build: {
    posthtml: {
      outlook: {tag: 'mso'},
      // fetch: {
      //   tags: ['get'],
      //   attribute: 'resource'
      // }
    },
    content: ['emails/**/*.html'],
    static: {
      source: ['images/**/*.*'],
      destination: 'images',
    },
  },
}
