interface KeyDownCallback {
  (e: KeyboardEvent): void
}

const keydownListeners: KeyDownCallback[] = []

window.addEventListener('keydown', (e) => {
  keydownListeners.forEach(keydown => keydown(e))
})

export const onKeydown = (cb: KeyDownCallback) => {
  keydownListeners.push(cb)

  return () => {
    const index = keydownListeners.findIndex(item => item === cb)

    if (index > -1) {
      keydownListeners.splice(index, 1)
    }
  }
}
