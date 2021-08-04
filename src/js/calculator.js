// main calculator functionality
window.calculator = function () {
    return {

        amount: '',
        vat: '',
        type: 0,
        emptyData: '',

        calculations: [],

        isAllSet(){
            if (this.vat !== '' && this.amount !== '' && this.type !== '') {
                this.emptyData = false;
                return true;
            }
            this.emptyData = true;
            return false;
        },

        calculation() {
            if(this.isAllSet()){
                this.calculations.push({
                    amount: this.amount,
                    vat: this.vat,
                    type: this.type,
                    addedValue: 0,
                    finalValue: 1
                })
    
                this.amount = '',
                this.vat = ''
                this.emptyData = '';
            }
            
        },

    }
}