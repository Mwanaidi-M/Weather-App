import { format } from "date-fns";

const formatDateImg = (() => {
  // let sampleDate = 1654275600;
  // const readableDate = new Date(sampleDate * 1000);
  // let uDay, uDate, uTime, uGen;
  // uDay = format(readableDate, "EEEE");
  // uDate = format(readableDate, "dd MMM");
  // uTime = format(readableDate, "HH:mm");
  // uGen = format(readableDate, "EEEE dd MMM HH:mm O");

  // console.log(readableDate);
  // console.log(
  //   `Day of given date is: ${uDay}.\nDate of given date is: ${uDate}.\nFull time from date: ${uTime}.\nFully date is: ${uGen}.`
  // );

  const lgWeatherImg = {
    "01d": "../src/images/clear-sky-lg.png",
    "01n": "../src/images/clear-sky-night-lg.png",
    "02d": "../src/images/few-clouds-lg.png",
    "02n": "../src/images/few-clouds-night-lg.png",
    "03d": "../src/images/sctr-cld-lg.png",
    "03n": "../src/images/sctr-cld-n-lg.png",
    "04d": "../src/images/brk-cld-dn-lg.png",
    "04n": "../src/images/brk-cld-dn-lg.png",
    "09d": "../src/images/sh-rain-lg.png",
    "09n": "../src/images/sh-rain-n-lg.png",
    "10d": "../src/images/rainy-day-lg.png",
    "10n": "../src/images/rainy-n-lg.png",
    "11d": "../src/images/lightning-dn-lg.png",
    "11n": "../src/images/lightning-dn-lg.png",
    "13d": "../src/images/snow-dn-lg.png",
    "13n": "../src/images/snow-dn-lg.png",
    "50d": "../src/images/mist-dn-lg.png",
    "50n": "../src/images/mist-dn-lg.png",
  };

  const smWeatherImg = {
    "01d": "../src/images/clear-sky-sm.png",
    "01n": "../src/images/clear-sky-night-sm.png",
    "02d": "../src/images/few-clouds-sm.png",
    "02n": "../src/images/few-clouds-night-sm.png",
    "03d": "../src/images/sctr-cld-sm.png",
    "03n": "../src/images/sctr-cld-n-sm.png",
    "04d": "../src/images/brk-cld-dn-sm.png",
    "04n": "../src/images/brk-cld-dn-sm.png",
    "09d": "../src/images/sh-rain-sm.png",
    "09n": "../src/images/sh-rain-n-sm.png",
    "10d": "../src/images/rainy-day-sm.png",
    "10n": "../src/images/rainy-n-sm.png",
    "11d": "../src/images/lightning-dn-sm.png",
    "11n": "../src/images/lightning-dn-sm.png",
    "13d": "../src/images/snow-dn-sm.png",
    "13n": "../src/images/snow-dn-sm.png",
    "50d": "../src/images/mist-dn-sm.png",
    "50n": "../src/images/mist-dn-sm.png",
  };

  function setGeneralDate(timeStamp) {
    let formatedDate = new Date(timeStamp * 1000);
    const genDate = format(formatedDate, "EEEE dd MMM HH:mm O");
    return genDate;
  }

  function setFormattedTime(timeStamp) {
    let formatedDate = new Date(timeStamp * 1000);
    const timeSet = format(formatedDate, "HH:mm");
    return timeSet;
  }

  function setDay(timeStamp) {
    let formatedDate = new Date(timeStamp * 1000);
    const daySet = format(formatedDate, "EEEE");
    return daySet;
  }

  function setDateFormat(timeStamp) {
    let formatedDate = new Date(timeStamp * 1000);
    const dateSet = format(formatedDate, "dd MMM");
    return dateSet;
  }

  function setLgImg(imgCode) {
    return lgWeatherImg[imgCode];
  }

  function setSmImg(imgCode) {
    return smWeatherImg[imgCode];
  }

  return {
    setGeneralDate,
    setFormattedTime,
    setDay,
    setDateFormat,
    setLgImg,
    setSmImg,
  };
})();

export { formatDateImg };
