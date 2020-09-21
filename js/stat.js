'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_OFFSET = 10;
var MESSAGE_FONT = '16px PT Mono';
var TEXT_OFFSET = 30;
var TEXT_LINE_HEIGHT = 20;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var USER_COLOR = 'rgba(255, 0, 0, 1)';
var GAP = 50;
var BAR_START_X = 130;
var BAR_START_Y = 250;
var TEXT_LINE_ONE = 'Ура вы победили!';
var TEXT_LINE_TWO = 'Список результатов:';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, color, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = MESSAGE_FONT;
  ctx.fillText(text, x, y);
};

var getRandomBlueColor = function () {
  var saturation = Math.floor(Math.random() * 100);
  var color = 'hsl(240, ' + saturation + '%, 50%)';
  return color;
};

var renderBar = function (ctx, color, xOffset, barHeight, playerName, playerScore) {
  ctx.fillStyle = color;
  ctx.fillRect(BAR_START_X + xOffset, BAR_START_Y, BAR_WIDTH, -barHeight);
  renderText(ctx, '#000000', playerName, BAR_START_X + xOffset, BAR_START_Y + 20);
  renderText(ctx, '#000000', playerScore, BAR_START_X + xOffset, BAR_START_Y - barHeight - 10);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderText(ctx, '#000000', TEXT_LINE_ONE, CLOUD_X + TEXT_OFFSET, CLOUD_Y + TEXT_OFFSET);
  renderText(ctx, '#000000', TEXT_LINE_TWO, CLOUD_X + TEXT_OFFSET, CLOUD_Y + TEXT_OFFSET + TEXT_LINE_HEIGHT);

  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      var barColor = USER_COLOR;
    } else {
      barColor = getRandomBlueColor();
    }
    renderBar(ctx, barColor, GAP * i * 2, (MAX_BAR_HEIGHT * times[i]) / maxTime, players[i], Math.round(times[i]));
  }
};
