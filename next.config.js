module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/eWmzKsY',
        permanent: false, // 302 redirect
      },
    ];
  },

  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'teachla.uclaacm.com',
      },
      {
        protocol: 'https',
        hostname: 'icpc.uclaacm.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'josephcamyre.com',
      },
      {
        protocol: 'https',
        hostname: 'jcfp.site',
      },
      {
        protocol: 'https',
        hostname: 'photos.google.com',
      },
      {
        protocol: 'https',
        hostname: 'photos.app.goo.gl',
      },
      {
        protocol: 'https',
        hostname: 'www.uclaacm.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.acmcyber.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'samueli.ucla.edu',
      },
      {
        protocol: 'https',
        hostname: 'www.cs.ucla.edu',
      },
    ],
  },
};
