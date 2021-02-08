rm -rf src/components
rm -rf ./lib
mkdir src/components
tsc && cp ./src/svg/*.svg ./lib/svg
node scripts/generate.js
cp ./src/components/* ./lib/components

npx @svgr/cli src/svg --config-file svgr.config.js -d src/components
