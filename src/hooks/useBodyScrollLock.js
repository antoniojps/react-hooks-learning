import { useLayoutEffect } from 'react'

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalValue = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    // clean up function, runs on unmount
    // works with useLayoutEffect or useEffect
    return () => (document.body.style.overflow = originalValue)
  })
}

export { useBodyScrollLock }
