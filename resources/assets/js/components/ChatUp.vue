<template>
    <div class="chat-box">
        <chats :height="chatListHeight" ref="chatList" />
        <chat-form @resize="resizeChatWindow"/>
    </div>
</template>

<style scoped lang="scss">
</style>

<script>

    import Chats from './Chats';
    import ChatForm from './ChatForm';
    import {mapActions, mapState} from 'vuex';

    export default {
        components: {
            Chats,
            ChatForm
        },
        data(){
            return {
                chatListHeight: 0
            }
        },
        computed: {
            ...mapState([
                'messages',
                'user'
            ])
        },
        methods: {
            ...mapActions([
                'fetchUser',
                'fetchMessages',
                'broadcastMessages'
            ]),
            resizeChatWindow(val){
                const winHeight = window.innerHeight
                this.chatListHeight = (winHeight - val) - 50;

                this.scrollToBottom();
            },
            scrollToBottom(){
                const _this = this;
                setTimeout(()=> {
                    _this.$refs.chatList.$el.scrollTop = _this.$refs.chatList.$el.scrollHeight
                }, 100)
            }
        },
        mounted(){
            
            this.fetchMessages();
            this.fetchUser();
            this.broadcastMessages();

        },
        watch: {
            messages(n, o){
                if( n.length > 0 ) {
                    this.scrollToBottom();
                }
            }
        }
    }

</script>