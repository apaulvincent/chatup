<template>
    <div class="chat-list" :style="`height:${height}px`">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div v-for="message in messages" :key="message.id" :class="bubbleClass(message.user.id)">
                        <div class="panel-body">
                            <h4>{{ message.user.name }}</h4>
                            <p>{{ message.message }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .chat-list {
        position: relative;
        top: 50px;
        overflow: auto;
    }

    .user-bubble {
        background: #d4e2ff;
    }
</style>

<script>
    import {mapState} from 'vuex';

    export default {
        props: ['height'],
        computed: {
            ...mapState([
                'messages',
                'user'
            ])
        },
        methods: {
            bubbleClass(id){
                if(this.user) {
                    let c = id == this.user.id ? ' user-bubble' : '';
                    return 'panel panel-default' + c;
                }
                return 'panel panel-default';
            }
        },
        mounted() {

        }
    }
</script>
