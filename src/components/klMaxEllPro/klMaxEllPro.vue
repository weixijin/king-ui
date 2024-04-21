<template>
    <div class="kl-max-ell-pro" ref="klMaxEllProRef">
        <div :class="[isInit && !isExpand ? 'ell-' + maxEll : '']" :style="getStyle">
            <div class="kl-max-ell-pro-zhan-wei" :style="getZhanweiStyle"></div>
            <div
                class="kl-max-ell-pro-btn m-l-10"
                @click="isExpand = !isExpand"
                v-if="isShow"
                :style="getBtnStyle"
            >
                {{ isExpand ? '收起' : '展开' }}
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'klMaxEllPro',
    props: {
        ell: {
            type: Number,
            default: 3,
        },
        btnHeight: {
            type: Number,
            default: 26,
        },
        text: {
            type: String,
            default: '',
        },
        initExpand: {
            // 默认是否展开
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isInit: false, // 是否初始化
            isExpand: this.initExpand, // 默认是否展开
            isShow: false, // 是否显示展开按钮
            maxEll: 0, // 最大行数
        }
    },
    watch: {
        text() {
            this.init()
        },
    },
    computed: {
        getStyle() {
            return {
                lineHeight: this.btnHeight + 'px',
            }
        },
        getZhanweiStyle() {
            // 将按钮挤到底部
            return {
                height: `calc(100% - ${this.btnHeight}px)`,
            }
        },
        getBtnStyle() {
            return {
                lineHeight: this.btnHeight + 'px',
                height: this.btnHeight + 'px',
            }
        },
    },
    created() {
        this.init()
    },
    methods: {
        async init() {
            this.isInit = false
            await this.$nextTick()
            let { btnHeight, ell } = this
            let { klMaxEllProRef } = this.$refs
            if (klMaxEllProRef) {
                // 获取高度
                let height = klMaxEllProRef.offsetHeight || 0
                // 如果高度大于按钮的高度
                this.isShow = height > btnHeight * ell
                this.maxEll = ell
                this.isInit = true
            }
        },
    },
}
</script>

<style scoped>
.kl-max-ell-pro{
    display: flex;
}
/*//单行省略                                                                                              */

.ell {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ell-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ell-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.ell-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.ell-4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}

.kl-max-ell-pro-zhan-wei {
    float: right;
}
.kl-max-ell-pro-btn {
    float: right;
    padding: 0 8px;
    white-space: nowrap;
    font-size: 14px;
    background-color: #369;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    clear: both;
}
</style>
