/*
 * @Author: 一尾流莺
 * @Description:获取活动信息主接口
 * @Date: 2021-09-18 09:55:10
 * @LastEditTime: 2021-09-23 17:57:42
 * @FilePath: \custom\src\pages\1000002791\99\2109100000279101\apis\useGetActivityInfo.ts
 */

import { ref, toRefs } from 'vue';
import { Toast } from 'vant';
import { cjwxRequest } from '@/utils/service';
import type { BaseInfo } from '@/types/BaseInfo';
import { apisOptions } from '../config/index';

interface ActivityInfo {
  [propName:string]:any
}

const useGetActivityInfo = (baseInfo:BaseInfo) => {
  // 活动信息
  const activityInfo = ref<ActivityInfo>({});
  // 获取活动信息
  const main = async () => {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0,
    });
    const res = await cjwxRequest.post(apisOptions.main, {
      activityId: baseInfo.activityId,
      pin: baseInfo.pin,
    });
    activityInfo.value = res.data;
    if (!res.result) {
      Toast.fail(res.errorMessage);
    }
    Toast.clear();
  };

  return {
    activityInfo,
    main,
  };
};

export default useGetActivityInfo;
