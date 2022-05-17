/** @type {import('next').NextConfig} */

// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
// The package "dom-to-image" has a dependency on "node-canvas"
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

module.exports = {
  reactStrictMode: true,
}
