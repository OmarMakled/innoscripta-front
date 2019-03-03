<template>
    <div class="modal fade show" tabindex="-1" id="company-form" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add/Edit Company</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="$emit('submited', company)">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" v-model="company.name">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Address" v-model="company.address">
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

export default {
    props: ['company'],
    computed: {
        ...mapState(['loading']),
        isValid() {
            return (
                this.company.name && 
                this.company.address
            )
        }
    }
}
</script>