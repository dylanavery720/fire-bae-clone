function formatPrettyDate(date) {
  return date ? date.format('MMMM Do Y') : '';
}

function formatTimeStamp(date) {
  return date ? date.format() : '';
}

export { formatPrettyDate, formatTimeStamp };