export default class ThumbsUp {
  constructor (count, id) {
    this.count = count
    this.id = id
    this.animNode = []
  }

  addPraise () {
    return this.count++
  }

  createAnimaNode () {
    const animNode = document.createElement('span')
    animNode.className = 'add-prise'
    animNode.innerText = `+${this.addPraise()}`
    this.animNode.push[animNode]
    const parentNode = document.getElementById(this.id)
    parentNode.appendChild(animNode)
  }

  removeNode () {
    const parentNode = document.getElementById(this.id)
    if (this.animNode && this.animNode.length > 0) {
      parentNode.removeChild(this.animNode.splice(0, 1))
    }
  }

  delayCommit () {
    setTimeout(() => {
      this.removeNode()
    }, 500)
  }
}
