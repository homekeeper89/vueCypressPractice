<template>
    <div class="pg-login">
        <p>This is login page</p>
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