import {defineStore} from "pinia";
import SourceData from '@/data.json'

export const useStore = defineStore('sourceData', {
    state: () => ({
        SourceData: SourceData.products.data
    }),
    getters:{
        getValue(){
            return this.SourceData.items
        }
    }
})