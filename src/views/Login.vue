<!--  -->
<template>
    <div class='login'>
        <!-- 遮盖层 -->
        <div class="login-mask"></div>
        <!-- 登录表单区域 -->
        <div class="login-box">
            <!-- 头像区域 -->
            <div class='login-box-avatar'>
                <img src="@imgs/Login/sstz-logo.webp" alt="">
                <span>天泽系统</span>
            </div>
            <!-- 登录表单区域 -->
            <el-form label-width="0px" class='login-box-form' :model='loginForm' :rules="loginFormRules" ref="loginFormRef">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model='loginForm.username' placeholder="请输入用户账号"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model='loginForm.password' placeholder="请输入用户密码" type='password'></el-input>
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item class='login-box-form-code' prop="name">
                    <el-input placeholder="验证码" v-model='loginForm.randomStr'>
                    </el-input>
                    <!-- 验证码形成的图片 -->
                    <div class='login-box-form-code-img' @click='GetRandomImg'>
                        <img class='login-box-form-code-img-img' :src='testingCodeImg' alt="">
                    </div>
                </el-form-item>
                <!-- 忘记密码 -->
                <div class='login-box-form-forget-secret'>
                    <span>忘记密码</span>
                </div>
                <!-- 登录按钮 -->
                <button @click='login' class='login-box-form-button'>登录</button>
            </el-form>
        </div>
    </div>
</template>

<script>
import QS from 'qs'
export default {
    data () {
        return {
            // 表单数据源
            loginForm: {
                // 用户名
                username: '',
                // 密码
                password: '',
                // 验证码
                randomStr: ''
            },
            // 表单验证数据源
            loginFormRules: {
                // 检测用户名是否合法
                username: [
                    { required: true, message: '用户名称不能为空', trigger: 'blur' },
                    { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
                ],
                // 检测密码是否合法
                password: [
                    { required: true, message: '用户密码不能为空', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ]
            },
            // 验证码数据源
            testingCodeImg: ''
        }
    },
    methods: {
        // 获取验证码图片地址
        GetRandomImg () {
            this.$http.get('/api/verificationCode/verifyCode', { responseType: 'arraybuffer' }).then(response => {
                this.testingCodeImg = 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
            })
        },
        async login () {
            // 验证表单是否通过
            const { data: result } = await this.$http({
                method: 'POST',
                url: '/api/authentication/form',
                data: QS.stringify(this.loginForm)
            })
            console.log(result)
            if (result.resultCode !== '200') {
                this.loginForm.randomStr = ''
                // 重新生成验证码
                this.GetRandomImg()
                return this.$message.error(result.resultMessage)
            }
            // // 存储token和用户名
            window.sessionStorage.setItem('token', result.data.tokenType + ' ' + result.data.value)
            window.sessionStorage.setItem('userId', result.data.additionalInformation.userInfoId)
            window.sessionStorage.setItem('roleId', result.data.additionalInformation.roleId)
            window.sessionStorage.setItem('companyId', result.data.additionalInformation.companyId)
            window.sessionStorage.setItem('userName', result.data.additionalInformation.userNickname)
            window.sessionStorage.setItem('userAvatar', result.data.additionalInformation.userAvatar)
            window.sessionStorage.setItem('companyType', result.data.additionalInformation.companyType)
            this.$message.success('登录成功')
            this.$router.push({
                name: 'Main',
                params: {
                    username: result.data.additionalInformation.userNickname
                }
            })
        }
    },
    created () {
        this.GetRandomImg()
    }
}
</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.login {
    height: 100%;
    width: 100%;
    background: url('../assets/imgs/Login/timg@2x.png') no-repeat;
    background-size: cover; //contain
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,.2);
    }
    // 中间区域
    &-box {
        background-color: #616789;
        opacity: 0.8;
        width: px2rem(100);
        height: px2rem(120);
        border-radius: px2rem(4);
        display: flex;
        flex-direction: column;
        align-items: center;
        // 头像区域
        &-avatar {
            width: 100%;
            height: px2rem(70);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            img {
                width: px2rem(20);
                height: px2rem(20);
            }
            span {
                font-size: px2rem(5);
                color: #fff;
                margin-top: px2rem(2);
            }
        }

        &-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: px2rem(80);
            height: 100%;
            .el-form-item {
                margin: px2rem(2);
                width: px2rem(75);
                height: px2rem(10)!important;
                padding: px2rem(1) px2rem(2);
                .el-form-item__error {
                    font-size: px2rem(4);
                }
            }
            // 验证码
            &-code {
                position: relative;
                &-img{
                    position: absolute;
                    right: 0;
                    top: px2rem(0.2);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: px2rem(25);
                    &-img {
                        width: px2rem(24);
                        height: px2rem(7);
                    }
                }

            }
            // 忘记密码
            &-forget-secret {
                height: px2rem(5);
                line-height: px2rem(5);
                width: 100%;
                display: flex;
                justify-content: flex-end;
                span {
                    color: #fff;
                    font-size: px2rem(3);
                    margin-right: px2rem(2);
                }
            }
            // 登录按钮
            &-button {
                margin-top: px2rem(10);
                background-color: #FC7F89;
                border: none;
                color: #ffffff;
                width: px2rem(75);
                height: px2rem(10)!important;
                font-size: px2rem(4);
                line-height: px2rem(10)!important;
                border-radius: px2rem(2);
            }
        }
    }
}
.el-input__inner {
    height: px2rem(10)
}
</style>
