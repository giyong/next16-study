"use client"

import { useRouter } from "next/navigation";

export function goMain() {
    console.log("util.goMain ...");
    const router = useRouter();

    const handleLogo = () => {
        router.push("/");
    };
}

const util = {
    goMain: () => {
        console.log("util.goMain ...");
        const router = useRouter();

        const handleLogo = () => {
            router.push("/");
        };
    }
};

export default util;