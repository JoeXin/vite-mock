<template>
    <div class='loginContent'>
        <el-form ref="formRef"   label-position="left" :model="form">
            <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名(admin)">
                    <template #prefix>
                        <el-icon>
                            <user />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password>
                    <template #prefix>
                        <el-icon>
                            <lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
        
            <el-button class='elementBtn' type="primary" @click="onSubmit">登 录</el-button>
                <div class="footer">
            <a>
            忘记密码
            </a>
            <a>
            验证码
            </a>
            </div>
        </el-form>
    </div>
</template>
<script setup>
// import { router } from '@/router/index.ts';
import {
    ref,
    reactive,
    onMounted,
    onBeforeUnmount,
    TransitionGroup,
} from 'vue';
import { useRoute, useRouter } from 'vue-router'
import http from '../api/manager.ts';
//import http from '../pai/manager.ts';
import { ElMessage } from 'element-plus'
const form = reactive({
    username: '',
    password: '',
    lgintype: '1',
});
const formRef = ref(null);
const router = useRouter()
const route = useRoute()

console.log(router,route,'router值正确吗')
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false;
        }

if(!form.username){
     ElMessage({
                    message: '请填写用户名',
                    type: 'Primary',
                })
                return;
}
if(!form.password){
     ElMessage({
                    message: '请填写密码',
                    type: 'Primary',
                })
                return;
}
        http.login(form.username, form.password).then((res) => {
            if (res.success) {
                router.push({ path: '/home' })
            }else{
                ElMessage({
                    message: res.msg,
                    type: 'Primary',
                })
            }
        });
    });
};
</script>

<style lang='less' scoped>
.loginContent{
    .el-form-item__content{
     //   margin-left:0!important;
    }
    .el-form-item{
        margin-bottom:16px;
    }
    padding:0 16px;
        .elementBtn{
            width: 100%;
            display:flex;
               justify-content: center;
           align-items: center;
        }
        .footer{
            color:blue;
            padding-top:16px;
            display:flex;
               justify-content: space-between;
           align-items: center;
        }
}
</style>
