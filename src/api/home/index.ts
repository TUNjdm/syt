// 统一管理首页模块接口
import request from '@/utils/request';
// 通过枚举来管理首页模块接口
enum API {
  //  获取已有的医院数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
}
// 获取医院详情数据
export const reqHospital = (page: number, limit: number) => request.get(API.HOSPITAL_URL + `${page}/${limit}`);
