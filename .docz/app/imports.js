export const imports = {
  'src/models/User.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-models-user" */ 'src/models/User.mdx'
    ),
}
