<template>
    <div>
        <h3>Ninja Gold</h3>
        <div class="row">
            <div class="col-6 col-md-4"></div>
            <img src="@/assets/Leprechaun.jpg" alt="">
        </div>
        <button type="button" class="btn btn-primary" id="boton">Tu olla de Oro!:  <span class="badge badge-light">{{numOro}}</span>
        <span class="sr-only">unread messages</span>
        </button>
        <div class="container">
            <p></p>
            <div class="row">
                <Recurso nombre="Granja" premio="Ganas entre 10-20 oros" :min="10" :max="20"/>
                <Recurso nombre="Cueva" premio="Ganas entre 5-10 oros" :min="5" :max="10"/>
                <Recurso nombre="Casa" premio="Ganas entre 2-5 oros" :min="2" :max="5"/>
                <Recurso nombre="Casino" premio="Puedes ganar o perder entre 0-50" :min="-50" :max="50"/>
            </div>           
        </div> 
        <p></p>
        <button type="button" class="btn btn-primary btn-lg" @click="resetear">Reiniciar olla de oro</button>
        <p></p>
        <h5>Actividades :</h5>
        <ul>
            <li v-for="(actividad, i) in actividades" :key="i">{{actividad}}</li>    
        </ul>
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
    },
    methods:{
        resetear:function(){
        if (window.confirm("Realmente quiere reiniciar su olla de oro?")) { 
        window.open("exit.html", "Thanks for Visiting!");
}                  
        }
    }
}
</script>

<style>
#boton{
    background-color: #FFD700;
    color: black;
    font-weight: bold;
}
</style>