export function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const formattedSeconds = secs < 10 ? `0${secs}` : secs

  return `${formattedMinutes}:${formattedSeconds}`
}
