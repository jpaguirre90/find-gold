export default{
    // aca guardamos todos nuestros datos
    state:{
        numOro:0 
    },
    // aca ponemos las funciones para manipulas los datos
    agregarOro(nuevoOro){
        this.state.numOro=this.state.numOro+nuevoOro //this.state. para acceder a lo que ya tengo
    }
}