function humanReadable(seconds) {
  return (Math.floor(seconds / 3600)).toString() + ':' + (Math.floor(seconds/60)).toString() + ':' + (seconds%60).toString();
}