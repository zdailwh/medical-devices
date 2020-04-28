import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Sidebar from '@/views/sidebar'
import Index from '@/views/index'
import ProductList from '@/views/productList'
import ProductItem from '@/views/productItem'
import AboutUs from '@/views/aboutUs'
import Feedback from '@/views/feedback'
import ContactUs from '@/views/contactUs'
import News from '@/views/news'
import NewsItem from '@/views/newsItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/guide/index'
    },
    {
      path: '/guide',
      component: Layout,
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'enter',
          component: Sidebar,
          children: [
            {
              path: 'productList',
              component: ProductList
            },
            {
              path: 'productItem',
              component: ProductItem
            },
            {
              path: 'news',
              component: News
            },
            {
              path: 'newsItem',
              component: NewsItem
            },
            {
              path: 'aboutUs',
              component: AboutUs
            },
            {
              path: 'feedback',
              component: Feedback
            },
            {
              path: 'contactUs',
              component: ContactUs
            }
          ]
        }
      ]
    }
  ]
})
