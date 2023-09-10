package com.gigahack.dashboard.controller

import com.gigahack.dashboard.model.Product
import com.gigahack.dashboard.model.ProductDTO
import com.gigahack.dashboard.repository.ProductRepository
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/product")
class ProductController(
  private val productRepository: ProductRepository
) {
  @PostMapping("/all")
  fun saveAll(@RequestBody productDto: List<ProductDTO>): MutableList<Product> {
    val saves = productDto.map {
      Product(
        parentCode = it.parentCode,
        groupCode = it.groupCode,
        imported = it.imported,
        alcoGroup = it.alcoGroup,
        volume = it.volume,
        packageType = it.packageType,
        materialType = it.materialType,
        priceSegment = it.priceSegment
      )
    }
    return productRepository.saveAll(saves)
  }

}