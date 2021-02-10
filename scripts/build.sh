rm -rf src/components
rm -rf ./lib
mkdir src/components
echo "export default {}" > src/components/index.js
tsc && cp ./src/svg/*.svg ./lib/svg
node scripts/generate.js
