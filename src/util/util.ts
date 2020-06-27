
export const formatDate = (date: string) => {
  return date
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/")
}

export const getIntFromDate = (date: string) => {
  date = date.replace("T", "")
  date = date.replace("Z", "")
  date = date.replace(".", "")
  date = date.replace(/:/g, "")
  date = date.replace(/-/g, "")
  return parseInt(date, 10)
}

export const throttle = (func: (...args: any) => any, delay: number) => {
  let inProgress = false
  return (...args: any) => {
    if (inProgress)
    {
      return
    }
    inProgress = true
    func(...args) // Consider moving this line before the set timeout if you want the very first one to be immediate
    setTimeout(() => {
      inProgress = false
    }, delay)
  }
}
