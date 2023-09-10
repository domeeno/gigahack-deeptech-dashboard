package com.gigahack.dashboard.controller

import org.python.core.PyObject
import org.python.util.PythonInterpreter
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@RequestMapping("/predict")
@RestController
class PredictController(
  private val interpreter: PythonInterpreter
) {

  @PostMapping()
  fun makePredict(@RequestParam days: Int): String {
    interpreter.exec("future = m.make_future_dataframe(periods=$days)")
    interpreter.exec("forecast = m.predict(future)")

    val forecast = interpreter.get("forecast")
    val stringForecast = forecast.asString()
    val fore = forecast.toString()

    return forecast.toString()
  }
}