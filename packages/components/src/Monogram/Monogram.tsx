import { Group, Text } from "@mantine/core";

import { MonogramLogo } from "./MonogramLogo";

// import classes from "./Monogram.module.css";

export interface MonogramProps {
  /** Props to pass to SVG element. Namely width and height */
  svgProps?: React.SVGProps<SVGSVGElement>;

  /** Hide the name */
  hideName?: boolean;

  /** Hide the logo */
  hideLogo?: boolean;
}

export function Monogram({
  svgProps,
  hideName = false,
  hideLogo = false,
}: MonogramProps): JSX.Element {
  return (
    <Group>
      {!hideLogo && <MonogramLogo {...svgProps} />}
      {/* TODO: This should use an imported/embedded font, not relying on end consumer */}
      {!hideName && (
        <Text style={{ fontFamily: "monofonto" }}>Samuel Lewis</Text>
      )}
    </Group>
  );
}
