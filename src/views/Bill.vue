<template>
    <div>
        <company-card :company="company" class="mb-4"></company-card>
        <button 
            class="btn btn-outline-primary mb-3 btn-block" @click="showBillForm({})">Add Bill
        </button>
        <bill-list @edited="showBillForm($event)" :bills="bills" :total="total"></bill-list>
        <bill-form @submited="submitBillForm($event)" :bill="bill"></bill-form>
    </div>
</template>
<script>
import BillList from '@/components/Bill/BillList.vue'
import BillForm from '@/components/Bill/BillForm.vue'
import CompanyCard from '@/components/Company/CompanyCard.vue'
import api from '@/api/company'
export default {
    components: {BillList, BillForm, CompanyCard},
    data() {
        return {
            company: null,
            total: null,
            bill: {},
            bills: []
        }
    },
    methods: {
        getBills(){
            api.getBills(this.$route.params.id)
                .then(data => {
                    this.company = data.company
                    this.total = data.company.total_bills
                    this.bills = data.bills
                }).catch(err => console.log(err))
        },
        showBillForm(bill) {
            this.bill = bill
            $('#bill-form').modal();
        },
        submitBillForm(bill){
            let request
            if (bill.id){
                request = api.updateBill(this.company.id, bill.id, bill)
            }else {
                request = api.addBill(this.company.id, bill)
            }
            request
                .then(() => {
                    $('#bill-form').modal('toggle')
                    this.getBills()
                })
                .catch(() => {})
        }
    },
    mounted() {
        this.getBills()
    }
}
</script>