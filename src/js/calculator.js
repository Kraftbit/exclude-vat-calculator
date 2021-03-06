// main calculator functionality
window.calculator = function () {
    return {
        amount: '',
        get amountValue() {
            return Number(this.amount);
        },
        vat: '',
        get vatPercentage() {
            return Number(this.vat);
        },
        type: '0',
        emptyData: '',

        data: [],

        isAllSet(){
            if (this.vat !== '' && this.amount !== '' && this.type !== '') {
                this.emptyData = false;
                return true;
            }
            this.emptyData = true;
            return false;
        },

        getData() {
            if(this.isAllSet()){
                this.data.unshift({
                    amount: this.amount,
                    vat: this.vat,
                    type: this.type == '0' ? '<span class="text-red-500 text-xs">-VAT</span>' : '<span class="text-green-500 text-xs">+VAT</span>',
                    vatValue: this.vatValue(),
                    result: this.result()
                })
    
                this.amount = '';
                this.emptyData = '';
                this.results = '';
            }
            
        },

        vatValue() {
            if(this.type == '0') {
                return parseFloat((this.amountValue / (this.vatPercentage / 100 + 1) - this.amountValue) * parseInt(-1)).toFixed(2)
            }

            if(this.type == '1') {
                return parseFloat((this.amountValue / 100) * this.vatPercentage).toFixed(2);
            }
        },

        result() {
            if(this.type == '0') {
                return  parseFloat(this.amountValue - ((this.amountValue / (this.vatPercentage / 100 + 1) - this.amountValue) * parseInt(-1)) ).toFixed(2);
            }

            if(this.type == '1') {
                return parseFloat((this.amountValue / 100) * this.vatPercentage + this.amountValue).toFixed(2);
            }
        }

    }
}