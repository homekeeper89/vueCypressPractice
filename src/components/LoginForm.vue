<template>
    <div class='pg-login-form'>
        <input class='form-id' type='text' placeholder="Your ID" v-model="LoginForm.id">
        <br>
        <input class='form-pw' type='text' placeholder="Your PW" v-model="LoginForm.pw">
        <br>
        <button @click='PostLogin'>Login</button>
        <button>Cancel</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            LoginForm:{
                id:'',
                pw:''
            }
        }
    },
    methods:{
        PostLogin(){
            let res = this.MatchInfo(this.LoginForm)
            alert(res)
        },
        MatchInfo(LoginForm){
            let id = LoginForm.id
            let pw = LoginForm.pw
            if(id ==='guardian' && pw==='guardian'){
                return true
            }
            return false
        }
    }
}
</script>

