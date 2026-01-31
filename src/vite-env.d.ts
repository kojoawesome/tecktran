/// <reference types="vite/client" />

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const Logo: FC<SVGProps<SVGSVGElement>>;
  export default Logo;
}