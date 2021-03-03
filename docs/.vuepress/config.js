module.exports = {
    title: 'Studio Elsewhere',
    description: 'Documentation for hospital recharge rooms',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/' },
            {text: 'Overview', link: '/overview/' },
            {text: 'Info', link: 'https://www.studioelsewhere.co/recharge-rooms' },
        ],
        sidebar : {
            '/overview/' : [
                '',
                'scripting',
                'router',
                'analytics',
                '/about'
            ],

            '/scripting' : [
                

            ], 

            '/about' : [
                '/overview/'
            ],
        }
    }

}