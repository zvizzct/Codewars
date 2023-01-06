//Write a function, which takes a non-negative integer (seconds)
//as input and returns the time in a human-readable format (HH:MM:SS)
//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59

function humanReadable(seconds) {
  let string = "";
  if (seconds <= 359999) {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const min = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    string = `${hours}:${min}:${sec}`;
  } else {
    string = "You have exceeded the maximum seconds";
  }
  return string;
}
