

new Vue ({
    el:"#contador",
    data:{
        numero: 0,
    },
    methods:{
        sumar(){
           this.numero += 1;
        },
        restar(){
            this.numero -= 1;
        },
        reiniciar(){
            this.numero = 0;
        }
    }

})

