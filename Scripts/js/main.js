// PreLoder Js

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
  }, 10);
});

// ============ Left Sidebar Js ==============

$(document).on("click", "#sidebar li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// ============ Left Sidebar  Submenu Js ==============

$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(document).ready(function () {
  $(".sidebarcollapse").click(function () {
    $(".left-menu").toggleClass("hide");
    $(".content-wrapper").toggleClass("hide");
  });
});

// ************ DataTable *********

$("#order-list-table").DataTable({
  ordering: false,
  lengthMenu: [5, 10, 15, 50, 100],
});

$("#equipment-assign-table").DataTable({
  ordering: false,
  lengthMenu: [5, 10, 15, 50, 100],
});
