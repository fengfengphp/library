<template>
    <div>
        <!--上传图片-->
        <el-upload
            class="avatar-uploader"
            action="/api/admin/user/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!--图片点击放大-->
        <div style="width: 100px;height: 100%;cursor: zoom-in" @click="dialogVisible = true">
            <img style="width: 100%" src="../assets/testimg.jpg" alt="">
        </div>
        <img-zoom v-if="dialogVisible" @click.native="dialogVisible = false" zoomImgUrl="../assets/testimg.jpg"></img-zoom>
        <!--移动端页面滑动-->
        <div class="com">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>0</li>
            </ul>
        </div>
        <!--换行-->
        <textarea name="text" id="" cols="30" rows="10" v-model="preText"></textarea>
        <pre>{{preText}}&#247;</pre>
    </div>
</template>

<script>
    import imgZoom from './test-compnont'
    export default {
        components:{
            imgZoom
        },
        data() {
            return {
                imageUrl: '',
                dialogVisible:false,
                zoomImgUrl:'http://10.10.95.175:8080/group1/M00/00/0F/Cgpfr1zs1lWAHdhvAA0rw40gelo092.jpg',
                preText:'asddfasd\nadsf'
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                console.log(res)
                // console.log(file)
                // this.imageUrl = URL.createObjectURL(file.raw);
                // console.log(this.imageUrl)
                this.getBase64(file.raw).then(response =>{
                    console.log(response)
                    this.imageUrl = response
                })
            },
            beforeAvatarUpload(file) {
                console.log(file)
                // const isJPG = file.type === 'image/jpeg';
                // const isLt2M = file.size / 1024 / 1024 < 2;
                //
                // if (!isJPG) {
                //     this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                // if (!isLt2M) {
                //     this.$message.error('上传头像图片大小不能超过 2MB!');
                // }
                // return isJPG && isLt2M;
            },
            getBase64(file) {
                return new Promise(function(resolve, reject) {
                    let reader = new FileReader();
                    let imgResult = "";
                    reader.readAsDataURL(file);
                    reader.onload = function() {
                        imgResult = reader.result;
                    };
                    reader.onerror = function(error) {
                        reject(error);
                    };
                    reader.onloadend = function() {
                        resolve(imgResult);
                    };
                });
            }
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .main-dialog{
        position: fixed;top: 0;left: 0;z-index: 1000;
        width: 100vw;height: 100vh;background-color: rgba(0,0,0,.3);
        cursor: zoom-out;
    }
    .content-div{
        max-width: 90%;height: 100%;
        margin: 0 auto;
        overflow: auto;
        text-align: center;
        img{
            display: inline-block;
            vertical-align: middle;
        }
    }

    .com{
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #000;
    }
    .com ul{
        width: auto;
        overflow-x: auto;
        white-space: nowrap;
    }
    .com li{
        display: inline-block;
        width: 300px;
        height: 50px;
        border: 1px solid red;
    }
</style>
