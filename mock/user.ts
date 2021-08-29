/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-27 12:01:39
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 14:51:58
 */
import { MockMethod } from "vite-plugin-mock";
import { requestParams, resultSuccess } from "./_util";
import dayjs, { OpUnitType } from "dayjs";

export default [
  {
    url: "/api/login",
    timeout: 1000,
    method: "get",
    response: (request: requestParams) => {
      if (request.query && request.query.userName && request.query.userName == "dlm") {
        return resultSuccess({
          token: "@guid",
          tokenExpiration: dayjs().add(30, "d").format(),
        });
      } else {
        return resultSuccess({
          token: "",
        });
      }
    },
  },
] as MockMethod[];
