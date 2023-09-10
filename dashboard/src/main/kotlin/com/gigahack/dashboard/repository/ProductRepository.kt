package com.gigahack.dashboard.repository

import com.gigahack.dashboard.model.Product
import org.springframework.data.mongodb.repository.MongoRepository

interface ProductRepository: MongoRepository<Product, Int> {
}