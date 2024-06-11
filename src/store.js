import { reactive } from 'vue';

export const store=reactive({
    header:[
        {

        }
    ],
    footer:[
        {

        }
    ],
    componentRepeatHome:[
        {
            id:0,
            images:[],
            logoText:{id:0, logo:'', text:'Business Growth'},
            title:'Increase Brand Awareness',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        },
        {
            id:1,
            images:[],
            logoText:{id:1, logo:'', text:'Investors in People'},
            title:'In-House Sales Training',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        },
        {
            id:2,
            images:[],
            logoText:{id:2, logo:'',text:'Social Media Analysis'},
            title:'Harness Your Social Proof',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
            button:'Get A Consultation',
        }
    ]
})