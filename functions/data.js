const socialProfiles = [
    {
        name: 'LinkedIn',
        font_awesome_icon: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com/in/vnoitkumar/'
    },
    {
        name: 'Github',
        font_awesome_icon: 'fab fa-github',
        link: 'https://github.com/vnoitkumar/'
    },
    {
        name: 'Facebook',
        font_awesome_icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/VnoitKumar/'
    }
];

const workExperiences = [
    {
        from: {
            day: '',
            month: 'July',
            year: '2018',
        },
        to: {
            day: '',
            month: '',
            year: '',
        },
        company: 'FinMomenta Pvt. Ltd.',
        designation: 'Senior Software Engineer',
        location: 'Chennai, India',
        currently_working_here: 1
    },
    {
        from: {
            day: '',
            month: 'October',
            year: '2016',
        },
        to: {
            day: '',
            month: 'June',
            year: '2018',
        },
        company: 'SP Robotic Works Pvt. Ltd.',
        designation: 'Senior Software Engineer',
        location: 'Chennai, India',
        currently_working_here: 0
    },
    {
        from: {
            day: '',
            month: 'April',
            year: '2016',
        },
        to: {
            day: '',
            month: 'September',
            year: '2016',
        },
        company: 'SP Robotic Works Pvt. Ltd.',
        designation: 'Web Developer',
        location: 'Chennai, India',
        currently_working_here: 0
    },
    {
        from: {
            day: '',
            month: 'February',
            year: '2016',
        },
        to: {
            day: '',
            month: 'March',
            year: '2016',
        },
        company: 'SP Robotic Works Pvt. Ltd.',
        designation: 'Intern',
        location: 'Chennai, India',
        currently_working_here: 0
    },
];

const educationalQualifications = [
    {
        from: {
            day: '',
            month: '',
            year: '2012',
        },
        to: {
            day: '',
            month: '',
            year: '2016',
        },
        institution: 'AARUPADAI VEEDU INSTITUTE OF TECHNOLOGY',
        course: 'Bachelor of Computer Science and Engineering',
        location: 'Chennai, India',
        currently_studying_here: 0
    },
    {
        from: {
            day: '',
            month: '',
            year: '',
        },
        to: {
            day: '',
            month: '',
            year: '2012',
        },
        institution: 'ST. PIUS X MATRIC. HR. SEC. SCHOOL',
        course: 'Higher Secondary Certificate ( HSC )',
        location: 'Chennai, India',
        currently_studying_here: 0
    },
    {
        from: {
            day: '',
            month: '',
            year: '',
        },
        to: {
            day: '',
            month: '',
            year: '2010',
        },
        institution: 'ST. FRANCIS DE SALES MATRIC. HR. SEC. SCHOOL',
        course: 'Secondary School Leaving Certificate ( SSLC )',
        location: 'Alangayam, Vellore, India',
        currently_studying_here: 0
    },
];

const jsonData = {
    name: 'Vinoth Kumar',
    title: 'Vinoth Kumar | Senior Software Engineer',
    description: 'Proficient in PHP, Laravel, AWS, GCP, Docker and have experience working in Node Js and Angular.',
    job_profile: 'Senior Software Engineer',
    mobile: '+917708521528',
    mobile_label: '+91-77085 21528',
    email: 'vnoitkumar@gmail.com',
    current_location: 'Chennai, India',
    url: 'https://vnoit.com',
    hashtag: '#vnoitkumar',
    resume_download_link: 'https://docs.google.com/document/d/1rpThwC9VaUAKjSQbxeWsBAEhgAZXv1y533Pzn4QA6Jo/export?format=pdf',
    avatar_image: '/images/vnoitkumar-avatar.png',
    styles: {
        theme_color: '#2d2e2e',
    },
    social_share: {
        fb: {
            image: 'https://vnoit.com/images/social/facebook-link-post.jpg',
            app_id: '1166396203529747',
            api_version: 'v3.2',
            image_width: '1200',
            image_height: '628',
            image_type: 'image/jpg'
        },
        twitter: {
            site: '@vnoitkumar',
            creator: '@vnoitkumar',
            image: 'https://vnoit.com/images/social/twitter.jpg',
        }
    },
    social_profiles: socialProfiles,
    work_experiences: workExperiences,
    educational_qualifications: educationalQualifications
};

exports.jsonData = function () {
    return jsonData;
}
