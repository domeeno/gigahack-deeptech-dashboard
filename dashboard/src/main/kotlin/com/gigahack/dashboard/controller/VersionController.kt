package com.gigahack.dashboard.controller

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/version")
class VersionController {

  @RequestMapping("/get")
  fun getVersion(): String {
    return "0.0.1-SNAPSHOT"
  }
}