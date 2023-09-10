package com.gigahack.dashboard.ml

import org.python.util.PythonInterpreter
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component

@Component
class ProphetModelLoader {

  @Bean
  private fun modelInterpreter(): PythonInterpreter {
    val interpreter = PythonInterpreter()
    interpreter.exec("from prophet.serialize import model_from_json")
    interpreter.exec("with open('serialized_model.json', 'r') as fin:\n"
        + "    m = model_from_json(fin.read())")

    return interpreter
  }
}