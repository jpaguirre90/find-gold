<template>
    <div>
        <h3>Ninja Gold</h3>
        <button type="button" class="btn btn-primary">
        Tu oro!:  <span class="badge badge-light">{{sumar}}</span>
        <span class="sr-only">unread messages</span>
        </button>
        <p>{{sumar}}</p>
        <div class="container">
            <p></p>
            <div class="row">
                <div class="col-md-3">
                    <form>
                        <div class="form-group">
                            <label for="">Granja</label>
                            <small  class="form-text text-muted">gana 10-20 oros</small>
                        </div>
                        <button type="submit" class="btn btn-primary" @click="contador">Gana Oro</button>
                    </form>                  
                </div>
                <div class="col-md-3">                    
                    <form>
                        <div class="form-group">
                            <label for="">Cueva</label>
                            <small  class="form-text text-muted">gana 5-10 oros</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Gana Oro</button>
                    </form>                   
                </div>
                <div class="col-md-3">
                    <form>
                        <div class="form-group">
                            <label for="">Casa</label>
                            <small  class="form-text text-muted">gana 2-5 oros</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Gana Oro</button>
                    </form>            
                </div>
                <div class="col-md-3">
                    <form>
                        <div class="form-group">
                            <label for="">Casino</label>
                            <small  class="form-text text-muted">gana o pierde 0-50 oros</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Gana Oro</button>
                    </form>                
                </div>
            </div>           
        </div> 
        <h5>Actividades :</h5>
    </div>
</template>

<script>
export default {
    name:'ninjaOro',    
    data(){
        return{
            sumar:0,
        }
    },
    methods:{
        contador(){
            this.sumar++;
            console.log("Esta pasando")
        }
    }
}
</script>

<style>
</style>