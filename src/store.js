import { reactive } from 'vue';

export const store=reactive({
    header:[
        
            { name: 'Home', link: 'home' },
            { name: 'Services', link: '' },
            { name: 'Why Us', link: '' },
            { name: 'Case Studies', link: '' },
            { name: 'About', link: 'about' },
            { name: 'Blog', link: '' },
        
    ],
    footer:[
        {

        }
    ],
    componentRepeatHome:[
        {
            id:0,
            images:['../assets/img/download.png','../assets/img/download1.png','../assets/img/download3.png','../assets/img/download2.png'],
            logoText:{id:0, logo:'', text:'Business Growth'},
            title:'Increase Brand Awareness',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        },
        {
            id:1,
            images:['../assets/img/download4.png','../assets/img/download5.png','../assets/img/download6.png','../assets/img/download7.png'],
            logoText:{id:1, logo:'', text:'Investors in People'},
            title:'In-House Sales Training',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        },
        {
            id:2,
            images:['../assets/img/download8.png','../assets/img/download9.png','../assets/img/download10.png','../assets/img/download11.png','../assets/img/download12.png'],
            logoText:{id:2, logo:'',text:'Social Media Analysis'},
            title:'Harness Your Social Proof',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        }
    ]
})