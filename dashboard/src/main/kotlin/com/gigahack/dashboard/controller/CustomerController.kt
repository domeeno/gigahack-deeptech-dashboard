package com.gigahack.dashboard.controller

import com.gigahack.dashboard.model.Customer
import com.gigahack.dashboard.model.CustomerDTO
import com.gigahack.dashboard.repository.CustomerRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/customer")
class CustomerController(
  private val customerRepository: CustomerRepository
) {


  @GetMapping()
  fun findAll(): List<Customer> {
    return customerRepository.findAll()
  }

  @PostMapping()
  fun save(@RequestBody customerDto: CustomerDTO): Customer {
    val customer = Customer(
      id = customerDto.id,
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