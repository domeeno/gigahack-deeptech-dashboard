package com.gigahack.dashboard.repository

import com.gigahack.dashboard.model.Customer
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface CustomerRepository : MongoRepository<Customer, Int> {
  fun findByCityIgnoreCaseContaining(@Param("search") search: String): List<Customer>
}