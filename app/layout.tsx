import '@mantine/core/styles.css';
import "./style.css";

import React from 'react';
import {ColorSchemeScript, createTheme, DEFAULT_THEME, MantineProvider} from "@mantine/core";
import {NeuropolMedium} from "@/fonts/NeuropolMedium/NeuropolMedium";

const theme = createTheme({
    fontFamily: NeuropolMedium.style.fontFamily,
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: {
        fontFamily: `${NeuropolMedium.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    },
    autoContrast: true
});

export const RootLayout: React.FC<{ children: React.ReactNode | React.ReactNode[] | null | undefined }> = ({children}) => {
    return (
        <html lang="ru">
        <head>
            <ColorSchemeScript />
            <link rel="shortcut icon" href="/favicon.svg"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
        </html>
    );
};
