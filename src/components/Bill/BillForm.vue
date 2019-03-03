<template>
    <div class="modal fade show" tabindex="-1" id="bill-form" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add/Edit Bill</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="$emit('submited', bill)">
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Amount" v-model="bill.amount">
                        </div>
                        <div class="form-group">
                            <datepicker input-class="form-control" v-model="bill.created_at" placeholder="Date"></datepicker>
                        </div>
                        <button type="submit" :disabled="!isValid || loading" class="btn btn-primary btn-block">
                            <div class="spinner-grow spinner-grow-sm" role="status" v-show="loading">
                              <span class="sr-only">Loading...</span>
                            </div>
                            <span v-show="!loading">Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Datepicker from 'vuejs-datepicker';

export default {
    props: ['bill'],
    components: {
        Datepicker
    },
    computed: {
        ...mapState(['loading']),
        isValid() {
            return (
                this.bill.amount && 
                this.bill.created_at
            )
        }
    },
    created(){
        $('.date-picker').datepicker()
    }
}
</script>