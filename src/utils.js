export const getDropdownPosition = (triggerEl, dropDownEl, placement, offset) => {
  const { innerWidth, innerHeight } = window
  const { height: dropdownHeight, width: dropdownWidth } = dropDownEl.getBoundingClientRect()
  const { left, top, width: triggerWidth, height: triggerHeight } = triggerEl.getBoundingClientRect()

  let offsetTopX = top + triggerHeight - (dropdownHeight / 2)
  if (offsetTopX - dropdownHeight < 0) offsetTopX = 0
  else if (offsetTopX + dropdownHeight > innerHeight) {
    offsetTopX = innerHeight - dropdownHeight - offset
  }

  let offsetLeftY = left + (triggerWidth / 2) - (dropdownWidth / 2)
  if (offsetLeftY < 0) offsetLeftY = 0
  else if (offsetLeftY + triggerWidth > innerWidth) {
    offsetLeftY = innerWidth - offset - dropdownWidth
  }

  switch (placement) {
    default:
    case 'left': {
      let offsetLeft = left - dropdownWidth - offset
      offsetLeft = offsetLeft - dropdownWidth < 0 ? 0 : offsetLeft
      return { left: `${offsetLeft}px`, top: `${offsetTopX}px` }
    }
    case 'right': {
      let offsetLeft = left + triggerWidth + offset
      offsetLeft = offsetLeft + triggerWidth > innerWidth ? innerWidth - offset - dropdownWidth - 20 : offsetLeft
      return { left: `${offsetLeft}px`, top: `${offsetTopX}px` }
    }
    case 'top': {
      let offsetTop = top - dropdownHeight - offset
      offsetTop = offsetTop < 0 ? 0 : offsetTop
      return { left: `${offsetLeftY}px`, top: `${offsetTop}px` }
    }
    case 'bottom': {
      let offsetTop = top + triggerHeight * 1.4 + offset
      offsetTop = offsetTop + triggerHeight > innerHeight ? innerHeight - dropdownHeight - (triggerHeight / 1.3) - offset : offsetTop
      return { left: `${offsetLeftY}px`, top: `${offsetTop}px` }
    }
  }
}
