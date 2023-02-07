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

## Angular Installation:
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
    ng new hotelinventory
    ```

## Introduction to mono-repo
- create and maintain multiple apps in the same repo.
- Use libraries within the project.
- Deploy multiple apps/libs from same repo
- Easy to share code within project.

## app repository introduction.
- In angular everything is class and `app.module.ts` is the root module, which will have all the information that we create.

- @NgModule: In Angular, decorators are used to add metadata to classes, properties, and methods. They provide a way to add additional behavior or modify the behavior of a class, property, or method without having to change its code. and it starts with @

- so, in app/app.module.ts file, @NgModule is a decorator

```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```
- This @NgModule will have all the information about different components and different angular modules which is being used or any module which we have created by your own. and give all these info to compilers.

- Any component, directive and pipe needs to be registered by declarations.

```javascript
    declarations: [
    AppComponent
    ],
```

- `bootstrap: [AppComponent]`: once we compile all the files, our angular application needs to know that which component will be loaded first. so in our case it will be `AppComponent` which is in `app/app.component.ts`.

- whenever we create a component, we will get four files.
    - something.component.ts
    - something.component.html
    - something.component.scss
    - something.component.spec.ts


- Component:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
  `
})
export class AppComponent {
  title = 'Hello, World!';
}
```

- In the above example, we're using the @Component decorator to define the behavior of our component. The @Component decorator takes an object literal with properties that describe the component, such as the selector and template.

The AppComponent class is decorated with the @Component decorator, which adds metadata to the class that Angular uses to create and render the component. In this example, the component has a title property and displays its value in the template.



## Template syntax
### Create a Component
Create a component: ng generate/g component/c component-name
```javascript
ng g c rooms
```


### Binding Syntax
First, what is binding?

In programming, "binding" refers to the process of connecting a value to a variable or a reference to an object, so that the variable or reference can be used to access and manipulate the value or object. This is typically done through assignment statements, where a value or reference is assigned to a variable or reference. Once a value or reference is bound to a variable or reference, the binding is said to be "fixed" or "established".

- **Interpolation**
```javascript

//rooms.components.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = "Hilton hotel"
}

//rooms.component.html
<h1 class="content" role="main">
    hello world, welcome to {{hotelName}}
</h1>
```
- **Property binding**
assignment to a property of html element.
```javascript
export class RoomsComponent {

  hotelName: string = "Hilton hotel"
  numberOfRooms: number = 50
}

//rooms.component.html
<h1 class="content" role="main">
    hello world, welcome to {{hotelName}}
</h1>
    

Number of Rooms
<div 
[innerText]="numberOfRooms"
>
</div>
```

- **Event binding**
Hide div

```javascript

//app.components.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName: string = "Hilton hotel"
  numberOfRooms: number = 50

  hideRooms:boolean = false;

  toggle(){
    this.hideRooms = !this.hideRooms; //toggle the value
  }
}




//rooms.components.html
<h1 class="content" role="main">
    hello world, welcome to {{hotelName}}
</h1>
    

<div [hidden]= "hideRooms">
    Number of Rooms
    <div 
    [innerText]="numberOfRooms"
    >
    </div>
</div>

<button (click)="toggle()">
    Toggle
</button>

```