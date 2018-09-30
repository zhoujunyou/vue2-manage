<template>
    <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
    </el-date-picker>
</template>

<script>
    export default {
        data() {
            return {
                value1: new Date(),
            };
        },
    };
</script>
