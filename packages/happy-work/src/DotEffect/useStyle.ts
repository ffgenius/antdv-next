export const TARGET_ATTR = 'data-happy-wave-target'

export const antWaveTargetEffect = `
@keyframes antWaveTargetEffect {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  35% {
    transform: scale(0.94);
  }
  60% {
    transform: scale(1.05);
  }
  85% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
}
`

export const antWaveDotEffect = `
@keyframes antWaveDotEffect {
  0% {
    opacity: 0;
    left: var(--start-x);
    top: var(--start-y);
    width: var(--start-size);
    height: var(--start-size);
    background: var(--background);
    border: var(--border);
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    left: var(--end-x);
    top: var(--end-y);
    width: var(--end-size);
    height: var(--end-size);
    background: var(--background);
    border: var(--border);
  }
}
`

let styleInjected = false

export function injectStyles(hashId: string) {
  if (styleInjected)
    return

  const styleId = 'happy-work-theme-styles'
  if (document.getElementById(styleId))
    return

  const style = document.createElement('style')
  style.id = styleId
  style.textContent = `
    ${antWaveTargetEffect}
    ${antWaveDotEffect}

    [${TARGET_ATTR}-${hashId}], & [${TARGET_ATTR}-${hashId}] {
      animation-name: antWaveTargetEffect;
      animation-duration: 0.45s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: backwards;
    }

    .happy-wave {
      position: fixed;
      pointer-events: none;
      z-index: 999999;
    }

    .happy-wave-dot {
      box-sizing: border-box;
      position: absolute;
      border-radius: 100%;
      opacity: 0;
      transform: translate3d(-50%, -50%, 0);
      z-index: 999999;
    }

    .happy-wave-dot.happy-in-out-active {
      animation-name: antWaveDotEffect;
      animation-duration: 0.6s;
      animation-timing-function: linear;
      animation-fill-mode: backwards;
    }
  `
  document.head.appendChild(style)
  styleInjected = true
}
