<!--  -->
<template>
  <div class='investigation'>
        <div class='investigation-title'>
            <span class='investigation-title-go1'>我的债行</span>
            <span class='investigation-title-separator'> / </span>
            <span class='investigation-title-go2'>信息分析暨尽调协议</span>
        </div>
        <div class='investigation-container'>
            <div class='investigation-container-form'>
                <div class='investigation-container-form-header'>
                    <span>信息分析暨尽调协议</span>
                </div>
                <div class='investigation-container-form-title'>
                    信息分析暨尽调协议
                </div>
                <!-- 甲方 -->
                <div class='investigation-container-form-part-a'>
                    <div>甲方：<input type="text" disabled='true' :value='userMsg.debtName'></div>
                    <div>身份证号码统一社会信用代码：<input type="text" disabled='true' :value='userMsg.idCard'></div>
                </div>
                <!-- 乙方 -->
                <div>
                    乙方：山东盛世天泽公关顾问有限公司<br>
                    统一社会信用代码：91371100MA3TA2E083<br>
                    甲方因无法解决自身债权债务，有意委托乙方为其提供处理债权债务方案咨询服务。但乙方目前尚不了解甲方债权债务的具体情况，甲方亦无法准确、全面的陈述相关内容，故甲方需委托乙方进行信息分析及尽职调查。现甲乙双方经友好协商，特签订本协议，以资共同遵守。<br>
                </div>
                <h3>一、服务事项</h3>
                <div>乙方接受甲方委托，将甲方债权债务信息录入系统并分析，且采取尽调措施核实债权债务真实情况（包括但不限于债权人意愿、债务人资信情况、债务担保情况及债务人涉诉情况）。</div>
                <h3>二、服务费用</h3>
                <div>（一）甲方支付乙方信息录入及尽调服务费880元，该款于本合同签订之日支付。</div>
                <div>（二）为回馈甲方商业信任、增进双方信赖基础，乙方赠送甲方价值880元的礼包一份。</div>
                <h3>三、服务事项完成时限</h3>
                <div>
                （一）本协议签订后15日内（如遇复杂情况，可顺延10日），乙方以书面或口头方式向甲方告知信息分析及尽调结论。
                </div>
                <div>
                （二）若乙方经信息分析及尽调后认为，难以为甲方的债权债务提供策划方案的，乙方将如实告知；若乙方认为甲方的债权债务具备解决的盖然性，且甲方亦愿意委托乙方继续为其提供处理债权债务方案咨询服务的，双方可另行协商并签订相关协议。
                </div>
                <h3>四、争议解决方法</h3>
                <div>
                因本协议发生争议，甲、乙双方应友好协商解决；协商不成的，可向本协议签订地人民法院起诉。
                </div>
                <h3>五、其它</h3>
                <div>
                （一）本协议未尽事宜，甲乙双方可另行协商并签订补充协议。
                </div>
                <div>
                （二）本协议自甲乙双方签字或盖章后生效。本合同一式两份，甲乙双方各执一份，均具同等法律效力。
                </div>
                <div>
                    (以下无正文,为签署页)
                </div>
                <div class='investigation-container-form-tab'>
                    <div class='investigation-container-form-tab-top'>
                        <div class='investigation-container-form-tab-top-left'>
                            <div>
                                <span>甲方签字：</span>
                                <input type="text" v-model='SubmitData.partyA'>
                            </div>
                            <div>
                                <span>甲方(签字盖章捺印)：</span>
                                <button>上传电子章</button>
                            </div>
                            <div>
                                <span>签约日期：</span>
                                <input type="text">
                            </div>
                        </div>
                        <div class='investigation-container-form-tab-top-right'>
                            <div>
                                <span>乙方签字：</span>
                                <input type="text" v-model='SubmitData.partyB'>
                            </div>
                            <div>
                                <span>乙方(签字盖章捺印)：</span>
                                <button>上传电子章</button>
                            </div>
                            <div>
                                <span>签约日期：</span>
                                <input type="text">
                            </div>
                            <div>
                                <span>协议签约地：</span>
                                <input type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='investigation-container-form-submit'><button @click='SubmitInvestigation'>提交</button></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            UserMsg: [
                {
                    IsCoordinate: 'true',
                    Type: 'debtor',
                    Properties: 'person'
                }
            ],
            // 确定选用正常模板还是多选模板
            isNormal: false,
            userMsg: {},
            SubmitData: {
                reportId: '',
                partyA: '',
                partyB: ''
            }
        }
    },
    methods: {
        SelectMore () {
            this.isNormal = !this.isNormal
        },
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        async InitData () {
            const formData = new FormData()
            const reportId = window.sessionStorage.getItem('ApproveReportId')
            formData.append('reportId', reportId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCivilController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.userMsg = result.data
        },
        async SubmitInvestigation () {
            // 协议信息提交,生成协议编号
            this.SubmitData.reportId = window.sessionStorage.getItem('ApproveReportId')
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: AddResult } = await this.$http({
                method: 'post',
                url: '/api/api/busReportController/addAgreementNo',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (AddResult.resultCode === '200' && AddResult.data !== '0') this.$message.success('生成协议编号成功')
            // 调用状态更改接口
            formData.append('status', '3')
            const { data: StatusChangeResult } = await this.$http({
                method: 'post',
                url: '/api/api/busReportController/updateStatus',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (StatusChangeResult.resultCode === '200' && StatusChangeResult.data === 1) return this.$emit('onChangeFragment', 'MyDebt')
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.investigation {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: px2rem(4);
    &-title {
        font-size: px2rem(4);
        color: #FC7F89;
        &-go1 {
            color: #616789;
        }
        &-separator {
            color: #616789
        }
    }

    &-container {
        margin-top: px2rem(4);
        border-radius: px2rem(2);
        &-form {
            &-header {
                        height: px2rem(14);
                        line-height: px2rem(14);
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        border-bottom: 0.5px solid #D9D9D9;
                        span {
                            font-size: px2rem(5);
                            font-weight: 600;
                            margin-left: px2rem(4);
                        }
            }
            border-radius: px2rem(2);
            background-color: #fff;
            padding: px2rem(2) px2rem(6);
            font-size: px2rem(3.2);
            // 统一的表单样式,宽度自定
            input {
                border:1px solid #E8EAEC;
                border-radius: px2rem(1);
                height: px2rem(7);
                padding-left: px2rem(2);
                margin: px2rem(2);
                width: px2rem(20);
            }
            input:disabled {
                background-color: #F2F6F9;
                color: #272727;
            }
            // 长表单200
            &-input200 {
                width: px2rem(40)!important;
            }
            // 特殊表单450
            &-input450 {
                width: px2rem(80)!important;
            }
            textarea {
                height: px2rem(15);
                resize: none;
                line-height: px2rem(5);
                font-size: px2rem(3.5);
                width: px2rem(300);
            }
            input[type=radio] {
                width: px2rem(4)!important;
                height: px2rem(4)!important;
                line-height: px2rem(4)!important;
                margin: px2rem(1)!important;
                vertical-align: middle;
                background-color: #fff
            }
            &-title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: px2rem(24);
                font-size: px2rem(3.8);
                font-weight: 600;
            }
            &-part-a {
                div:nth-child(1) {
                    input {
                        width: px2rem(100);
                    }
                }
                div:nth-child(2) {
                    input {
                        width: px2rem(65);
                    }
                }
                div:nth-child(3) {
                    input {
                        width: px2rem(81);
                    }
                }
                div:nth-child(4) {
                    input {
                        width: px2rem(74.5);
                    }
                }
            }
            &-submit {
                text-align: center;
                margin-bottom: px2rem(20);
                button {
                    font-size: px2rem(3.5);
                    width: px2rem(50);
                    height: px2rem(8);
                    background-color: #616789;
                    color: #fff;
                    border: none;
                    border-radius: px2rem(1);
                }
            }
            &-contact {
                div:nth-child(1) {
                    line-height: px2rem(12);
                    height: px2rem(8);
                }
                div:nth-child(2),div:nth-child(3),div:nth-child(5) {
                    input {
                        width: px2rem(70);
                    }
                }
                div:nth-child(4) {
                    input {
                        width: px2rem(66.8);
                    }
                }
            }
            &-last-text {
                height: px2rem(20);
                line-height: px2rem(20);
            }
            &-tab {
                width: px2rem(220);
                height: px2rem(60);
                margin-top: px2rem(10);
                button {
                    border: none;
                    font-size: px2rem(3.5);
                    background-color: #616789;
                    color: #fff;
                    padding: px2rem(1) px2rem(2);
                    border-radius: px2rem(1);
                    margin-left: px2rem(2);
                }
                &-top {
                    display: flex;

                    &-left {
                        flex: 1;
                        :nth-child(1) {
                            input {
                                width: px2rem(61.5);
                            }
                        }
                        :nth-child(3) {
                            input {
                                width: px2rem(61.5);
                            }
                            margin-bottom: px2rem(6);
                        }
                    }

                    &-right {
                        flex: 1;
                        :nth-child(1) {
                            input {
                                width: px2rem(61.5);
                            }
                        }
                        :nth-child(3) {
                            input {
                                width: px2rem(61.5);
                            }
                        }
                        :nth-child(4) {
                            input {
                                width: px2rem(58);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
