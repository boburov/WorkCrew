const express = require("express");
const { Logger } = require("logger");
const { Telegraf } = require("telegraf");
const bot = new Telegraf("8114707533:AAHJeaeX9YyM9t3TgPGpT13oOr9d0mPbt2M")
const log = new Logger()
bot.start((ctx) => {
    ctx.reply("salom")
})

bot.launch(async () => {
    await log.debug('this wont be logged');
    console.log('salom');
})