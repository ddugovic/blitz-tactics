// onboarding message on first level of repetition mode

import { subscribe } from '../../../store'

export default class Onboarding {

  get el() {
    return document.querySelector(`.onboarding`)
  }

  constructor() {
    if (!this.el) {
      return
    }
    subscribe({
      'puzzles:start': () => this.el.classList.add(`invisible`)
    })
  }
}
