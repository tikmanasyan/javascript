const app = new Vue({
    el:"#app",
    data:{
        msg:"Hello, Vue!"
    }
});

const app1 = new Vue({
    el:"#app1",
    data:{
        msg:'This page loaded: ' + new Date().toLocaleDateString()

    }
});

const app2 = new Vue({
    el:"#app2",
    data:{
        show:true
    }
});


const app3 = new Vue({
    el:"#app3",
    data:{
        notebooks:[
            {name:'Asus'},
            {name:'Apple'},
            {name:'Lenovo'}
        ]
    }
});

const app4 = new Vue({
    el:"#app4",
    data:{
        msg:'Hello'
    },
    methods:{
        revMsg:function() {
            this.msg = this.msg.split('').reverse().join('')
        }
    }
});