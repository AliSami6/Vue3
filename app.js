new Vue({
    el:"#app",
    data: {
        title :"Web And Vue",
        learning_meta: "bootstrap5  Html5 css3 jquery javascript sql php",
        viva:['join sql','request life cycle'],
        written:{
            name: "written test 50 marks"
        },
        greeting:()=>{
            return " You are selected";
        }
    }
})