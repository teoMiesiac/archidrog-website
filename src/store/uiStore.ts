import { action, makeObservable, observable } from 'mobx'

class UIStore {
  headerHeight = 0
  constructor() {
    makeObservable(this, {
      headerHeight: observable,
      setHeaderHeight: action
    })
  }

  setHeaderHeight = (height: number) => {
    this.headerHeight = height
  }
}

export { UIStore }
