import { API, InlineTool } from '@editorjs/editorjs'
import katex, { KatexOptions } from 'katex'
import 'katex/dist/katex.min.css'

import './math-tool.scss' // we can't use modules because the classnames should be constant

export class InlineMathTool implements InlineTool {
  public datasetSourceName = 'editorjsFormulaSource'
  public api: API
  public tag = 'span'
  public button: HTMLButtonElement | null = null
  private _state = false
  public class: string
  public static title = 'Math'
  public readOnly: boolean
  public input: HTMLInputElement | null = null

  static get isInline() {
    return true
  }

  get state() {
    return this._state
  }

  set state(state) {
    this._state = state

    this.button?.classList.toggle(this.api.styles.inlineToolButtonActive, state)
  }

  constructor({ api, readOnly }: { api: API; readOnly: boolean }) {
    this.api = api
    this.button = null
    this._state = false

    this.tag = 'SPAN'
    this.class = 'math-inline-tool__formula' // it's dangerous to rename it, think twice
    this.readOnly = readOnly
  }

  renderActions() {
    this.input = document.createElement('input')
    this.input.type = 'text'
    this.input.value = ''
    this.input.hidden = true
    this.input.classList.add('math-inline-tool__input')

    return this.input
  }

  tryToRenderInputFormula(formulaWrapper: HTMLElement, options: KatexOptions = {}) {
    const formulaSource = this.input?.value || ''
    formulaWrapper.dataset[this.datasetSourceName] = formulaSource
    try {
      katex.render(formulaSource, formulaWrapper, options)
      const displayModeClassName = 'math-inline-tool__formula_display-mode' // it's dangerous to rename it, think twice
      if (options.displayMode) {
        formulaWrapper.classList.add(displayModeClassName)
      } else {
        formulaWrapper.classList.remove(displayModeClassName)
      }
    } catch (error) {
      if (!options.displayMode) {
        this.tryToRenderInputFormula(formulaWrapper, { ...options, displayMode: true })
      } else {
        formulaWrapper.innerHTML = (error as Error).message
      }
    }
  }

  showActions(formulaWrapper: HTMLElement) {
    if (!this.input) {
      return
    }
    this.input.value = formulaWrapper.dataset[this.datasetSourceName] || formulaWrapper.innerHTML

    this.input.oninput = () => this.tryToRenderInputFormula(formulaWrapper)
    this.input.hidden = false
    this.tryToRenderInputFormula(formulaWrapper)
  }

  hideActions() {
    if (!this.input) {
      return
    }
    this.input.onchange = null
    this.input.hidden = true
  }

  render(...args: any) {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.innerHTML = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14"><path d="M11 1.9a.9.9 0 1 0 0-1.8v1.8ZM1 1V.1a.9.9 0 0 0-.636 1.536L1 1Zm6 6 .636.636a.9.9 0 0 0 0-1.272L7 7Zm-6 6-.636-.636A.9.9 0 0 0 1 13.9V13Zm10 .9a.9.9 0 1 0 0-1.8v1.8ZM11 .1H1v1.8h10V.1ZM.364 1.636l6 6 1.272-1.272-6-6L.364 1.636Zm6 4.728-6 6 1.272 1.272 6-6-1.272-1.272ZM1 13.9h10v-1.8H1v1.8Z" fill="currentColor"/></svg>`
    this.button.classList.add(this.api.styles.inlineToolButton)

    return this.button
  }

  surround(range: Range) {
    if (this.state) {
      this.unwrap(range)
      return
    }

    this.wrap(range)
  }

  wrap(range: Range) {
    const selectedText = range.extractContents()
    const formulaWrapper = document.createElement(this.tag)
    formulaWrapper.setAttribute('contentEditable', 'false')

    formulaWrapper.classList.add(this.class)
    formulaWrapper.appendChild(selectedText)
    range.insertNode(formulaWrapper)

    this.api.selection.expandToTag(formulaWrapper)
  }

  unwrap(range: Range) {
    const formulaWrapper = this.api.selection.findParentTag(this.tag, this.class)
    const fragment = new DocumentFragment()

    formulaWrapper?.remove()
    fragment.append(formulaWrapper?.dataset[this.datasetSourceName] ?? '')

    range.insertNode(fragment)
  }

  checkState(selection: Selection) {
    console.log('check state', { selection })
    // TODO check selection and decide to show formula btn or not
    const formulaWrapper = this.api.selection.findParentTag(this.tag, this.class)

    this.state = !!formulaWrapper

    if (this.state) {
      formulaWrapper && this.showActions(formulaWrapper)
    } else {
      this.hideActions()
    }
    return this.state
  }

  static get sanitize() {
    return {
      span: true,
    }
  }
}
