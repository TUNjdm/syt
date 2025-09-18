// 统一管理首页模块接口
import request from '@/utils/request';
import type { HospitalResponseData, HospitalLevelAndRegionResponseData } from './type';
// 通过常量对象来管理首页模块接口
const API = {
  // 获取已有的医院数据接口地址
  HOSPITAL_URL: '/hosp/hospital/',
    //获取医院的等级与地区接口
    HOSPITALLEVElANDREGION_URL: '/cmn/dict/findByDictCode/',
} as const;
// 获取医院详情数据
export const reqHospital = (page: number, limit: number) => request.get<HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`);

// 获取医院详情数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVElANDREGION_URL + dictCode);
