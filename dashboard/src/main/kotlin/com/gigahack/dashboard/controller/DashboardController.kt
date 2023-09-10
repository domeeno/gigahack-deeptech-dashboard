package com.gigahack.dashboard.controller

import com.gigahack.dashboard.model.Brand
import com.gigahack.dashboard.model.Customer
import com.gigahack.dashboard.model.Product
import com.gigahack.dashboard.model.StoreData
import com.gigahack.dashboard.model.Subproduct
import com.gigahack.dashboard.model.UserSettings
import com.gigahack.dashboard.model.UserSettingsDTO
import com.gigahack.dashboard.repository.CustomerRepository
import com.gigahack.dashboard.repository.DashboardRepository
import com.gigahack.dashboard.repository.ProductRepository
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import kotlin.jvm.optionals.getOrDefault

@RequestMapping("/dash")
@RestController
class DashboardController(
  private val dashboardRepository: DashboardRepository,
  private val customerRepository: CustomerRepository,
  private val productRepository: ProductRepository,
  private val mongoTemplate: MongoTemplate
) {

  @GetMapping("/stores")
  fun getStoresData(): List<Customer> {
    val settings = dashboardRepository.findById(333)

    return customerRepository.findAllById(settings.get().customers)
  }

  @GetMapping("/products")
  fun getProductData(): List<Product> {
    val settings = dashboardRepository.findById(333)

    return if (settings.isPresent) {
      productRepository.findAllById(settings.get().brands)
    } else {
      emptyList()
    }
  }

  @GetMapping()
  fun getSettings(): List<StoreData> {
    val settings = dashboardRepository.findById(333)
    val stores = customerRepository.findAllById(settings.get().customers)

    val brands = findAllByGroupCode(settings.get().brands)

    val uniqueBrands = brands.distinctBy { it.groupCode }

    val additionalData = mutableListOf<Brand>()
    uniqueBrands.forEach { product ->
      additionalData.add(
        Brand(
          id = product.groupCode,
          name = product.groupCode.toString(),
          products = brands
            .filter { it.groupCode == product.groupCode }
            .map {
              Subproduct(
                id = it.parentCode,
                name = it.parentCode.toString(),
                volume = it.volume,
                imported = it.imported
              )
            }
        )
      )
    }

    return stores.map { customer ->
      StoreData(
        id = customer.id,
        name = customer.name,
        region = customer.region,
        city = customer.city,
        brands = additionalData
      )
    }
  }

  @PostMapping("/settings/{customerId}")
  fun saveSettings(@PathVariable customerId: Int): String {
    val dashboardOptional = dashboardRepository.findById(333)
    val dashboard = dashboardOptional.get()

    return if (dashboard.customers.contains(customerId)) {
      "success"
    } else {
      dashboard.customers.add(0, customerId)
      dashboardRepository.save(dashboard)
      "success"
    }
  }

  @DeleteMapping("/settings/{customerId}")
  fun deleteSettings(@PathVariable customerId: Int): String {
    val dashboardOptional = dashboardRepository.findById(333)
    val dashboard = dashboardOptional.get()

    return if (dashboard.customers.contains(customerId)) {
      dashboard.customers.remove(customerId)
      dashboardRepository.save(dashboard)
      "success"
    } else {
      "success"
    }
  }


  //  @PostMapping("/settings")
  fun saveSettings(@RequestBody userSettingsDTO: UserSettingsDTO): String {
    return dashboardRepository.save(
      UserSettings(
        id = userSettingsDTO.id,
        customers = userSettingsDTO.customers,
        brands = userSettingsDTO.brands
      )
    ).id.toString()
  }

  private fun findAllByGroupCode(brands: List<Int>): List<Product> {
    val query = Query()
    query.addCriteria(
      Criteria.where("groupCode").`in`(brands)
    )
    return mongoTemplate.find(query, Product::class.java)
  }
}
