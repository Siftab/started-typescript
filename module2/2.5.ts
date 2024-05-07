{

    // function with generics
    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param]
    }
    interface user {
        name: string;
        age: number
    }
    const res1 = createArrayWithGenerics<string>("sifat")
    const resObj = createArrayWithGenerics<user>({
        name: "zahid",
        age: 55
    })
}