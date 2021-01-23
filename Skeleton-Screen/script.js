/*
 * @Author: your name
 * @Date: 2021-01-23 22:28:49
 * @LastEditTime: 2021-01-23 22:32:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Treasure-Bag/Skeleton-Screen/script.js
 */

$(".image img").hide();

setTimeout(() => {
  $(".card").removeClass("loading");
  $(".image img").show();
  $(".image img").attr("src", "./Sans titre.jpg");
  $("#name").text("Sans titre");
}, 1500);
