<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Total Bills</th>
                <th scope="col">Count Bills</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="company in companies">
                <th>{{company.id}}</th>
                <th>{{company.name}}</th>
                <td>{{company.address}}</td>
                <td>{{company.total_bills}}</td>
                <td>{{company.count_bills}}</td>
                <td>
                    <div class="btn-group">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-outline-primary  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Action
                            </button>
                            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="" @click.prevent="$emit('edited', company)">Edit</a>
                                <router-link class="dropdown-item" :to="{ name: 'bill', params: { id: company.id }}">
                                    Bills
                                </router-link>
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
    props: ['companies']
}
</script>