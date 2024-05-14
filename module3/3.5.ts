{

    class BankAccount {
        readonly id: number;
        name: string
        balance: number
        constructor(id: number, name: string, balance: number) {
            this.id = id,
                this.name = name,
                this.balance = balance

        }
    }

    const goribManus = new BankAccount(112, "sifat", 20)
    goribManus.balance = 520
    console.log(goribManus)
}