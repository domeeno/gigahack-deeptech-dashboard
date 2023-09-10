package com.gigahack.dashboard.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

// Security config to allow cors and disable csrf

@Configuration
class SecurityConfig : WebMvcConfigurer {

  override fun addCorsMappings(registry: org.springframework.web.servlet.config.annotation.CorsRegistry) {
    registry.addMapping("/**")
      .allowedOriginPatterns("*")
      .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD")
      .allowCredentials(true)
  }
}