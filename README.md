
<style>
.heading1 {
    font-weight:700;
    font-size: 70px!important;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid green !important;}
.logo{
    width: 90px;
}


</style>


<h1 id="identifier" class="heading1">
    <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png">
    Angular
</h1>

- A UI component-based framework for building scalable applications.
- Provided collection of libraries to cover features like Routing and forms.

## Features of Angular
- Template
- Data binding
- Forms
- Routing
- Observable
- PWA



# Typescript
Angular uses typescript, which is javascript with types.
- Install node
- `npm init` to create a package.json
- install typescript `npm i typescript`
- initialize typescript
- `tsc --init` to create tsconfig.file.
- `tsc` to compile ts files int js.
- In the `tsconfig.ts` file uncomment the `outDir` property. it will enable to compile all ts files into the `outDir` directory.
- after enabling `outDir` property now if you compile all ts files. all those files will be stored in the `outDir` directory.

# SPA
Angular main purpose is to build SPA(single page applications) and PWA(progressive web applications).

What is SPA?
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



# Template syntax
### Create a Component
Create a component: ng generate/g component/c component-name
```javascript
ng g c rooms
```


## Binding Syntax
First, what is binding?

In programming, "binding" refers to the process of connecting a value to a variable or a reference to an object, so that the variable or reference can be used to access and manipulate the value or object. This is typically done through assignment statements, where a value or reference is assigned to a variable or reference. Once a value or reference is bound to a variable or reference, the binding is said to be "fixed" or "established".

- ## Interpolation
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
- ## Property binding
Assignment to a property of html element.
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
- ## Event binding

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
<hr style="background-color: gold"/>

# Directives

## Intro
- Directives are use to change the behavior and appearance of DOM element.
- Directives can implement all lifecycle hooks.
- Directives can not have template.


## Types
### 1. Structural Directives
Structural directives are directives that shape or reshape the DOM's structure by adding, removing, and manipulating elements. They are prefixed with an asterisk (*) in the template. Examples of structural directives are `*ngIf`, `*ngFor`and `*ngSwitch`. These directives allow you to conditionally render elements or repeat them based on some conditions, making the DOM dynamic and adaptable to changing data.

#### Example: *ngFor

Imagine you have a list of books in your component class like this:
```javascript
books = [  
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },  
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },  
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
    ];
```
You can use the ngFor directive in your HTML template to loop through the books array and display each book's title and author:

```javascript
<ul>
  <li *ngFor="let book of books">{{ book.title }} by {{ book.author }}</li>
</ul>
```

The result will be an unordered list with three list items, each displaying the title and author of a book:

```javascript
- The Great Gatsby by F. Scott Fitzgerald
- To Kill a Mockingbird by Harper Lee
- The Catcher in the Rye by J.D. Salinger
```
In this example, the ngFor directive is modifying the structure of the DOM by adding a list item for each book in the books array.

#### Example2: *ngIf
Imagine you have a boolean property `isLoggedIn` in your component class that determines whether the user is logged in or not:

```javascript
isLoggedIn = false;
```
You can use the ngIf directive in your HTML template to show or hide a welcome message based on the value of isLoggedIn:

```javascript
<div *ngIf="isLoggedIn">
  Welcome back!
</div>
```

If `isLoggedIn` is `false`, the welcome message won't be displayed. But if `isLoggedIn` is `true`, the welcome message will be displayed:

```javascript
Welcome back!
```


#### Example3: *ngSwitch

Imagine you have a string property color in your component class that holds one of several colors:

```javascript
color = 'red';
```
You can use the `ngSwitch` directive in your HTML template to display a message based on the value of `color`:

```html
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You have selected red</div>
  <div *ngSwitchCase="'blue'">You have selected blue</div>
  <div *ngSwitchCase="'green'">You have selected green</div>
  <div *ngSwitchDefault>Invalid color selected</div>
</div>
```

