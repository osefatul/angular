# RxJs (Reactive Extension API for JavaScript)
## `from` method:
`from` method converts data to observable object.

#### Convert Array to Observable:
```javascript
postArray = [
    {title: "post1", desc: "post1 description"},
    {title: "post2", desc: "post2 description"},
    {title: "post3", desc: "post3 description"}
]

postArrayObservable$ = from (this.postArray);

constructor(){
    this.postArrayObservable$.subscribe({
        next: (data) console.log(data),
        error: (err) console.log(err),
        complete: () => console.log("complete")
    })
}
```

#### Convert Promise to Observable:

```javascript
promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("resolve this promise, sending Data")
    },2000)
})

promiseObservable$ = from (this.promise);

constructor(){
    this.promiseObservable$.subscribe({
        next: (data) console.log(data),
        error: (err) console.log(err),
        complete: () => console.log("complete")
    })
}
```

#### Convert DOM event to Observable:

`fromEvent` is used to subscribe to DOM events.


```html
<button href="#" id="click-button">Click</button>
```

```javascript
ngAfterViewInit(){
    fromEvent(document.getElementById("click-button")!, "click").subscribe({
        next: (data) console.log(data),
        error: (err) console.log(err),
        complete: () => console.log("complete")
    })
}
```


##