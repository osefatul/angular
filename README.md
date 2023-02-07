# Angular
- A UI, component-based framework for building scalable applications.
- Provided collection of libraries to cover features like Routing, Forms.

## Features of Angular
- Template
- Data binding
- Forms
- Routing
- Observable
- PWA


## Typescript
- Install node
- `npm init` to create a package.json
- install typescript `npm i typescript`
- initialize typescript
- `tsc --init` to create tsconfig.file.
- `tsc` to compile ts files int js.
- In the `tsconfig.ts` file uncomment the `outDir` property. it will enable to compile all ts files into the `outDir` directory.
- after enabling `outDir` property now if you compile all ts files. all those files will be stored in the `outDir` directory.

## SPA
- SPA doesn't make request to server for every URL request.
- Angular has routing functionalities to create SPA.
- Angular also offers SSR(server side rendering) which supports SPA.

## Angular crash course:
- install angular cli:

    ```javascript
        npm i @angular/cli -g
    ```
    or to use `npx` to avoid having global version.

- to check angular version:
    ```javascript
    ng version
    ```

- to create a new angular workspace
    ```javascript
    ng new hotel-inventory
    ```