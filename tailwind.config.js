/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,html,scss}', './projects/**/*.{ts,html,scss}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: 'rgb(245, 238, 255)',
                    2: 'rgb(214, 186, 255)',
                    3: 'rgb(171, 115, 255)',
                    4: 'rgb(118, 42, 231)',
                    5: 'rgb(62, 22, 122)'
                },
                default: {
                    1: 'rgb(241, 241, 241)',
                    2: 'rgb(198, 198, 198)',
                    3: 'rgb(145, 145, 145)',
                    4: 'rgb(94, 94, 94)',
                    5: 'rgb(15, 15, 15)'
                },
                dark: {
                    1: 'rgb(241, 241, 241)',
                    2: 'rgb(198, 198, 198)',
                    3: 'rgb(145, 145, 145)',
                    4: 'rgb(25, 30, 30)',
                    5: 'rgb(20, 20, 20)'
                },
                info: {
                    1: 'rgb(231, 242, 254)',
                    2: 'rgb(159, 202, 251)',
                    3: 'rgb(57, 146, 248)',
                    4: 'rgb(13, 92, 183)',
                    5: 'rgb(7, 48, 95)'
                },
                warning: {
                    1: 'rgb(255, 238, 224)',
                    2: 'rgb(253, 184, 125)',
                    3: 'rgb(232, 109, 4)',
                    4: 'rgb(215, 99, 0)',
                    5: 'rgb(79, 37, 1)'
                },
                error: {
                    1: 'rgb(255, 236, 240)',
                    2: 'rgb(254, 178, 191)',
                    3: 'rgb(254, 81, 112)',
                    4: 'rgb(191, 0, 34)',
                    5: 'rgb(104, 0, 18)'
                },
                success: {
                    1: 'rgb(194, 255, 210)',
                    2: 'rgb(0, 245, 64)',
                    3: 'rgb(0, 168, 44)',
                    4: 'rgb(0, 110, 29)',
                    5: 'rgb(0, 57, 15)'
                }
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite'
            },
            screens: {
                small: { max: '700px' }
            }
        }
    },
    plugins: []
};
