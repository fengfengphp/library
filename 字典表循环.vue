<template>
    <div>
        <el-form v-if="isFormOk" ref="ruleForm" :model="loginForm" :rules="loginRules" label-width="150px">
            <el-form-item v-for="(item,index) in dicts" :key="index" :label="item.label" :prop="item.paramRegexp?item.value:''">
                <el-input v-if="item.paramType == 'input'" v-model.trim="loginForm[item.value]" type="text"
                          :placeholder="item.label | addPrefix"></el-input>
                <el-input v-if="item.paramType == 'textarea'" v-model.trim="loginForm[item.value]"
                          type="textarea" :rows="4" :placeholder="item.label | addPrefix"></el-input>
                <el-input-number v-if="item.paramType == 'number'" v-model.trim="loginForm[item.value]"
                                 :placeholder="item.label | addPrefix"></el-input-number>
                <el-upload
                        v-if="item.paramType == 'img'"
                        action="/uploadimag/admin/user/upload"
                        :show-file-list="false"
                        :on-success="function(res,file){return handleAvatarSuccess(res,file,item.value)} "
                        style="border: 1px dashed #d9d9d9;border-radius: 6px;">
                    <img v-if="loginForm[item.value]" :src="loginForm[item.value]" style="width: 78px;">
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="width:78px;height:78px;"></i>
                </el-upload>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import initDict from '@/mixins/initDict'

    export default {
        name: "index",
        mixins: [initDict],
        data() {
            return {
                isFormOk: false,
                loginForm: {},
                loginRules: {},
            }
        },
        created() {
            this.getDict('tenant_thirdparty_info').then(res => {
                console.log(res)
                for(let i=0;i<this.dicts.length;i++){
                    this.dicts[i].value = this.dicts[i].value.replace(/\./g,'_')
                }
                this.formatDictionaryForm()
            })
        },
        filters: {
            addPrefix(data) {
                return '请输入' + data
            }
        },
        methods: {
            formatDictionaryForm() {
                this.dicts.forEach(item => {
                    this.$set(this.loginForm, item.value.replace('.','_'), '')
                    if (item.paramRegexp) {
                        let oneValidator = {
                            validator: (rule, value, callback) => {
                                let reg = new RegExp(item.paramRegexp)
                                if (!reg.test(value)) {
                                    return callback(new Error(item.paramHint));
                                }
                                callback();
                            },
                            required: true,
                            message: item.paramHint,
                            trigger: 'blur'
                        }
                        this.$set(this.loginRules, item.value, [oneValidator])
                    }
                })
                console.log(this.dicts)
                console.log(this.loginForm)
                this.isFormOk = true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.loginForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleAvatarSuccess(res, file, name) {
                this.loginForm[name] = res.data
            }
        }
    }
</script>

<style scoped>

</style>
