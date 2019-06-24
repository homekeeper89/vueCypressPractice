<template>
    <div class='pg-register-form'>
        <input class='DtoId' v-model='DTO.id' placeholder="사용할 아이디(이메일 주소)">
        <br>
        <input class='DtoName' v-model='DTO.name' placeholder="이름">
        <br>
        <input class='DtoPw' v-model='DTO.pw' placeholder="사용할 비밀번호">
        <br>
        <input class='DtoPw_re' v-model='DTO.pw_re' placeholder="비밀번호 재입력">
        <br>
        <input class='DtoHobby' v-model='DTO.hobby' placeholder="취미">
        <br>
        <button class='btnSubmit' @click='PostRegisterForm'>회원가입</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'RegisterForm',
    data(){
        return{
            DTO:{
                id:'',
                name:'',
                pw:'',
                pw_re:'',
                hobby:''
            }
        }
    },
    methods:{
        PostRegisterForm(){
            axios.post('http://dev.gdnet.co.kr/kkk/api/posts', this.DTO)
            .then(res => {
                alert('yes')
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

