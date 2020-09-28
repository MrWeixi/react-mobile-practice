// 首页 热门推荐
import base from './base'
import { getData } from '../utils/http'
const search={
    searchDate(city,content){
        return getData(base.search+"?city="+city+"&content="+content)
    }
}
export default search