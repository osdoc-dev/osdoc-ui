import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

export default ({ children, lang }) => {
  const containerId = `${parseInt(Math.random() * 1e9, 10).toString(36)}`;
  const document = children.match(/([^]*)\n?(```[^]+```)/);
  const containerElem = useRef();
  const source = document[2].match(/```(.*)\n?([^]+)```/);
  const renderSource = value => {
    import('../../../../components')
      .then(Element => {
        const args = ['React', 'ReactDOM', 'osdocui'];
        const argv = [React, ReactDOM, Element];
        return {
          args,
          argv,
        };
      })
      .then(({ args, argv }) => {
        const locale =
          lang === 'enUS'
            ? require('osdocui/locale-provider/locale/en_US')
            : require('osdocui/locale-provider/locale/zh_CN');
        value = value
          .replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'react';/, 'const { $1 } = React;')
          .replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'osdocui';/, 'const { $1 } = osdocui;')
          .replace(
            /ReactDOM.render\(\s?([^]+?)(,\s?mountNode\s?\))/g,
            `
          ReactDOM.render(
            <osdocui.LocaleProvider locale={${JSON.stringify(locale.default)}}>
              $1
            </osdocui.LocaleProvider>,
            document.getElementById('${containerId}'),
          )
        `,
          );

        const { code } = transform(value, {
          presets: ['es2015', 'react'],
          plugins: ['proposal-class-properties'],
        });

        args.push(code);
        // eslint-disable-next-line no-new-func
        new Function(...args)(...argv);
        source[2] = value;
      })
      .catch(err => {
        if (process.env.NODE_ENV !== 'production') {
          throw err;
        }
      });
  };

  useEffect(() => {
    const container = containerElem.current;
    renderSource(source[2]);
    return () => {
      if (container) ReactDOM.unmountComponentAtNode(container);
    };
  });

  return <div id={containerId} ref={containerElem} />;
};
