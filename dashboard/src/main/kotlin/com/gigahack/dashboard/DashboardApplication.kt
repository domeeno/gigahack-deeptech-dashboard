package com.gigahack.dashboard

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DashboardApplication

fun main(args: Array<String>) {
	runApplication<DashboardApplication>(*args)
}
