import * as React from "react";

export const ChevronRightIcon = ({
    height = "24px",
    width = "24px",
    color = "black",
    secondaryColor,
    ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        fill={secondaryColor || color}
        {...props}>
        <g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g>
    </svg>
)