In this example, the `ngSwitch` directive is modifying the structure of the DOM by adding or removing elements based on the value of color. If `color` is 'red', the message "You have selected red" will be displayed. If `color` is not 'red', 'blue', or 'green', the message "Invalid color selected" will be displayed.


#### Note: In Angular, you can use the ternary operator to conditionally render a value in the template. The ternary operator is a shorthand for an if statement and is written as condition ? expression1 : expression2.

Here's an example of how you could use the ternary operator in Angular to display a message based on whether the user is logged in or not:


```javascript
<p>{{ isLoggedIn ? 'Welcome back!' : 'Please log in' }}</p>
```
### Difference between ternary operator and *ngIf Directive
The *ngIf directive and the ternary operator are both used to conditionally render elements in an Angular template, but they serve different purposes and have different syntax and behavior.

*ngIf is a structural directive, which means it modifies the structure of the DOM by adding or removing elements based on a condition.

The *ngIf directive is used to conditionally render an element, and the element and its content will only be displayed if the condition is true. If the condition is false, the element and its content will be removed from the DOM.

The ternary operator, on the other hand, is a shorthand for an if statement and is used to conditionally render a value in the template.


**In summary, `*ngIf` is used to conditionally render elements, and the `ternary operator` is used to conditionally render values. Both are useful for controlling the display of content based on conditions, but they have different syntax and behavior.**

### 2.  Attribute Directives
Attribute Directives are directives that add or modify the behavior and appearance of an element by adding or changing the value of its attributes. They are used to apply dynamic styles, classes, or behavior to an element based on the values of a specified property. Examples of attribute directives include `ngClass`, `ngStyle`, and `ngModel`.

#### ngClass: 
This directive allows you to dynamically bind CSS classes to an element based on the values of an expression. For example:

```html
<!-- isHighlighted is a class in the html component -->
<div [ngClass]="{'highlight': isHighlighted}"></div>
```
In this example, the class "highlight" will be added to the div element if the value of `isHighlighted` is `true`.

#### gStyle: 
This directive allows you to dynamically bind inline styles to an element based on the values of an expression. For example:

```html
<div [ngStyle]="{'background-color': backgroundColor}"></div>
```
In this example, the inline style `background-color` will be set to the value of `backgroundColor` for the div element.

#### ngModel: 
This directive is used to bind the value of an input element to a property on the component. For example:

```html
<input [(ngModel)]="name">
```

In this example, the value of the input element will be two-way bound to the name property of the component.


```javascript
<!-- In the HTML template -->
<input [(ngModel)]="name">

// In the component class
export class MyComponent {
  name: string;

  constructor() {
    this.name = '';
  }
}
```
In this example, the `input` element is bound to the `name` property of the component using the `ngModel` directive. **The square brackets [] indicate one-way binding from the component to the template, and the parentheses () indicate one-way binding from the template to the component.** Together, they form a two-way binding, so any changes to the input element will be reflected in the `name` property, and vice versa.

Here's how the example works:

When the user types into the input field, the value of the name property on the component will be updated with the new value, since the two-way binding updates the `name` property whenever the input value changes.

Conversely, if the `name` property is updated in the component (for example, as a result of an event handler), the value displayed in the input field will automatically update, since the two-way binding updates the input value whenever the `name` property changes.


# Pipes

In Angular, pipes are used to transform the output of an expression before it is displayed in the template. They are a simple way to format and display data in a user-friendly way, and can be used to perform tasks such as formatting dates, currencies, percentages, and so on.

Pipes are denoted in templates using the "|" symbol, followed by the pipe name. For example:

```javascript
{{ currentDate | date }}
```

In this example, the `date` pipe is used to format the `currentDate` expression as a `date`.

Angular provides several built-in pipes, such as `date`, `currency`, `uppercase`, `lowercase`, etc. You can also create custom pipes to handle specific transformation requirements that are not covered by the built-in pipes.

Here's an example of using the currency pipe to format a value as currency:


