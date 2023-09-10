package com.gigahack.dashboard.controller

import com.gigahack.dashboard.model.Customer
import com.gigahack.dashboard.model.CustomerDTO
import com.gigahack.dashboard.repository.CustomerRepository
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/customer")
class CustomerController(
  private val customerRepository: CustomerRepository,
  private val mongoTemplate: MongoTemplate
) {

  @GetMapping(produces = ["application/json"])
  fun findAll(@RequestParam search: String): ResponseEntity<List<Customer>> {
    val query = Query()
    val criteria = Criteria()
    criteria.orOperator(
      Criteria.where("city").regex(search, "i"),
        Criteria.where("name").regex(search, "i")
    )

    query.addCriteria(criteria)
    query.limit(10)
    val result = mongoTemplate.find(query, Customer::class.java)

    return ResponseEntity.ok(result)
  }

  @PostMapping()
  fun save(@RequestBody customerDto: CustomerDTO): Customer {
    val customer = Customer(
      id = customerDto.id,
      name = customerDto.name,
      volumeSegment = customerDto.volumeSegment,
      city = customerDto.city,
      region = customerDto.region,
      srCode = customerDto.srCode,
      channel = customerDto.channel,
      locationType = customerDto.locationType,
      preferentialSegment = customerDto.preferentialSegment
    )
    return customerRepository.save(customer)
  }

  @PostMapping("/all")
  fun saveAll(@RequestBody customers: MutableList<CustomerDTO>): MutableList<Customer> {
    val saveCustomers = customers.map {
      Customer(
        id = it.id,
        name = it.name,
        volumeSegment = it.volumeSegment,
        city = it.city,
        region = it.region,
        srCode = it.srCode,
        channel = it.channel,
        locationType = it.locationType,
        preferentialSegment = it.preferentialSegment
      )
    }
    return customerRepository.saveAll(saveCustomers)
  }
}