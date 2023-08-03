package com.tabbyml.intellijtabby.editor

import com.intellij.openapi.components.Service
import com.intellij.openapi.components.service
import com.intellij.openapi.diagnostic.Logger
import com.intellij.openapi.editor.Editor
import com.tabbyml.intellijtabby.agent.AgentService
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Service
class CompletionScheduler {
  private val logger = Logger.getInstance(CompletionScheduler::class.java)

  data class CompletionContext(val editor: Editor, val offset: Int, val job: Job)

  var scheduled: CompletionContext? = null
    private set

  fun schedule(editor: Editor, offset: Int, triggerDelay: Long = 150) {
    val agentService = service<AgentService>()
    val inlineCompletionService = service<InlineCompletionService>()
    clear()
    val job = agentService.scope.launch {
      logger.info("Schedule completion at $offset after $triggerDelay ms.")
      delay(triggerDelay)
      logger.info("Trigger completion at $offset")
      agentService.getCompletion(editor, offset)?.let {
        inlineCompletionService.show(editor, offset, it)
      }
    }
    scheduled = CompletionContext(editor, offset, job)
  }

  fun clear() {
    val inlineCompletionService = service<InlineCompletionService>()
    inlineCompletionService.dismiss()
    scheduled?.let {
      it.job.cancel()
      scheduled = null
    }
  }
}