```javascript
<!-- In the HTML template -->
Price: {{ price | currency }}

// In the component class
export class MyComponent {
  price: number;

  constructor() {
    this.price = 29.99;
  }
}
```

In this example, the `price` value is displayed as `currency` (e.g. "$29.99") in the template, thanks to the `currency` pipe. The default `currency` symbol and format is determined by the default locale of the browser, but you can also specify a custom currency code as a parameter to the pipe, like this: `{{ price | currency: 'EUR' }}` to display the value in Euro currency format.

## Built-in Pipes
This is a list of some built-in pipes:

- **async**: used to unwrap a value from an asynchronous data source.
- **date**: used to format a date value.
- **upperCase**: used to format a string value as uppercase.
- **lowerCase**: used to format a string value as lowercase.
- **titleCase**: used to format a string value as title case.
- **currency**: used to format a number as currency.
- **percent**: used to format a number as a percentage.
- **json**: used to convert a value to JSON string.
- **slice**: used to extract a part of an array or a string. the general case for slice is pagination.
- **decimal**: used to format a number as a decimal.
- **number**: used to format a number as text with a specified number of digits.



# ngx-bootstrap
we will be using [`ngx-bootstrap`](https://valor-software.com/ngx-bootstrap/#/)
for styling purposes.



# Communication between parents and child components

```html
<parent-component>
  <child-component></child-component>
</parent-component>
```

The `<parent-component>` serves as the context for the `<child-component>`.

`@Input()` and `@Output()` give a child component a way to communicate with its parent component. `@Input()` lets a parent component update data in the child component. Conversely, `@Output()` lets the child send data to a parent component.
and then pass the `@Input()` property to the child component tag where it is located in the parentComponent, as a property binding.

If we start to speak in terms of `ReactJs`, `@Input` is like using `props`.

### Example: Sending data to a child component using @Input

```javascript
//parent-component: rooms.component.ts
import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})



export class RoomsComponent {

  hotelName: string = "Hilton hotel"
  numberOfRooms: number = 50

  hideRooms:boolean = false;

  rooms: Room = 
  { availableRooms: 25,
    bookedRooms: 23,
    totalRooms: 50,
  }

  toggle(){
    this.hideRooms = !this.hideRooms; //toggle the value
  }

  //roomsList data
  roomsList: RoomList[] = [...]
}





//childComponent: rooms-list.components.ts
import { Component, Input } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {

  @Input() rooms: RoomList[] = [];
}



//parentComponent: rooms.components.html
<div *ngIf="rooms.availableRooms >0 ">
    Room List:
    <app-rooms-list [rooms]="roomsList"></app-rooms-list>>
</div>
```


### Example: Sending Data Form Child to Parent Components using @Output

```javascript
//childComponent: rooms-list.components.
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  selectRoom (room: RoomList){
    this.selectedRoom.emit(room)
  }
}

//rooms-list.components.html
<table class="table">
    <tr>
        <th>Index</th>
        <th>Even/Odd</th>
        <th>Room Number</th>
        <th>Room Type</th>
        <th>Room Price</th>
        <th>Room Amenities</th>
        <th>Check-in Time</th>
        <th>Check-out Time</th>
        <th>Select Room</th>
    </tr>

    <tr
    *ngFor="let room of rooms; let e = even; let o=odd; let i= index"
    [ngClass]="e ? 'even': 'odd'">
        <td>{{i+1}}</td>
        <td>{{e}}</td>
        <td>{{room.roomNumber | number}}</td>
        <td>{{room.roomType | titlecase }}</td>
        <td>{{room.price | currency: "USD"}}</td>
        <td>{{room.amenities | lowercase}}</td>
        <td>{{room.checkInTime | date: "short"}}</td>
        <td>{{room.checkOutTime | date: "short"}}</td>
        <td>
            <button 
                type="button" 
                class="btn btn-primary"
                (click)="selectRoom(room)"
                >
                Select Room
            </button>
        </td>
    </tr>
</table>





//parentComponent: rooms.component.ts:
//add below method:
  selectRoom (room:RoomList){
    console.log(room)
  }


//rooms.component.html
<!-- Using trinary operation in Angular -->
{{rooms.availableRooms && "rooms are available" }}

<div *ngIf="rooms.availableRooms >0 ">
    Room List:
    <app-rooms-list 
    [rooms]="roomsList"
    (selectedRoom)="selectRoom($event)"
    ></app-rooms-list>
</div>

```

In the above example, the `EventEmitter` class is part of the` @angular/core` module and is used to `emit` custom events from a component or directive to its parent component. It's commonly used to pass data and trigger actions in the parent component based on events that occur in the child component.

A child component can `emit` an event by calling the `emit` method on its instance of `EventEmitter`. The parent component can listen to the event by using the `(eventName)` syntax in the template, where eventName is the name of the event to listen for. In the parent component's class, a method can be specified to handle the event when it occurs.


# Change Detection
Before I explain what change detection is, I wanted to say that in React, the equivalent of change detection is called re-rendering or updating component tree.
Change detection in Angular is the mechanism that Angular uses to detect and update the component views when the data changes. Angular provides two change detection strategies:

## Default change detection: 
Angular uses this strategy for most applications. It runs change detection for the entire component tree(from app-root to the last component) every time something changes. It's fast, efficient, and easy to understand, but can lead to performance issues for larger applications.

## OnPush change detection: 
This strategy only runs change detection for a component and its children when the component's inputs change. To use this strategy, you need to set the changeDetection property of the component's @Component decorator to `ChangeDetectionStrategy.OnPush`. This strategy is more performant than the default strategy, but requires more setup and can lead to unexpected behavior if not used correctly.

The change detection process involves checking the component's inputs and template expressions to see if they have changed. If they have, Angular updates the component's view to reflect the changes. If they haven't changed, Angular skips the component and its children.

By understanding change detection and choosing the right strategy, developers can improve the performance and scalability of their Angular applications.


### Example

let's add a button in the rooms.component.html

```javascript
<div>
    <button
    (click)="addRoom()"
    >
        add new room
    </button>
</div>
```

now add the method in the rooms.component.ts

```javascript
  addRoom(){
    const room: RoomList = 
      {
        roomNumber:10,
        roomType: "new Deluxe Room",
        amenities: "Air Conditioner, Free Wifi",
        price: 400,
        photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        checkInTime: new Date('11-Feb-2023'),
        checkOutTime: new Date('18-Feb-2023')
      }
      
      this.roomsList.push(room);
  }
```
Now when we click on the button, new row is added.


**let's use `ChangeDetectionStrategy` to room.list.component**

```javascript
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

and when we click on the button. it won't work (adding new room) why? It is because when we set `changeDetection: ChangeDetectionStrategy.OnPush` in the child component, while the data is coming from outside, it won't let the data get **mutated**. As we can see in the above example we were mutating the `roomsList` with `this.roomsList.push(room)`, which we shouldn't. so to solve this issue, we need to use mutating data using:

```javascript
this.roomsList = [...this.roomsList, room]
```

Now it will work, why because the we avoid mutating started working. on immutability which is supported by the child component.



# Lifecycle Hooks
during the lifecycle of a component or directive. These hooks are called at specific times during the creation, update, and destruction of a component. They allow you to run custom logic or perform operations at key points in the lifecycle of a component.

Here's a list of some of the common lifecycle hooks in Angular:

1. `ngOnChanges`: called when an input or output binding value changes.
2. `ngOnInit`: called once, after the first ngOnChanges hook. 
3. `ngDoCheck`: called during every change detection cycle.
4. `ngAfterContentInit`: called after a component's content has been fully initialized.
5. `ngAfterContentChecked`: called after a component's content has been checked by Angular.
6. `ngAfterViewInit`: called after a component's view has been fully initialized.
7. `ngAfterViewChecked`: called after a component's view has been checked by Angular.
8. `ngOnDestroy`: called just before a component is destroyed.


You can implement any of these hooks in your component or directive class by defining a method with the same name as the hook. For example, you can implement the `ngOnInit` hook like this:


```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `...`
})
export class MyComponent implements OnInit {
  ngOnInit() {
    // Your logic here
  }
}
```

In this example, the `MyComponent` class `implements` the `OnInit` interface and defines an `ngOnInit` method. This method will be called by Angular once, after the first ngOnChanges hook, and can be used to perform any initialization logic for the component.


Now, let's explain each of the hook:

## 1. ngOnChanges

`ngOnChanges` is a lifecycle hook in Angular that is called whenever changes are made to input properties of a component. This method is called before `ngOnInit` and is used to handle any updates or changes to the component's inputs.

The `ngOnChanges` method receives an object called `SimpleChanges` that contains the current and previous values of the changed inputs. Here's an example:

```javascript
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <p>Previous value: {{ previousValue }}</p>
    <p>Current value: {{ currentValue }}</p>
  `
})
export class ExampleComponent implements OnChanges {
  @Input() value: any;

  previousValue: any;
  currentValue: any;

  ngOnChanges(changes: SimpleChanges) {
    this.previousValue = changes.value.previousValue;//changes.['value'].previousValue
    this.currentValue = changes.value.currentValue;//changes.['value'].currentValue
  }
}
```

