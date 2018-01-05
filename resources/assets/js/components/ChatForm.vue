<template>
    <div class="chat-form" ref="chatForm">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                        <form @submit.prevent="submit">
                            <div class="form-group">
                                <div class="tbl">
                                    <div class="tbl-cell">
                                    <textarea class="form-control" v-model="message.message" ref="chatField"></textarea>
                                    </div>
                                    <div class="tbl-cell cell-right">
                                        <button class="btn btn-primary">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .tbl {
        display: table;
        width: 100%;
        .tbl-cell {
            display: table-cell;
            vertical-align: middle;
        }
    }

    .cell-right {
        width: 80px;
        text-align: right;
    }

    .chat-form {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1;
        background: #fff;
        padding: 20px 0;
        border-top: 1px solid #d3e0e9;
    }
</style>

<script>
 
    import autosize from 'autosize'
    import {mapActions, mapState} from 'vuex'

    export default {
        data(){
            return {
                message: {
                    message: ''
                }
            }
        },
        computed: {
            ...mapState([
                'user'
            ])
        },
        mounted(){
            const chatField = this.$refs.chatField;
            const chatForm = this.$refs.chatForm;
            
            autosize(chatField);

            this.resizeChatForm();

            chatField.addEventListener('autosize:resized', this.resizeChatForm);
            window.addEventListener('resize', this.resizeChatForm)
        },
        methods: {
            ...mapActions([
                'postMessage',
                'addMessage'
            ]),
            submit(){

                if( this.message.message == '' || this.message.message == undefined) {
                    alert("Please provide a message.");
                    return;
                }
                
                this.message.user = this.user;
                this.addMessage(this.message);
                this.postMessage(this.message);
                    
                this.message = {}

                this.$refs.chatField.style.height = 'auto';

                this.resizeChatForm();

            },
            resizeChatForm(){
                this.$emit('resize', this.$refs.chatForm.clientHeight )
            }
        },
        beforeDestroy(){
            window.removeEventListener('resize', this.resizeChatForm)
            this.$refs.chatField.removeEventListener('autosize:resized', this.resizeChatForm)
        }
    }
</script>
