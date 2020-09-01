
const app = new Vue({
    el:"#app",
    data:{
        books:[
            {   id:1,
                name:"红楼梦",
                date:"2020-07-28",
                price:101,
                count:0
            },
            {id:2,
                name:"西游记",
                date:"2020-07-21",
                price:88,
                count:0
            },
            {
                id:3,
                name:"三国演绎",
                date:"2020-07-22",
                price:198,
                count:0
            },
            {
                id:4,
                name:"水浒传",
                date:"2020-07-29",
                price:128,
                count:0
            },
            {
                id:5,
                name:"白蛇传",
                date:"2020-08-28",
                price:199,
                count:0
            },
            {   id:5,
                name:"郭德纲精选",
                date:"2020-03-28",
                price:99,
                count:0
            },
            {   id:6,
                name:"金瓶梅",
                date:"2020-05-12",
                price:69,
                count:0
            },
            
        ],
    },
    methods:{
        add1(index){
           this.books[index].count++;
        },
        edit1(index){
            this.books[index].count--;
        },
        rem1(index){
          this.books.splice(index,1);
        }
       
    },
    computed:{

        getTotalPrice(){
            console.log("----------getTotalPrice----");
            let total = 0;
            for(let i=0;i<this.books.length;i++){
                console.log(this.books[i]);
                let abc = this.books[i];
                total+=abc.count*abc.price;
            }
            return total;
        }
    },
    
    filters:{
        getfinals(price){
            return price.toFixed(2);
        }
    }
})