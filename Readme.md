Process
 501  cd backend/
  502  npm init -y
  503  npm i express cors dotenv mongodb mongoose

npm i ts-node typescript nodemon @types/express @types/cors @types/node --save-dev

main ./src/index.ts
initiate typescript config file
npx tsc --init

nodemon not working with ts files
I've recreated the nodemon.json file with the proper configuration for TypeScript ESM support. This configuration will:
Watch the src directory for changes
Monitor .ts file extensions
Use the ts-node/esm loader to handle TypeScript files in ESM mode
Now npm run dev should work correctly without the "Unknown file extension .ts" error.

Perfect! I've updated the nodemon.json to use the newer --import=ts-node/esm syntax instead of the deprecated --loader flag. This should eliminate the experimental warning you were seeing.

  "exec": "node --loader ts-node/esm ./src/index.ts"
  new
  "exec": "node --import=ts-node/esm ./src/index.ts"



FRONTEND

vite
shadcn/ui
tailwind for styling


Install shadcn by following all the steps in the url below
Using vite
https://ui.shadcn.com/docs/installation/vite

To add a component like Button - 
We can add go to the components section and follow the steps
https://ui.shadcn.com/docs/components
https://ui.shadcn.com/docs/components/button


Still getting
[nodemon] starting `node --import=ts-node/esm ./src/index.ts`
TypeError: Unknown file extension ".ts" for /Users/shrinath.potul/Documents/testin/food-ordering-app/mern-food-ordering-app/backend/src/index.ts

Perfect! I've added the necessary ts-node configuration to your tsconfig.json. The "esm": true setting tells ts-node to explicitly handle TypeScript files in ESM mode.
Now try running npm run dev again - this should resolve the "Unknown file extension .ts" error. The combination of:
"type": "module" in package.json
ts-node ESM configuration in tsconfig.json
--import=ts-node/esm in nodemon.json
Should now properly handle TypeScript files in ESM mode.

Still not giving the same error
Use node 18 version as suggested below
https://stackoverflow.com/questions/76725253/ts-node-and-esm-unknown-file-extension-ts

For frontend using nvm 23 version
For backend using nvm 18 version


npx shadcn@latest add sheet
Using sheet component for right panel opening and closing

npm i lucide-react
for hamburger icon

separator component from shadcn for separator

Sheet component has SheetTrigger, SheetContent, Sheettitle and Sheet description