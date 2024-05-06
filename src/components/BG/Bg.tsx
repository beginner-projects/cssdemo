'use client'

import styles from './Bg.module.css'
import Pool from "../Pool/Pool"
import Wallet from '../Wallet/Wallet'
import FlashLogo from '../Logo/FlashLogo'
import Timer from '../Timer/Timer'

export default function Bg() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.maincntnr}>
                    <Wallet />
                    <FlashLogo />
                </div>
                <div className={styles.poolData}>
                    <Pool />
                    <Timer />
                </div>
            </div>
        </>
    )
}
