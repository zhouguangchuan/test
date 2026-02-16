// 从 Vue CDN 中导入 createApp 方法（和原来一致）

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// 创建 Vue 应用并配置逻辑，最后挂载到 #container
createApp({
  data() {
    return {
      searchEmp: {
        name: '',
        gender: '',
        job: ''
      },
      empList: [
        { "id": 1,
          "name": "谢逊",
          "image": "https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/4.jpg",
          "gender": 1,
          "job": "1",
          "entrydate": "2023-06-09",
          "updatetime": "2024-07-30T14:59:38"
        },
        {
          "id": 2,
          "name": "韦一笑",
          "image": "https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg",
          "gender": 1,
          "job": "1",
          "entrydate": "2020-05-09",
          "updatetime": "2023-07-01T00:00:00"
        },
        {
          "id": 3,
          "name": "黛绮丝",
          "image": "https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/2.jpg",
          "gender": 2,
          "job": "2",
          "entrydate": "2021-06-01",
          "updatetime": "2023-07-01T00:00:00"
        }
      ]
    }
  },
  methods: {
    search() {
      console.log(this.searchEmp)
    },
    clear() {
      this.searchEmp = {
        name: '',
        gender: '',
        job: ''
      }
    }
  }
}).mount('#container')