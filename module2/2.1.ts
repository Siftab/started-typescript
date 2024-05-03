{
    let anyThing: any;
    anyThing = "next level web development ";
    console.log(typeof (anyThing as number)
    )
    // anyThing.
    // type demo = (x: string | number) => any
    const kgTOGram = (value: string | number) => {
        if (typeof value === "string") {
            return ` stringi value ${parseFloat(value) * 1000}`
        }
        if (typeof value === "number") {
            return value * 1000

        }

    }

    const result1 = kgTOGram("1000") as string
    const result2 = kgTOGram(1000) as number
    console.log(result1)
}