This example defines a component called `ExampleComponent` that `implements` the `OnChanges` lifecycle hook. The component has an Input property called `value`, which is decorated with the @Input decorator. The `value` property is a data input that can be passed to the component from its parent component.

The component template consists of two paragraphs that display the previous and current values of the value input property. The previous and current values are displayed using interpolation, which is denoted by double curly braces ({{ }}).

The `ngOnChanges` method is defined in the ExampleComponent class and receives a single argument called changes. The changes argument is of type `SimpleChanges`, which is an object that contains the current and previous values of the changed inputs.

The `ngOnChanges` method updates the previousValue and currentValue properties with the values of the value input property. The previousValue property is set to changes.value.previousValue, and the currentValue property is set to changes.value.currentValue.

The `ngOnChanges` method is called by Angular whenever changes are made to input properties of the component. This means that whenever the value of the value input property is updated, the `ngOnChanges` method will be called and the previousValue and currentValue properties will be updated with the new values. The updated values will then be displayed in the template.

#### For React Developers:
In React, there is no direct equivalent to the `ngOnChanges` lifecycle hook in Angular. However, you can achieve similar functionality in React by using the `useState` and `useEffect` hooks.

The `useState` hook is used to manage the component's state, and the `useEffect` hook is used to perform side effects in response to changes in state or props.

