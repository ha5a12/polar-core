package com.tabbyml.intellijtabby.widgets

import com.intellij.openapi.project.DumbAware
import com.intellij.openapi.project.Project
import com.intellij.openapi.wm.ToolWindow
import com.intellij.openapi.wm.ToolWindowFactory
import com.intellij.ui.content.ContentFactory
import com.tabbyml.intellijtabby.chat.ChatBrowser

class ChatToolWindowFactory : ToolWindowFactory, DumbAware {
  override fun createToolWindowContent(project: Project, toolWindow: ToolWindow) {
    val browserComponent = ChatBrowser(project).getBrowserComponent()
    val content = ContentFactory.getInstance().createContent(browserComponent, "", false)
    toolWindow.contentManager.addContent(content)
  }

  override fun shouldBeAvailable(project: Project) = true
}