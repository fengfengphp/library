<!--
  -    Copyright (c) 2018-2025, lengleng All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: lengleng (wangiegie@gmail.com)
  -->

<template>
	<div id="app">
			<router-view></router-view>
	</div>
</template>

<script>
  import {getWebDataApi} from "@/api/activityManage-config"
  import {Decrypt} from '@/util/util'
export default {
  name: "app",
  data() {
    return {

    };
  },
  watch: {},
  created() {
    this.getData();
  },
  methods: {
    getData(){
      getWebDataApi().then(res =>{
        if(res.data.code ===0){
          this.$store.commit('set_webData',Decrypt(res.data.data));
        }
      })
    }
  },
  computed: {}
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow:hidden;
}

.el-table thead{color:#3899ff}.el-table thead th{font-weight:900!important}.el-table th,.el-table tr:nth-child(2n){background:#f7f7f7;}
</style>
