import { attr } from "svelte/internal";

export function fuseAttributes(id : string, attributes: object){
    // let element: HTMLElement = document.getElementById(id)!;                 // ! means i am sure element won't get a null value
    let element: HTMLElement | null | undefined = document.getElementById(id);  // assigned type depending on return value, above is simpler to use.
    if ( element == null){
        console.log("Trying to fuse attributes to " + id + ", but it is null or undifined!");
    }

    for ( const [key, attribute] of Object.entries(attributes)){
        element?.setAttribute(key, attribute);
    }
}