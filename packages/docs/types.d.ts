// types.d.ts
declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui';

  const presets: Record<'base', Theme>;

  export = presets;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}
