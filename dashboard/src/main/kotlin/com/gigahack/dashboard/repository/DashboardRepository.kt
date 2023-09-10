package com.gigahack.dashboard.repository

import com.gigahack.dashboard.model.UserSettings
import org.springframework.data.mongodb.repository.MongoRepository

interface DashboardRepository : MongoRepository<UserSettings, Long>