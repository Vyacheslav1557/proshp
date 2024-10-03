import styles from "./card.module.css"
import {clsx} from "clsx";

type Props = {
    id: string
    title: string
    description: string
    open: boolean
}

const Card = (props: Props) => {
    return (
        <div className={styles.card__wrapper}>
            <a className={styles.card__link} href={`/olymp/${props.id}`}>
                <div className={clsx({
                    [styles.card__shadow]: props.open,
                    [styles.card__shadow_past]: !props.open
                })}/>
                <div className={styles.card}>
                    <p className={styles.card__title}>{props.title}</p>
                    <p className={styles.card__description}>{props.description}</p>
                </div>
            </a>
        </div>
    )
}

Card.defaultProps = {
    open: false
}

export {Card};