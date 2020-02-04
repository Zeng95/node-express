const fs = require('fs')
const path = require('path')
const root = require('../utils/root')

class Product {
  constructor(title,  description, imageUrl, price) {
    this.title = title
    this.price = price
    this.imageUrl = imageUrl
    this.description = description
  }

  store() {
    const p = path.join(root, 'data/products.json')

    // 读文件
    fs.readFile(p, 'utf8', (error, data) => {
      let products = []

      if (!error) {
        products = JSON.parse(data)
      }

      products.push(this)

      // 写文件
      fs.writeFile(p, JSON.stringify(products), (error) => {
        if (error) throw error
        console.log('成功')
      })
    })
  }

  static fetchAll(callback) {
    const p = path.join(root, 'data/products.json')

    fs.readFile(p, 'utf8', (error, data) => {
      if (error) {
        callback([])
      } else {
        callback(JSON.parse(data))
      }
    })
  }
}

module.exports = Product