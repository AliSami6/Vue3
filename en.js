new Vue({
    el: "#app",
    data: {
        name : 'Manager',
        x: 0,
        y: 0
    },
    methods: {
        updateName(){
            this.name = 'CEO';
        },
        getCoord(event){
             this.x = event.clientX;
             this.y = event.clientY;
        }
    }
})