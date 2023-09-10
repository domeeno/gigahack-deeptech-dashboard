package com.gigahack.dashboard.controller

import com.gigahack.dashboard.model.Customer
import com.gigahack.dashboard.model.Product
import com.gigahack.dashboard.repository.CustomerRepository
import com.gigahack.dashboard.repository.DashboardRepository
import com.gigahack.dashboard.repository.ProductRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import kotlin.jvm.optionals.getOrDefault

@RequestMapping("/dash")
@RestController
class DashboardController(
  private val dashboardRepository: DashboardRepository,
  private val customerRepository: CustomerRepository,
  private val productRepository: ProductRepository
) {

  @GetMapping("/stores")
  fun getStoresData(): List<Customer> {
    val settings = dashboardRepository.findById(333)

    return customerRepository.findAllById(settings.get().customers)
  }

  @GetMapping("/products")
  fun getProductData(): List<Product> {
    val settings = dashboardRepository.findById(333)

    return if(settings.isPresent) {
      productRepository.findAllById(settings.get().products)
    } else {
      emptyList()
    }
  }
}