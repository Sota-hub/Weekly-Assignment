"use strict";

function findOffset(element) {
  let top = 0,
    left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
}

window.onload = function () {
  let stickyHeader = document.getElementById("lower_header");
  let headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    let bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add("fixed");
    } else {
      stickyHeader.classList.remove("fixed");
    }
  };
};
