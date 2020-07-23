<template>
    <div class="col-md-3">
        <div>
            <div class="form-group">
                <label for="">{{nombre}}</label>
                <small  class="form-text text-muted" >{{premio}}</small>
            </div>
            <button type="button" class="btn btn-primary" @click="juego" id="boton">Gana Oro</button>
        </div>                  
    </div>
    
</template>

<script>

import store from '@/store.js'

export default {
    name:'Recurso',
    props:{
        nombre: String,
        premio: String,
        min: Number,
        max: Number
    },
    methods:{
        juego:function(){
            //generar numero al azar entre 10 y 20
            const nuevoOro=Math.round(Math.random() * (this.max - this.min) + this.min);
            console.log(nuevoOro)            
            //Guardar en el store
            store.agregarOro(nuevoOro);
            if (nuevoOro > 0){
                store.agregarActividad(`Usted ganó ${nuevoOro} oros`);
            } else {
                store.agregarActividad(`Usted perdió ${nuevoOro} oros`);
            }            
        }
    }
}
</script>

<style>

</style>