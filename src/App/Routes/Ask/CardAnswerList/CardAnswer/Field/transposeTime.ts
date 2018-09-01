export const transposeTime = (time: Date): string => {
  const target = time.getTime()
  const diff = Date.now() - target

  if (diff < 1000 * 60) {
    return `${Math.floor(diff / 1000)}초 전`
  }

  if (diff < 1000 * 60 * 60) {
    return `${Math.floor(diff / (1000 * 60))}분 전`
  }

  if (diff < 1000 * 60 * 60 * 24) {
    return `${Math.floor(diff / (1000 * 60 * 60))}시간 전`
  }

  if (diff < 1000 * 60 * 60 * 24 * 30) {
    return `${Math.floor(diff / (1000 * 60 * 60 * 24))}일 전`
  }

  const year = time.getUTCFullYear()
  const month = time.getUTCMonth() + 1
  const date = time.getUTCDate()
  const hour = time.getUTCHours()
  const minute = time.getUTCMinutes()
  const second = time.getUTCSeconds()

  return `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 ${second}초`
}
