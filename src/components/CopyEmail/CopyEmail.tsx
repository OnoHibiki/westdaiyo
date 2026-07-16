"use client";

import { useState } from "react";
import styles from "./CopyEmail.module.css";

export default function CopyEmail() {
    const [showToast, setShowToast] = useState(false);

    const handleCopy = async () => {
        const email = ["onohibiki0427", "gmail.com"].join("@");

        try {
            await navigator.clipboard.writeText(email);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            },1000);
        } catch (error) {
            console.error("メールアドレスをコピーできませんでした",error);
        }
    };

    return(
        <>
            <button
                type="button"
                className={styles.copyButton}
                onClick={handleCopy}
            >
                Email
            </button>
            {showToast && (
                <div className={styles.toast} role="status">
                    メールアドレスをコピーしました！よろしくどうぞ！
                </div>
            )}
        </>
    );
}