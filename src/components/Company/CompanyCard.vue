<template>
    <div class="card" v-if="company">
      <div class="card-header text-center">
        <strong>Total Bills: </strong> {{company.total_bills}} / 
        <strong>Count Bills:</strong> {{company.count_bills}}
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
            <li><strong>Name: </strong> {{company.name}}</li>
            <li><strong>Address: </strong> {{company.address}}</li>
        </ul>
      </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    props: ['company'],
    methods: {
    },
    computed: {
        ...mapState(['loading']),
    }
}
</script>