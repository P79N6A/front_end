<template>
    <div id="app">
        <div id="cover"></div>
        <div class="test"></div>
        <my-header></my-header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
import MyHeader from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
    components:{
        MyHeader,
        Footer,
        Todo
    },
    created(){
        var px = 1/window.devicePixelRatio ;
        document.write('<meta name="viewport" content="width=device-width,initial-scale='+px+',minimum-scale=1,maximum-scale=1,user-scalable=no" />');
        var html = document.documentElement ;
        console.log(html.clientWidth)
        html.style.fontSize = html.clientWidth/25+'px' ;
        console.log(html.style.fontSize)
    },
    mounted(){
        this.$notify({
            autoClose: 2000,
            content: '哈哈哈'
        })
    }
}
</script>

<style lang="less" scoped>
@rem:30rem ;
.test{
    width: 740/@rem ;
    height: 10px ;
    background: red ;
}
#app {
    position: absolute ; 
    left: 0 ; 
    right:0; 
    top: 0 ; 
    bottom: 0 ; 
}
#cover {
    position: absolute ; 
    left: 0 ; 
    right:0; 
    top: 0 ; 
    bottom: 0 ; 
    background-color: #555 ;
    opacity:0.5 ;
    z-index:-1 ;
}
</style>
