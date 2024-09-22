type Props = {
    params: { id: number }
}

export async function generateMetadata(
    {params}: Props,
): Promise<{ title: string }> {
    const id = params.id

    return {
        title: `${id}`,
    }
}
