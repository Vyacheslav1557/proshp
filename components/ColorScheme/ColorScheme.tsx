"use client";
import {useMantineColorScheme} from "@mantine/core";
import {useEffect} from "react";

type Props = {
    scheme: 'light' | 'dark'
}

const ColorScheme = (props: Props) => {
    const {setColorScheme} = useMantineColorScheme();

    useEffect(() => {
        setColorScheme(props.scheme)
    }, []);

    return <></>;
}

export {ColorScheme};