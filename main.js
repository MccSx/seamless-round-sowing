let n = 1
setInterval(() => {
  makeLeft(getImage(n))
  .one('transitionend', (e) => {
    makeRight($(e.currentTarget))
  })
  makeCurrent(getImage(n+1))
  n += 1
}, 2000)

function count(m) {
  if (m > 5) {
    m = m%5
    if (m === 0) {
      m = 5
    }
  }
  return m
}
function getImage(n) {
  return $(`.images>img:nth-child(${count(n)})`)
}
function makeLeft($node) {
  return $node.removeClass('current right').addClass('left')
}
function makeRight($node) {
  return $node.removeClass('left current').addClass('right')
}
function makeCurrent($node) {
  return $node.removeClass('right left').addClass('current')
}