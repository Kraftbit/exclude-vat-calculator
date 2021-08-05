// main calculator functionality
window.calculator = function () {
    return {

        amount: '',
        vat: '',
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
                    type: this.type == '0' ? '<span class="text-red-500">- VAT</span>' : '<span class="text-green-500">+ VAT</span>',
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
                return parseFloat(parseFloat(parseFloat(this.amount) / parseFloat(this.vat / 100 + 1) - parseFloat(this.amount) ) * parseInt(-1)).toFixed(2);
            }

            if(this.type == '1') {
                return parseFloat((parseFloat(this.amount) / 100) * parseFloat(this.vat)).toFixed(2);
            }
        },

        result() {
            if(this.type == '0') {
                return  parseFloat(parseFloat(this.amount) - parseFloat(parseFloat(parseFloat(this.amount) / parseFloat(this.vat / 100 + 1) - this.amount ) * parseInt(-1)) ).toFixed(2);
            }

            if(this.type == '1') {
                return parseFloat((parseFloat(this.amount) / 100) * parseFloat(this.vat) + parseFloat(this.amount)).toFixed(2);
            }
        }

    }
}