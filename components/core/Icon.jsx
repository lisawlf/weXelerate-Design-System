import React from 'react';

// SUBSTITUTION: the brand's canonical set is Streamline Ultimate (Light), which is
// licensed and not present in the provided sources. Lucide (1.1px-equivalent thin
// stroke, round caps) stands in from CDN. Monochrome, currentColor, never lime.
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.441.0/icons/';

export function Icon({ name, size = 20, stroke = 1.1, style, ...rest }) {
  const url = `url("${CDN}${name}.svg")`;
  return (
    <span
      role="img" aria-label={name}
      style={{ display: 'inline-block', width: size, height: size, flex: 'none',
        background: 'currentColor',
        WebkitMask: `${url} center/contain no-repeat`, mask: `${url} center/contain no-repeat`,
        opacity: stroke < 1.5 ? 0.92 : 1, ...style }}
      {...rest}
    />
  );
}
