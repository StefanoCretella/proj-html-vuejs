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
            images:['../assets/img/repeatComponent/download.png','../assets/img/repeatComponent/download1.png','../assets/img/repeatComponent/download3.png','../assets/img/repeatComponent/download2.png'],
            logoText:{id:0, logo:'', text:'Business Growth'},
            title:'Increase Brand Awareness',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        },
        {
            id:1,
            images:['../assets/img/repeatComponent/download4.png','../assets/img/repeatComponent/download5.png','../assets/img/repeatComponent/download6.png','../assets/img/repeatComponent/download7.png'],
            logoText:{id:1, logo:'', text:'Investors in People'},
            title:'In-House Sales Training',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        },
        {
            id:2,
            images:['../assets/img/repeatComponent/download8.png','../assets/img/repeatComponent/download9.png','../assets/img/repeatComponent/download10.png','../assets/img/repeatComponent/download11.png','../assets/img/repeatComponent/download12.png'],
            logoText:{id:2, logo:'',text:'Social Media Analysis'},
            title:'Harness Your Social Proof',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        }
    ],
    brandsWorkWith:['https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/abstract.png','https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/cglobal.png','https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/next.png','https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/hemisferio.png','https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/spaces.png','https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/digitalbox.png']
})