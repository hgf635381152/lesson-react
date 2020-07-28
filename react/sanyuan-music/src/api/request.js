import { axiosInstance } from './config';

// export const getRecommendListRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: [{
//           id: 1,
//           title: 'aaaaaa'
//         }]
//       })
//     }, 1000)
//   })
// }

// 项目所有请求API的列表文件
// 每个请求对应一个函数
// 每个函数都是返回一个promise

// api 与 actions的分离
// axiosInstance.get   返回是Promise

// 首页广告
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// 推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 歌手列表, 支持分页   0 - 50 - 100
// reducer init: {singerList: [], offest: 0}
// useEffect dispatch getHotSingerList   异步
// -> getHotSingerListRequest API 请求
// then 
  // changeSingerList   [] -> [...data]  同步
  // changeOffest   0 -> data.length  同步
  // better-scroll   baseUI  scroll/index.js   上拉触底加载更多

  // 下拉刷新的时候, 过程是怎么样的
  // onPullDown offest 0 changeOffest 0
  // getHotSingerList -> getHotSingerListRequest(API) ->
  // changeSingerList

  // 前后端合作的要素有哪些?
    // 1. 接口地址
      // url   /top/artists  请求  RESTFUL  资源的暴露
    // 2. 传参
    // 3. 接口文档
export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};


// history.push() / Link   id由路由传参传递
export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};

export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
  return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
};

export const getLyricRequest = id => {
  return axiosInstance.get(`/lyric?id=${id}`);
};

export const loginByPhoneRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};

export const sentVcodeRequest = phone => {
  return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};

export const loginByVcodeRequest = (phone, vcode) => {
  return axiosInstance.get(`/captcha/verify?phone=${phone}&captcha=${vcode}`);
};