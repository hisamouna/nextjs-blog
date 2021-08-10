module.exports = {
  async headers() {
    return [
      {
        source: '/example/js/cache',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          }
        ],
      },
    ]
  },
}
