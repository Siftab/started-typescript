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
        addBalance(ammount: number) {
            this._balance = this._balance + ammount


        }
        showBalance() {
            return this._balance
        }
    }

    const goribManus = new BankAccount(112, "sifat", 20)
    goribManus
    console.log(goribManus.showBalance())
    class Roktim extends BankAccount {


    }

}
