<template>
    <div>
        <button class="btn btn-outline-primary mb-3 btn-block" @click="showCompanyForm({})">Add Company
        </button>
        <company-list @edited="showCompanyForm($event)" :companies="companies"></company-list>
        <company-form @submited="submitCompanyForm($event)" :company="company"></company-form>
    </div>
</template>
<script>
import CompanyList from '@/components/Company/CompanyList.vue'
import CompanyForm from '@/components/Company/CompanyForm.vue'
import api from '@/api/company'

export default {
    data() {
        return {
            companies: [],
            company: {}
        }
    },
    components: {CompanyList ,CompanyForm},
    methods: {
        showCompanyForm(company) {
            this.company = company
            $('#company-form').modal('toggle')
        },
        submitCompanyForm(company){
            let request;
            if (company.id){
                request = api.update(company.id, company)
            }else {
                request = api.store(company)
                    .then(company => this.companies.push(company))
            }
            request
                .then(() => {
                    $('#company-form').modal('toggle')
                }).catch(() => {})
        }
    },
    created() {
        api.get().then(data => this.companies = data)
    }
}
</script>