Here's an example of how you could implement the equivalent of ngOnChanges in React:


```javascript
import React, { useState, useEffect } from 'react';

const Example = (props) => {
  const [previousValue, setPreviousValue] = useState(props.value);
  const [currentValue, setCurrentValue] = useState(props.value);

  useEffect(() => {
    setPreviousValue(currentValue);
    setCurrentValue(props.value);
  }, [props.value]);

  return (
    <>
      <p>Previous value: {previousValue}</p>
      <p>Current value: {currentValue}</p>
    </>
  );
};
```

## 2. ngOnInit
The `ngOnInit` method is a lifecycle hook method that is defined in a component class. This method is automatically invoked by Angular after the component and its inputs have been initialized. It can be used to perform any necessary setup or configuration for the component after it has been created. This can include setting default values for component properties, setting up data bindings, or calling an API to fetch data. The goal of configuration is to get the component into a state where it is ready to display data and respond to user interactions. Configuration typically involves initializing component properties, setting up subscriptions to data sources, or performing any other setup that is required for the component to function properly.

Here is an example of how the ngOnInit method might be used to perform configuration for a component:

```javascript
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  data: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
```

#### For React Developers:
**The concept of `ngOnInit` hook is the same concept of `useEffect` with an empty array in React.**



## 3. ngDoCheck
`ngDoCheck` is a lifecycle hook in Angular that is called during every change detection cycle. It is used to perform custom change detection, which can be useful when the Angular default change detection mechanism is not sufficient for detecting changes in your component or directive.

