
import Vue from "vue";


const  app = {

    template:`<h2>{{name}}</h2>`,
    data(){
        return{
            name:'我是子组件的NAME'
        }
    }
}


new Vue({
    el:'#app',
    // template:`
    // <div id="app">
    //     <h1>{{name}}</h1>
    // </div>
    // `,
    data:{
        name:'this is a name '
    },
    components:{
        app
    }
})