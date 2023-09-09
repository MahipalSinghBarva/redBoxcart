import React, {useEffect, useContext} from 'react'
import './Home.scss'
import Banner from './Banner/Banner'
import Categorys from '../Home/Category/Category'
import Products from '../Product/Products'
import {fetchDataFromApi} from '../../utils/api'
import {Context} from '../../utils/Context'

const Home = () => {

  const {categories, setCategories, products, setProduct} = useContext(Context)

  useEffect(()=>{
    getCategories()
    getProducts()
  }, [])

  const getProducts = () =>{
    fetchDataFromApi("/api/descs?populate=*").then(res => {
      console.log(res)
      setProduct(res)
    })
  }

  const getCategories = () =>{
    fetchDataFromApi("/api/categories?populate=*").then(res => {
      console.log(res)
      setCategories(res)
    })
  }

  return (
    <div>
      
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Categorys categories={categories}/>
          <Products products={products} headingText='Popular Products'/>
        </div>
      </div>
      
    </div>
  )
}

export default Home
