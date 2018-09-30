<template>
    <div>

        <div class="container">
            <el-input class="account" v-model="input" placeholder="请输入账号"></el-input>
            <date-picker></date-picker>
            <el-button type="primary" @click="submit">查询日志</el-button>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import datePicker from '../components/datePicker'
    import {findShopByAccount,findAccountLogs} from '@/api/mwApi'


    export default {
        data() {
            return {
                input:'mwtydzpdwp2'
            }
        },
        components: {
            headTop,
            datePicker,
        },
        methods: {
            async submit() {
                const  res = await findAccountLogs({account:this.input,upTime:'2018-09-09 12:34:00'});
                this.$message.success(res.message);
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .account{
        width:200px;
    }
    .container{
        padding: 5px;
    }
</style>
