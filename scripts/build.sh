#/bin/sh
rm -rf src/components
mkdir src/components
node scripts/generate.js
rm -rf ./lib
tsc && cp ./src/svg/*.svg ./lib/svg
