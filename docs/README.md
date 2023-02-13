# Reactive programming

Reactive programming is a programming paradigm that involves designing systems that respond to changes in the input data. It's called "reactive" because the output of the system reacts to changes in the input over time.


## Case Scenario: Calculator

Imagine you have a calculator that takes two numbers as input and calculates their sum. In a traditional, non-reactive programming approach, you might write a function that takes two numbers as arguments, adds them together, and returns the result.

In a reactive programming approach, you would instead create an observable that represents the two numbers, and another observable that represents the sum. Whenever either of the input numbers changes, the sum is automatically re-calculated and the result is updated.

In this way, the output of the system (the sum) is always in sync with the input (the two numbers), and the calculation is performed automatically whenever the input changes. This is the core idea behind reactive programming.

Reactive programming is commonly used in event-driven systems, where the output is reactive to user inputs, network events, or other dynamic sources of data. It can also be used in other contexts where you want to build systems that are dynamic and responsive to changes in the input data.


## Case Scenario: Stock/Crypto ticker
A real-world example of reactive programming is a stock ticker app that updates in real-time as the stock prices change.

Imagine you have a list of stocks and their prices. In a traditional, non-reactive approach, you might write a function that fetches the latest stock prices from a server, and updates the display whenever the user refreshes the page.

In a reactive programming approach, you would create an observable that represents the list of stocks, and another observable that represents the updated prices. Whenever the prices change on the server, the app would automatically update to show the new prices, without requiring any action from the user.

In this way, the display of the stock prices is always up-to-date and in sync with the latest data from the server, without the user having to manually refresh the page. This is a simple example of how reactive programming can be used to build dynamic, responsive systems that update automatically in response to changes in the input data.

## How can we write Reactive programming
Reactive programming can be implemented in JavaScript using several libraries, such as `RxJS`, `MobX`, and `Cycle.js`.

One of the most popular libraries for implementing reactive programming in JavaScript is RxJS, which stands for Reactive Extensions for JavaScript. It provides a powerful set of tools for working with observables and building reactive systems.

Here's a simple example of how you might use RxJS to implement a reactive program in JavaScript:

```javascript
const { of } = require('rxjs');
const { map, filter } = require('rxjs/operators');

// Create an observable that emits a sequence of numbers
const numbers$ = of(1, 2, 3, 4, 5);

// Use the `map` operator to transform the numbers
const doubled$ = numbers$.pipe(
  map(x => x * 2)
);

// Use the `filter` operator to only keep even numbers
const even$ = doubled$.pipe(
  filter(x => x % 2 === 0)
);

// Subscribe to the observable to start the reactive stream
even$.subscribe(x => console.log(x));

// Output: 4, 8
```

In this example, we create an observable `numbers$` that emits a sequence of numbers, and then use the `map` operator to double each number. Next, we use the filter operator to only keep the even numbers, and finally we `subscribe` to the resulting observable even$ to start the reactive stream.

When you run this code, you'll see that the subscriber function is called with the values 4 and 8, which are the even, doubled numbers from the sequence.

This is just a simple example, but it illustrates the basic idea behind reactive programming in JavaScript. With RxJS, you can create complex, reactive systems by combining and transforming observables, and responding to changes in the input data over time.