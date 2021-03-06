/**
 * 扩展 VuePress 应用
 */
import ClimbUi from '../../packages'


export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router // the router instance for the app
                }) => {
    // ...apply enhancements to the app
    Vue.use(ClimbUi)
}
