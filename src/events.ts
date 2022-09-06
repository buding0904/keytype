interface KeyDownCallback {
  (e: KeyboardEvent): void
}

const events: KeyDownCallback[] = []

window.addEventListener('keydown', (e) => {
  events.forEach(keydown => keydown(e))
})

export const onKeydown = (cb: KeyDownCallback) => {
  events.push(cb)

  return () => {
    const index = events.findIndex(item => item === cb)

    if (index > -1) {
      events.splice(index, 1)
    }
  }
}
