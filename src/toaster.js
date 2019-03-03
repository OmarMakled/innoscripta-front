import Vue from 'vue'
import Toasted from 'vue-toasted'
Vue.use(Toasted)

const options = {position: 'bottom-center', duration: 3000}

export default {
	success(msg){
        Vue.toasted.success(msg, options)
    },
    error(msg){
    	Vue.toasted.error(msg, options)
    },
    info(msg){
        Vue.toasted.show(msg, options)
    },
    loading(){
        Vue.toasted.show(`
			  <div class="spinner-border" role="status">
			  </div>
			  <span style="padding-left: 10px;">loading ...</span>
    	`, {position: 'bottom-center', duration : null})
    },
    clear(){
    	Vue.toasted.clear()
    }
}