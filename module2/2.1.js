"use strict";
{
    let anyThing;
    anyThing = "next level web development ";
    console.log(typeof anyThing);
    // anyThing.
    // type demo = (x: string | number) => any
    const kgTOGram = (value) => {
        if (typeof value === "string") {
            return ` stringi value ${parseFloat(value) * 1000}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgTOGram("1000");
    const result2 = kgTOGram(1000);
    console.log(result1);
}
