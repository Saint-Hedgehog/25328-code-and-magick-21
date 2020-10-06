'use strict';

(function () {

  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const SHADOW_OFFSET = 10;
  const MESSAGE_FONT = `16px PT Mono`;
  const TEXT_OFFSET = 30;
  const TEXT_LINE_HEIGHT = 20;
  const MAX_BAR_HEIGHT = 150;
  const BAR_WIDTH = 40;
  const USER_COLOR = `rgba(255, 0, 0, 1)`;
  const GAP = 50;
  const BAR_START_X = 130;
  const BAR_START_Y = 250;
  const TEXT_LINE_ONE = `Ура вы победили!`;
  const TEXT_LINE_TWO = `Список результатов:`;

  const renderCloud = (ctx, x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  const renderText = (ctx, color, text, x, y) => {
    ctx.fillStyle = color;
    ctx.font = MESSAGE_FONT;
    ctx.fillText(text, x, y);
  };

  const getRandomBlueColor = () => {
    const saturation = Math.floor(Math.random() * 100);
    const color = `hsl(240, ${saturation}%, 50%)`;
    return color;
  };

  const renderBar = (ctx, color, xOffset, barHeight, playerName, playerScore) => {
    ctx.fillStyle = color;
    ctx.fillRect(BAR_START_X + xOffset, BAR_START_Y, BAR_WIDTH, -barHeight);
    renderText(ctx, `#000000`, playerName, BAR_START_X + xOffset, BAR_START_Y + 20);
    renderText(ctx, `#000000`, playerScore, BAR_START_X + xOffset, BAR_START_Y - barHeight - 10);
  };

  window.renderStatistics = (ctx, players, times) => {
    renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, `rgba(0, 0, 0, 0.7)`);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);
    renderText(ctx, `#000000`, TEXT_LINE_ONE, CLOUD_X + TEXT_OFFSET, CLOUD_Y + TEXT_OFFSET);
    renderText(ctx, `#000000`, TEXT_LINE_TWO, CLOUD_X + TEXT_OFFSET, CLOUD_Y + TEXT_OFFSET + TEXT_LINE_HEIGHT);

    const maxTime = Math.max.apply(null, times);
    let barColor;

    players.forEach((player, i) => {
      if (player === `Вы`) {
        barColor = USER_COLOR;
      } else {
        barColor = getRandomBlueColor();
      }
      renderBar(ctx, barColor, GAP * i * 2, (MAX_BAR_HEIGHT * times[i]) / maxTime, player, Math.round(times[i]));
    });
  };

})();
