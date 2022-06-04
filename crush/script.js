async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1000)
  node.innerText = ""
  await node.type('I Like ')
  
  while (true) {
    await node.type('Coding')
    await sleep(2000)
    await node.delete('Coding')
    await node.type('Design')
    await sleep(2000)
    await node.delete('Design')
    await node.type('You')
    await sleep(2000)
    await node.delete('You')
  }
}


const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('by-andre', TypeAsync, { extends: 'span' })


init()