The `ngDoCheck` hook is called before Angular performs its own internal change detection (`ngOnChange`), and it provides a way for you to check for changes in your component and take action accordingly. For example, you might use it to compare the previous and current values of a property and perform some action if they have changed.

So, basically the difference between `ngDoCheck` and `ngOnChange` is that, `ngDoCheck` will run when whatever event is triggered/raised and it doesn't matter wherever it is located in the entire application, also it doesn't matter if the previous and current values of properties are same, it will still run. This is very costly.

However, `ngOnChange` runs only on @Input detractor, plus the previous and current values of @Input must be different, if they are same, it won't run.

Here is an example of how you could use the ngDoCheck lifecycle hook in an Angular component:

```javascript
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    {{message}}
  `
})
export class ExampleComponent implements OnInit, DoCheck {
  message = 'Hello World';
  previousMessage = '';

  ngOnInit() {
    this.previousMessage = this.message;
  }

  ngDoCheck() {
    if (this.message !== this.previousMessage) {
      console.log('message has changed');
      this.previousMessage = this.message;
    }
  }
}
```
In this example, the `ngDoCheck` hook is used to detect changes in the message property, and it logs a message to the console if the value has changed.

#### For React Developers:
There is no alternative to `ngDoCheck` in React, because in react hooks only runs on component lifecycle.



## 4. ngAfterViewInit
Basically, `ngAfterViewInit` lifecycle hook is used to log the `child` component after it has been initialized and its view has been created.

How to access child component...

### @ViewChild
`ViewChild` is a decorator in Angular that is used to access a child component, directive or a DOM element within the parent component. This decorator allows you to access the properties and methods of the child component and manipulate them as needed.

For example, consider the following template:

```javascript
<app-child #childComponent></app-child>
```

the above line is a template for the parent component. It creates an instance of the ChildComponent and associates it with a template reference variable `#childComponent`.

A template reference variable is a reference to a DOM element or a directive within a template. In this case, the template reference variable `#childComponent` refers to an instance of the ChildComponent. This reference can then be used in the component's class to access the properties and methods of the ChildComponent instance.

You can access the ChildComponent in your parent component's class like this:

```javascript
import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <app-child #childComponent></app-child>
  `
})


export class ParentComponent {
  @ViewChild('childComponent') child: ChildComponent;

  ngAfterViewInit() {
    console.log(this.child);
  }
}
```

the `@ViewChild` decorator is used to access the `ChildComponent` instance with the reference name `'childComponent'` and store it in the child property. The `ngAfterViewInit` lifecycle hook is used to log the child component after it has been initialized (all its methods and properties have been executed.) and its view has been created.

Another example:

```javascript
```

## 5. ngAfterViewChecked
`ngAfterViewChecked` is a lifecycle hook in Angular that is called after Angular has completed the check of a component's views and child views. This hook is called after every check of the component's views and child views, including the initial check.

This hook can be used to perform any operations that need to be done after the view has been checked and updated. For example, you can use it to trigger an update in the component's logic based on the values of the view or to check if the view has changed and react accordingly.

It is important to note that `ngAfterViewChecked` is called after every change detection cycle, so if you have any operations that are performed frequently, it is recommended to optimize them to avoid unnecessary execution.

Here is an example of how `ngAfterViewChecked` can be used in a component:


```javascript
import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <p>{{ message }}</p>
  `
})
export class MyComponent implements AfterViewChecked {
  message = 'Initial message';

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.message = 'The view has been checked and updated';
    this.changeDetector.detectChanges();
  }
}
```

In this example, the `ngAfterViewChecked` hook is used to update the value of the message property and to trigger a change detection cycle to update the view.


## ng-template

what if I want to render child dynamically, rather than mentioned it in the parent template...