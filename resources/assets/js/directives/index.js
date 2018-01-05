import Vue from 'vue';


export const enter = {
    bind: (el, binding, vnode) => {
        console.log(el)
    }
}


Vue.directive('enter', enter)
  
