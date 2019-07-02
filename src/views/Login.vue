<template>
    <div class="pg-login" data-cy='loginHeadInfo'>
        <p>Hellow This is Kims Blog</p>
        <p>WelCome nice o meet you</p>
        <p class='text-midterm'>This is from callifornia</p>
        <login-form></login-form>
    </div>
</template>
<script>
import LoginForm from '../components/LoginForm.vue'
export default {
    name:'LoginPage',
    components:{
        LoginForm
    },
    data(){
        return{

        }
    }
}
</script>