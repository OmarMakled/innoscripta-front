<template>
    <div id="app">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">
                <a href="http://www.innoscripta.com" target="_blank">
                    <img src="http://www.innoscripta.com/templates/innoscripta/images/logo.png" class="sm-log" alt="">
                </a>
            </h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <router-link :to="{ name: 'home'}" class="p-2 text-dark">Home</router-link>
                <router-link :to="{ name: 'company'}" class="p-2 text-dark">Company</router-link>
            </nav>
        </div>
        <div class="container">
          <router-view />
        </div>
    </div>
</template>