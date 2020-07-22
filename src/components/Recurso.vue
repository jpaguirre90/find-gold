<template>
    <div class="col-md-3">
        <div>
            <div class="form-group">
                <label for="">{{nombre}}</label>
                <small  class="form-text text-muted">{{premio}}</small>
            </div>
            <button type="button" class="btn btn-primary" @click="juego">Gana Oro</button>
        </div>                  
    </div>
</template>

<script>

import store from '@/store.js'

export default {
    name:'Recurso',
    props:{
        nombre: String,
        premio: String
    },
    methods:{
        juego:function(){
            //generar numero al azar entre 10 y 20
            const nuevoOro=Math.round(Math.random() * (20 - 10) + 10);
            console.log(nuevoOro)            
            //Guardar en el store
            store.agregarOro(nuevoOro)            
        }
    }
}
</script>

<style>

</style>