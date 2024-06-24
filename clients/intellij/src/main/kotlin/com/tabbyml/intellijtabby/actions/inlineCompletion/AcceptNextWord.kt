package com.tabbyml.intellijtabby.actions.inlineCompletion

import com.intellij.openapi.editor.Editor
import com.tabbyml.intellijtabby.completion.InlineCompletionService

class AcceptNextWord : InlineCompletionAction(object : InlineCompletionActionHandler {
  override fun doExecute(editor: Editor, offset: Int, inlineCompletionService: InlineCompletionService) {
    inlineCompletionService.accept(editor, offset, InlineCompletionService.AcceptType.NEXT_WORD)
  }
})
