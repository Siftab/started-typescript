{
    // Promise
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = false
            if (data) {
                resolve(data)

            }
            else {
                reject("failed with systems ")
            }
        })

    }
    const showData = async () => {
        const data = await createPromise();
        console.log(data)
    }
    showData()
}