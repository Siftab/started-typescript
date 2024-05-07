{
    // Promise
    interface something {
        something: string
    }
    const createPromise = () => {
        return new Promise<{ something: string }>((resolve, reject) => {
            const data: { something: string } = { something: "something" }
            if (data) {
                resolve(data)

            }
            else {
                reject("failed with systems ")
            }
        })

    }
    const showData = async (): Promise<something> => {
        const data = await createPromise();
        console.log(data)
        return data
    }
    showData()
    const getTodos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos ')
        const data = await res.json()
        console.log(data)
    }
    getTodos()
}