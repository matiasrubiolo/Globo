const app = Vue.createApp({
    data() {
        return{
            logo:"https://i.imgur.com/Qx8uR89.png",
            usuario:"",
            comentarios: [],

            foto:"https://i.imgur.com/99qgQJy.jpeg",
            nombre: "Jane Doe",
            email: "jane_doe@email.com",
            fechaNacimiento : "01/05/1996",
            telefono: "918-936-9585",
            ciudad: "Tokyo, Japan",
            trabajo: "Lawn N",
            botonSeguir : "Seguir",
            fondoSeguir: "#3b82f6",

            sobremi: "¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio,Japón.Me encanta capturar la esencia de la vida urbana a través de mi lente,explorando el constraste ente la arquitectura moderna y las tradiciones centenarias que conviven en esta metrópolis única.Desde rascacielos deslumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiracion en cada rincón de esta increíble ciudad.",
            
            publicacion: "https://i.imgur.com/bq9db41.jpeg ",

            botonLike: "Me gusta",
            fondoLike: "#f4f4f5",
            textoLike: "#3b82f6",
            likes:201,

            comentario:""
        } 
    },
    methods:{
        seguidor(){
            if(this.botonSeguir === "Seguir"){
                this.botonSeguir = "Dejar de seguir";
                this.fondoSeguir = "#ff0000";
            }else{
                this.botonSeguir = "Seguir";
                this.fondoSeguir = "#3b82f6"

            }
        },
        darLike(){
            if(this.botonLike === "Me gusta"){
                this.botonLike = "Quitar Me gusta";
                this.likes += 1;
                this.fondoLike = "#ff0000";
                this.textoLike = "#f4f4f5";

            }else{
                this.fondoLike = "#f4f4f5"
                this.botonLike = "Me gusta";
                this.likes -= 1;
                this.textoLike = "#3b82f6";
            }
        },
        comentar(){
            if(this.usuario === ""){
                this.$refs.usuario.focus();
            }else if(this.comentario === ""){
                this.$refs.comentario.focus();
            }else{
                let comentario = {
                    usuario : this.usuario,
                    comentario : this.comentario
                }

                this.usuario = "";
                this.comentario = "";
            }
        }
    }
});

const mountedApp = app.mount('#app');