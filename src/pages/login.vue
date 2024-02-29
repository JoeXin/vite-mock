<template>
    <div>
        <el-form ref="formRef" label-width="88px" label-position="left" :model="form">
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
            <el-button type="primary" @click="onSubmit">登 录</el-button>
        </el-form>
    </div>
</template>
<script setup>
import { router } from '@/router/index.ts';
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
const form = reactive({
    username: '',
    password: '',
    lgintype: '1',
});
const formRef = ref(null);
const routerV = useRouter()
console.log(router,'router值正确吗')
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false;
        }

        http.login(form.username, form.password).then((res) => {
            if (res.success) {
                router.push({ path: '/home' })
            }
        });
    });
};
</script>
