export default {
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuild: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
}