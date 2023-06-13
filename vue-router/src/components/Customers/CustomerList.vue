<template>
    <div>
        <h1>Customer Lists {{ $route.params.id }}</h1>
        <router-link 
        tag="button"
        :to="{name:'compCustomerEdit',params:{id:$route.params.id}}" class="btn btn-primary">
       Edit User
        </router-link>
    </div>
</template>