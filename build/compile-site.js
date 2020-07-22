/*
 * 编译
 * @Author: ahwgs
 * @Date: 2020-06-29 23:46:26
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-22 21:49:06
 */

const chalk = require('chalk');
const getSiteDevConfig = require('../config/webpack.site.dev');
const { getPort } = require('portfinder');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const address = require('address');
const { PRIMARY_COLOR } = require('./constant');
const get = require('lodash').get;
const ora = require('ora');
const { formatTime } = require('./util');
const formatWebpackMessage = require('./format-webpack-message');
const open = require('./open');
const getSitePrdConfig = require('../config/webpack.site.pro');
const serveSpinner = ora('Starting build...').start();

// 日志
function logServerInfo(port) {
  const local = `http://localhost:${port}/`;
  const network = `http://${address.ip()}:${port}/`;

  console.log('\n  Site running at:\n');
  console.log(`  ${chalk.bold('Local')}:    ${chalk.hex(PRIMARY_COLOR)(local)} `);
  console.log(`  ${chalk.bold('Network')}:  ${chalk.hex(PRIMARY_COLOR)(network)}`);
}

function runDevServer(port, config) {
  try {
    const local = `http://localhost:${port}/`;
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);
    const host = get(config.devServer, 'host', 'localhost');
    server.listen(port, host, (err) => {
      if (err) {
        console.log(err);
      }
    });
    let isFirstCompile = true;
    compiler.hooks.invalid.tap('InvalidHook', (filepath) => {
      console.log(chalk.grey(`[${formatTime()}]Modified: ${filepath}`));
      serveSpinner.text = 'Compiling...🤡~';
      serveSpinner.render();
    });

    compiler.hooks.done.tap('DoneHook', (stats) => {
      const { errors, warnings } = formatWebpackMessage(stats.toJson({}, true));
      const isSuccess = !errors.length;

      if (errors.length) {
        errors.splice(1);
        serveSpinner.fail(chalk.red('Compile failed!\n'));
        console.log(chalk.red(errors.join('\n\n')));
        console.log();
        return;
      }

      if (warnings.length && isFirstCompile) {
        serveSpinner.warn(chalk.yellow(`Compile Warnning \n`));
        console.log(chalk.yellow(`${warnings.join('\n\n')}\n`));
      }

      if (isSuccess) {
        serveSpinner.succeed(chalk.green('Compile successfully!\n'));
      }

      if (isFirstCompile) {
        logServerInfo(port);
        console.log();
        open(local);
        isFirstCompile = false;
      }
    });
  } catch (err) {
    console.warn(err);
    process.exit(0);
  }
}

// 正式打包
function buildTask() {
  try {
    return new Promise((resolve, reject) => {
      const config = getSitePrdConfig();
      webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
          reject();
        } else {
          resolve();
        }
      });
    });
  } catch (err) {
    console.warn(err);
    process.exit(0);
  }
}

// 开发服务
function devServerTask() {
  const config = getSiteDevConfig();
  getPort(
    {
      port: config.devServer.port,
    },
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }
      runDevServer(port, config);
    },
  );
}

function compileSite(isPro = false) {
  console.log(chalk.cyan('compileSite...', isPro));
  if (isPro) {
    buildTask();
  } else {
    devServerTask();
  }
}

module.exports = compileSite;
