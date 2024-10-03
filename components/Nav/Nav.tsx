type Props = {
    children: any
    className?: string | undefined
}

const Nav = (props: Props) => {
    return (
        <ul style={{padding: "4px"}} className={props.className}>
            {props.children.length > 1 ? props.children.map(
                (item: any) =>
                    <li>
                        {item}
                    </li>
            )
            : props.children
            }
        </ul>
    )
}

export {Nav};