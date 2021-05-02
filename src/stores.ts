import { Converter } from 'showdown'
import { writable } from 'svelte/store'

export const editorEnabledStore = writable(!Boolean(chrome.runtime))
export const markdownTextStore = writable('')
export const convertedHtmlStore = writable('')

const converter = new Converter()
markdownTextStore.subscribe((markdown) => {
  const html = converter.makeHtml(markdown)
  convertedHtmlStore.set(html)
})

if (chrome.runtime) {
  chrome.runtime.onMessage.addListener((message, sender) => {
    // Open the editor
    if (!sender.tab && message === 'toggle') {
      editorEnabledStore.update((enabled) => !enabled)
    }
  })
} else {
  console.warn('chrome.runtime doesnt exists. Are you in an extension context?')
}
