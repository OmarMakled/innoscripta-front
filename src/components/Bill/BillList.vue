<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="coll">%</th>
                <th scope="col">CreatedAt</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="bill in bills">
                <th>{{bill.id}}</th>
                <th>{{bill.amount}}</th>
                <th>{{ getPersent(bill.amount) }} %</th>
                <th>{{bill.created_at | formatDate}}</th>
                <td>
                    <div class="btn-group">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-outline-primary  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Action
                            </button>
                            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="" @click.prevent="onEdit(bill)">Edit</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: ['bills', 'total'],
    methods: {
        onEdit(bill) {
            this.$emit('edited', bill)
        },
        getPersent(num) {
            return ((num / this.total) * 100).toFixed(2)
        }
    }
}
</script>