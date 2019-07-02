<template>
    <div class='pg-login-form'>
        <input data-cy='loginId' class='form-id' type='text' placeholder="Your ID" v-model="LoginForm.id">
        <br>
        <input data-cy='loginPw' class='form-pw' type='text' placeholder="Your PW" v-model="LoginForm.pw">
        <br>
        <p data-cy='loginWordAlert' v-if='wordAlert'>You should input id, and pw, not blank</p>
        <button data-cy='loginBtn' @click='PostLogin'>Login</button>
        <button>Cancel</button>
        <p data-cy='loginRes'>{{resData}}</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            LoginForm:{
                id:'',
                pw:''
            },
            wordAlert:false,
            resData:''
        }
    },
    methods:{
        PostLogin(){
            let res = this.MatchInfo(this.LoginForm)
        },
        MatchInfo(LoginForm){
            let id = LoginForm.id
            let pw = LoginForm.pw
            this.validateForm(id, pw, this.getHttp)
        },
        validateForm(id, pw, f){
            if(id.length ==0 || pw.length ==0){
                this.wordAlert = true
                return false
            }
            f()
            return true
        },
        goHome(){
            this.$router.push({
            name: 'about'
        })
        },
        getHttp(){
            // const baseURI = 'https://jsonplaceholder.typicode.com';
            axios({
                method: 'POST',
                url : '/users',
                // params : {
                //     page : 1,
                //     pagesize : 5
                // }
            }).then((response) => {
                this.resData = response.data.data;
                this.goHome()
            }).catch((ex)=> {
                console.log("ERR!!!!! : ", ex)
            })
        }
    }
}
</script>

