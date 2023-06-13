<template>
    <div>
        <h1>Customer Lists {{ $route.params.id }}</h1>
        <router-link 
        tag="button"
        :to="{name:'compCustomerEdit',params:{id:$route.params.id},query:{local:'en',q:100}}" class="btn btn-primary">
       Edit User
        </router-link>
    </div>
</template>