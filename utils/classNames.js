export function classNames(...arg) {
  if (arg.length === 0) return '';
  return arg
    .reduce((acc, item) => {
      if (typeof item === 'string') return acc.concat(item);

      if (typeof item === 'object' && item !== null) {
        const fromObject = Object.entries(item)
          .reduce((a, e) => {
            if (typeof e[1] === 'boolean' && e[1] === true) return a.concat(e[0]);
            return a;
          }, [])
          .join(' ');

        return acc.concat(fromObject);
      }

      return acc;
    }, [])
    .join(' ');
}
