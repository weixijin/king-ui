<template>
    <div class="move-to">
        <slot> </slot>
    </div>
</template>

<script>
export default {
    name: 'klMoveTo',
    props: {
        to: {
            type: String,
            default: 'body',
        },
    },
    async mounted() {
        await this.$nextTick()
        // 将当前组件移动到指定的元素to下
        document.querySelector(this.to).appendChild(this.$el)
    },
    beforeDestroy() {
        // 组件销毁时，将当前组件移除
        this.$el.parentNode.removeChild(this.$el)
    },
}
</script>
