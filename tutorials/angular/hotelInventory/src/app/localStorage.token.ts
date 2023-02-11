import { InjectionToken } from '@angular/core';


export const  localStorageToken = new InjectionToken<any> ("local storage", {
    providedIn: "root",
    factory() { //nothing but return a new instance of localStorage.
        return localStorage
    },
})