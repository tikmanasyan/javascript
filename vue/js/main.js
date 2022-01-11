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