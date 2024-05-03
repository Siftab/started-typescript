{
    //
    interface Developer<T, x> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: string

        }
        smartWatch: T,
        bike?: x
    }
    type midWatch = { brand: string, model: string, display: string }
    interface applewatch {
        brand: string,
        model: string,
        display: string,
        heartTrack: boolean,
        sleepTrack: boolean

    }
    const poorDeveloper: Developer<midWatch> = {
        name: "sifat",
        computer: {
            brand: "Asus",
            model: "xx",
            releaseYear: "2023"

        },
        smartWatch: {
            brand: "milab",
            model: "kw66",
            display: "oled"

        }
    }
    const ricjDeveloper: Developer<applewatch> = {
        name: "mr.rich",
        computer: {
            brand: "Apple",
            model: "xx",
            releaseYear: "2023"

        },
        smartWatch: {
            brand: "apple watch",
            model: "kw66",
            display: "oled",
            heartTrack: true,
            sleepTrack: true

        }
    }
    //
}