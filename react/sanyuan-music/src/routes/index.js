// 路由的本质
// 路由级别的页面
// 二级路由
// 嵌套

import React, { lazy, Suspense } from 'react'  // react的优化项之一: 路由懒加载
import { Redirect } from 'react-router-dom'
import SingersComponent from '../application/Singer'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'
// import Recommend from '../application/Recommend'
const RecommendComponent = lazy(() => import("../application/Recommend/"))

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}>

      </Component>
    </Suspense>
  )
}

export default [{
  component: BlankLayout,
  routes: [
    {
      path: "/",
      component: HomeLayout,
      routes: [
        {
          path: "/",
          exact: true,
          render: () => <Redirect to={"/recommend"} />
        },
        {
          path: "/recommend",
          component: SuspenseComponent(RecommendComponent)
        },
        {
          path: "/singers",
          component: SuspenseComponent(SingersComponent),
          key: "singers"
        },
        // {
        //   path: "/rank",
        //   component: RankComponent
        // }
      ]
    }
  ]
}]
// [
//   {
//     component: BlankLayout,
//     routes: [
//       {
//         path: '/',
//         exact: true,
//         render: () => <Redirect to={"/recommend"} />
//       },
//       {
//         path: '/recommend',
//         component: Recommend,
//         // routes: [
//         //   {
//         //     path: '/recommend/:id',
//         //     component: AlbumComponent
//         //   }
//         // ]
//       }
//     ]
//   }
// ]