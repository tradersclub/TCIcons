rm -rf src/components
rm -rf ./lib
mkdir src/components
echo "export default {}" > src/components/index.js
tsc && cp ./src/svg/*.svg ./lib/svg
npx @svgr/cli src/svg --config-file svgr.config.js -d src/components
node scripts/generate.js
