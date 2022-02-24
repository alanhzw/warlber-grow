/*
 * @Author: 一尾流莺
 * @Description: 曝光商品相关
 * @Date: 2021-08-27 14:37:01
 * @LastEditTime: 2021-08-27 14:49:16
 * @FilePath: \custom\src\pages\1000002984\99\2108100000298402\hooks\useFindSkus.ts
 */
import { Toast } from 'vant';
import { ref } from 'vue';
import { BaseInfo } from '@/types/BaseInfo';

import { cjwxRequest } from '@/utils/service';

const useFindSkus = (baseInfo:BaseInfo):any => {
  const skusList = ref([]);
  const baseUrl = 'https://img10.360buyimg.com/n1';

  // 获取曝光商品
  const findSkus = async () => {
    try {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0,
      });
      const res = await cjwxRequest.post('/act/common/findSkus', {
        actId: baseInfo.activityId,
        userId: baseInfo.venderId,
        type: baseInfo.activityType,
      });
      skusList.value = res.skus;
      if (!res.isOk) {
        Toast.fail(res.msg);
      }
    } catch (error) {
      if (error && error.message) {
        Toast.fail(error.message);
      }
    } finally {
      Toast.clear();
    }
  };

  return {
    skusList,
    baseUrl,
    findSkus,
  };
};
export default useFindSkus;
