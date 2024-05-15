{
    class BankAccount {
        readonly id: number;
        name: string
        protected _balance: number
        constructor(id: number, name: string, _balance: number) {
            this.id = id,
                this.name = name,
                this._balance = _balance

        }
        // addBalance(ammount: number) {
        //     this._balance = this._balance + ammount


        // }
        // showBalance() {
        //     return this._balance
        // }
        set deposit(ammount: number) {
            this._balance = this._balance + ammount
        }
        get Balance() {
            return this._balance
        }
    }

    const gorib = new BankAccount(11, "sifat", 445)
    gorib.deposit = 44
    console.log(gorib.Balance)
}