<template>
    <div>
        <h3>Ninja Gold</h3>
        <button type="button" class="btn btn-primary">
        Tu oro!:  <span class="badge badge-light">{{numOro}}</span>
        <span class="sr-only">unread messages</span>
        </button>
        <div class="container">
            <p></p>
            <div class="row">
                <Recurso nombre="Granja" premio="Ganas entre 10-20 oros"/>
                <Recurso nombre="Cueva" premio="Ganas entre 5-10 oros"/>
                <Recurso nombre="Casa" premio="Ganas entre 2-5 oros"/>
                <Recurso nombre="Casino" premio="Puedes ganar o perder entre 0-50"/>
            </div>           
        </div> 
        <h5>Actividades :</h5>
    </div>
</template>

<script>

import Recurso from '@/components/Recurso.vue'
import store from '@/store.js'

export default {
    name:'ninjaOro', 
    components:{
        Recurso
    },   
    data(){
        return store.state
    }
}
</script>

<style>
</style>