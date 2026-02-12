import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true, // GitHub Pages는 이미지 최적화 서버 없음
    },
    basePath: "/next16-study",
    assetPrefix: "/next16-study/",
};

// module.exports = {
//     async redirects() {
//         return [
//             {
//                 source: '/', // 접근하는 경로
//                 destination: '/next16-study', // 이동할 기본 주소
//                 permanent: true, // 301 (영구) 또는 302 (일시적) 리다이렉트 설정
//             },
//         ];
//     },
// };

export default nextConfig; 