package com.gigahack.dashboard.repository

import com.gigahack.dashboard.model.Customer
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CustomerRepository : MongoRepository<Customer, Long> {
}