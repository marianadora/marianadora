var dom = document.getElementById('container');

var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
      });
var app = {};
var option;
      /*
      var data_structure=[{
        name: "Nome do node",
        description: "Descrição do node",
        link: "Link de conteúdo relacionado ao node",
        //Publication
        title: 'Título da Publicação',
        author: 'Autores da Publicação',
        journal: 'Título da Revista',
        year: 'Ano de Publicação',
        publication_link: 'Link da Publicação',
        //Youtube Video embedded
        youtube: 'Video Link',
        //Podcast embedded
        podcast_link: 'Link Podcast',
        podcast_place: 'Universidade do Pesquisador do podcast',
        podcast_photo: 'Foto do pesquisador',
        podcast_orcid: 'Orcid do pesquisador'
      }];*/
myChart.showLoading();
  
var data = [
        {
          "name": "DIAL4U",
          "description": "Welcome to the DIAL4U project guide! This is an interactive methodological guide that will accompany the user in the multimodal teaching-learning of languages, as well as promote students' autonomous learning. If you want to know how to use this guide, click HERE (INSERT LINK).",
          "have_pub": "",
          "have_pod": "",
          "have_img": "",
          "have_video": "",
          "have_profile": "",
          symbolSize: 60,
      symbol: "image://data:image/png;base64,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",
      label:{
            show:false
          },
          "children": [
            {
              "name": "Skills and Strategies CEFR",
              "description": "The Common European Framework of Reference for Languages (CEFR) was designed to provide a transparent, coherent and comprehensive basis for the elaboration of language syllabuses and curriculum guidelines; as well as the design of teaching and learning materials, and the assessment of foreign language proficiency. It is a document well known to teachers, so we present this section of the guide following the structure of the CEFR.",
              "have_pub": "1",
              "have_pod": "",
              "have_img": "",
              "have_profile": "",
              "have_video": "",
              label:{
                show:false
              },
           
              "publication": [
                {
                  "link": "https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4",
                  "title": "Common European Framework of. Reference for Languages: Learning, Teaching, Assessment",
                  "year": "2020"
                },
                {
                  "link": "https://www.coe.int/en/web/common-european-framework-reference-languages",
                  "title": "Common European Framework of Reference for Languages Portal",
                  "year": ""
                }
              ],
              "children": [
                {
                  "name": "Strategies",
                  "description": "According to the CEFR, a strategy is any organised, intentional and regulated course of action chosen by any individual to accomplish a task which he or she sets for him or herself or which he or she has to cope with. To help your students in their autonomous language learning, it is necessary to take into account three types of strategies: cognitive, metacognitive and linguistic. Here we explain what they are and how to use/apply them.",
                  "have_pub": "",
                  "have_pod": "",
                  "have_img": "",
                  "have_video": "",
                  "have_profile": "",
                  
                  "children": [
                    {
                      "name": "Cognitive",
                      "description": "Cognitive strategies are those which the learner uses to deal with the various language activities in order to increase his or her knowledge of the language. Within this group of strategies we find: memorisation, categorisation, simplification, inference, analogy, hypothesis formulation, schematization, etc. The use of activities that promote the activation of these strategies will help your students to learn in a more meaningful way.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile": ""
                    },
                    {
                      "name": "Metacognitiva",
                      "description": "Metacognitive strategies help the learner to coordinate and monitor his or her own learning process. The main metacognitive learning strategies are: planning, organising or monitoring, evaluation and self-evaluation.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile": "",
                      "publication": [
                        {
                          "link": "",
                          "title": " Grabowska M., Zapłotna A. 2021 about metacognitive self-consciousness;",
                          "year": ""
                        },
                        {
                          "link": "https://journals.openedition.org/rdlc/11389",
                          "title": "La métacognition au service de l'intégration des apprentissages informels dans un dispositif d'autoformation guidée",
                          "year": "2022"
                        }
                      ]
                    },
                    {
                      "name": "Linguistics",
                      "description": "According to the CEFR, in order to carry out communicative tasks, users have to engage in language activities of a communicative nature and put communication strategies into operation. Many communicative activities, such as conversation and correspondence, are interactive, i.e. participants alternate as producers and receivers, often taking turns. In other cases, such as when speech is recorded or transmitted, or when texts are sent for publication, the senders are remote from the receivers, whom they may not even know and who cannot respond to them. In these cases the communicative act can be considered as the act of speaking, writing, listening or reading a text. In most cases, the user as speaker or author of a written text is producing his or her own text to express his or her own meanings. In others, he or she is acting as a channel of communication (often, but not necessarily, in different languages) between two or more people who for one reason or another cannot communicate directly. This process, called mediation, can be interactive or non-interactive. In the next level you will find more detailed information on the language strategies of comprehension, expression, interaction and mediation.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile": "",
                      
                      "children": [
                        {
                          "name": "Understanding",
                          "description": "VALE. LLEGADA A ESTE PUNTO, ME ENCUENTRO REPRODUCIENDO LO QUE DICE EL MCER Y ME PREGUNTO SI VALE LA PENA... TENGO LA IMPRESIÓN DE QUE SI TRASLADAMOS LO DEL MCER NOS QUEDAMOS CORTAS, PERO A LA VEZ ME PARECE EXCESIVA INFORMACIÓN Y QUE PUEDEN ENCONTRAR EN EL MARCO DIRECTAMENTE. ¿Y SI REMITIMOS AL MARCO DIRECTAMENTE? PUEDE PARECER QUE ECHAMOS BALONES FUERA... PERO ES ABSURDO LO OTRO...",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                         
                          "children": [
                            {
                              "name": "Written",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""  
                            },
                            {
                              "name": "Oral",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": "" 
                            }
                          ]
                        },
                        {
                          "name": "Expression",
                          "description": "",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "children": [
                            {
                              "name": "Written",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""
                            },
                            {
                              "name": "Oral",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""
                            }
                          ]
                        },
                        {
                          "name": "Interaction",
                          "description": "",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "children": [
                            {
                              "name": "Written",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""
                            },
                            {
                              "name": "Oral",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""
                            }
                          ]
                         
                        },
                        {
                          "name": "Mediation",
                          "description": "",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "children": [
                            {
                              "name": "Written",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""
                            },
                            {
                              "name": "Oral",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": ""
                            }
                          ] 
                        }
                      ]
                    }
                    
                  ]
                },
                {
                  "name": "Skills",
                  "description": "In this section you will find lots of resources, activities, digital tools, among other elements, that will help your students to deepen their knowledge of the language they are learning in order to be able to communicate effectively. Also, in this interactive guide, we present the following skills in a structured and organised way: <br> (1) understanding, <br> (2) expression, <br> (3) interaction, <br>and (4) mediation.",
                  "have_pub": "",
                  "have_pod": "",
                  "have_img": "",
                  "have_video": "",
                  "have_profile": "",
                  "children": [
                    {
                      "name": "Understanding",
        
                      "description": "This skill will help your students how to process written texts and oral materials.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile": "",
                      "children": [
                        {
                          "name": "Oral",
                          "description": "Understanding spoken language (i.e., listening comprehension) is paramount to develop and enhance your students' communicative oral skills. Furthermore, it is a fundamental component to develop other language abilities, such as writing, reading, among others. This section will, therefore, provide students with a wide range of listening activities from different proficiency levels.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "publication": [
                            {
                              "link": "https://lingua.com/english/listening/",
                              "title": "English Listening Comprehension",
                              "year": ""
                            }
                          ]
                        },
                        {
                          "name": "Written",
                          "description": "Here, your students will practise their comprehension skills (i.e., written understanding) with a variety of online resources and/or activities. Also, they will find a variety of levels, from the most basic to the most advanced (according to the CEFR). CLICK HERE?¿?",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "publication": [
                            {
                              "link": "https://learnenglish.britishcouncil.org/",
                              "title": "Learn English",
                              "year": ""
                            },
                            {
                              "link": "https://englishforeveryone.org/Topics/Reading-Comprehension",
                              "title": "Your Resource for English Worksheets",
                              "year": ""
                            },
                            {
                              "link": "https://learnenglish.britishcouncil.org/es/skills/reading/b2-reading",
                              "title": "B2 reading",
                              "year": ""
                            }
                          ]
                        
                        }
                      ]
                    },
                    {
                      "name": "Expression",
                      "description": "This skill will help your students to communicate clearly and effectively, both orally (i.e., oral production and interaction) and in written form (i.e., communicating ideas through writing).",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "children": [
                        {
                          "name": "Oral",
                          "description": "This website contains plenty of resources for your students to practise this skill (i.e., oral expression). The proficiency is at intermediate level (CEFR), specifically B1 and B2. The topics offered are fairly common and among those proposed in the different links on this same page (Cambridge English) are the following: 'Spoken or Written?', 'Describing what you see', 'Making decisions', and 'What did you think of the movie?'",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "publication": [
                            {
                              "link": "https://www.cambridgeenglish.org/",
                              "title": "Cambridge Emglish",
                              "year": ""
                            },
                            {
                              "link": "https://www.cambridgeenglish.org/learning-english/activities-for-learners/b2w063-spoken-or-written",
                              "title": "Spoken or written?",
                              "year": "CEFR LEVEL B1-B2"
                            },
                            {
                              "link": "https://www.cambridgeenglish.org/learning-english/activities-for-learners/b1s052-describing-what-you-see",
                              "title": "Describing what you see",
                              "year": "CEFR LEVEL B1-B2"
                            },
                            {
                              "link": "https://www.cambridgeenglish.org/learning-english/activities-for-learners/b1s054-making-decisions",
                              "title": "Making decisions",
                              "year": "CEFR LEVEL B1-B2"
                            },
                            {
                              "link": "https://www.cambridgeenglish.org/learning-english/activities-for-learners/b2s051-what-did-you-think-of-the-movie",
                              "title": "What did you think of the movie?",
                              "year": "CEFR LEVEL B1-B2"
                            }
                          ]
                        },
        
                        {
                          "name": "Written",
                          "description": "'Purdue Online Lab' offers a wealth of resources for practising writing skills. From general writing resources (such as general writing, the different steps to follow and take into account in the writing process, among others), to more complex resources, such as writing in more specialised and academic English. It also provides a wide range of resources that introduce students to the world of research, with all that this entails (for example, questions of format, style, among other elements). Apart from all the above, it also allows to know how to use the language in an appropriate and adequate way for the writing context by using the grammar sections included.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://owl.purdue.edu/",
                              "title": "Purde OWL Portal",
                              "year": ""
                            },
                            {
                              "link": "https://owl.purdue.edu/site_map.html",
                              "title": "Purde Owl Site Map",
                              "year": ""
                            },
                            {
                              "link": "https://eds.p.ebscohost.com/abstract?site=eds&scope=site&jrnl=01372475&AN=151463529&h=1FEafFhZHhHuondxN0I0JQMBEKAMu0adkDHBuYlNqGYPNk5I6i6Dp928Vt64j%2f0chtfMmLT89vmpxNZThh9ZAQ%3d%3d&crl=c&resultLocal=ErrCrlNoResults&resultNs=Ehost&crlhashurl=login.aspx%3fdirect%3dtrue%26profile%3dehost%26scope%3dsite%26authtype%3dcrawler%26jrnl%3d01372475%26AN%3d151463529",
                              "title": "Aspectos pragmáticos y estratégicos del desarrollo de la destreza de expresión escrita en Filología Española en la tercera década del siglo XXI.",
                              "year": "2021"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Interaction",
                      "description": "This skill involves the articulation of thoughts and the ability to express ideas effectively using written and oral communication skills.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "children": [
                        {
                          "name": "Oral",
                          "description": "TThis website includes oral interaction activities of different kinds and to suit different levels of proficiency. Teaching through play is perhaps one of the greatest challenges any teacher has to face throughout his/her professional career. However, at the same time, students or users that employ this type of resource may find a motivation and engagement that allows them develop their communicative skills more easily.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://eslflow.com/speaking-and-communicative-icebreaker-activities.html",
                              "title": "ESL Speaking Activities and Exercises",
                              "year": ""
                            },
                            {"title": "Mobile Instant Messaging: Whatsapp and its Potential to Develop Oral Skills",
                            "link": "https://www.scipedia.com/public/Andujar-Vaca_Cruz-Martinez_2017a",
                          "year": "2017" }
                          ]
                        },
                        {
                          "name": "Written",
                          "description": "Ludwig is the first sentence search engine that helps you write better English by giving you contextualized examples taken from reliable sources. With these tools, students can improve their English writing skills.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                           
                            {
                              "title": "'Ludwig' is the first sentence search engine that gives contextualized examples taken from reliable sources.",
                              "link": "https://ludwig.guru/s/written+interaction",
                              "year": ""
                            },
                            {
                              "title": "Autocorrige tus textos en inglés",
                              "link": "https://blogs.uned.es/herramientasautocorreccionescrituraingles/",
                              "year": ""
                            },
                            {
                              "title": "Autocrit",
                              "link": "https://blogs.uned.es/herramientasautocorreccionescrituraingles/autocrit/#",
                              "year": ""
                            }
                          ]
                        
                        }
                      ]
                    },
                    {
                      "name": "Mediation",
                      "description": "Mediation involves the participation of a third person (i.e., teacher) to assist and/or help students in their efforts to conduct a specific task, problem in the classroom.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "children": [
                        {
                          "name": "Oral",
                          "description": "These activities can be used in the classroom to practise and improve oral and written mediation.",
        
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://inglesenaviles.blogspot.com",
                              "title": "Inglés en Avilés",
                              "year": ""
                            }
                          ]
                        },
                        {
                          "name": "Written",
                          "description": "These activities can be used in the classroom to practise and improve oral and written mediation.",
        
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
                          "publication": [
                            {
                              "link": "https://inglesenaviles.blogspot.com",
                              "title": "Inglés en Avilés",
                              "year": ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }]}];

var skills = [
              {
                "name": "DIAL4U",
                "description": "Welcome to the DIAL4U project guide! This is an interactive methodological guide that will accompany the user in the multimodal teaching-learning of languages, as well as promote students' autonomous learning. If you want to know how to use this guide, click HERE (INSERT LINK).",
                "have_pub": "",
                "have_pod": "",
                "have_img": "",
                "have_video": "",
                "have_profile": "",
                symbolSize: 60,
            symbol: "image://data:image/png;base64,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",
            label:{
                  show:false
                },
                "children": [

            {
              "name": "Formal and Informal Teaching",
              "description": "If you are not sure about the difference between Formal and Informal teaching/learning, take a look at this brief definition: Formal learning is learning that is delivered 'in a systematic intentional way'. It’s planned and guided by an instructor and it usually occurs in a face-to-face setting or through an online learning platform. These are training types that need structure, have deadlines, and there’s a definitive goal. Informal learning is on the other end of the spectrum. It’s unstructured, often unintended, and it occurs outside of a conventional learning setting. Importantly, it’s self-directed and asynchronous.",
              "have_pub": "",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":"",
              label:{
                show:false
              },
              
            
                  "children": [
                    {
                      "name": "Blended Learning",
                      "description": "",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":""
                    },
                    {
                      "name": "E-learning",
                      "description": "This section will give you a general view of what online teaching is, how to use it, which strategies may help you in online classes and how to assess it.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile": "",
                      
                      "children": [
                        {
                          "name": "Definition",
                          "description": "Online teaching is a student-centric methodology that increases students’ interest and participation levels in virtual classrooms. The teaching skills play a great role in successful interaction with the students. Teachers have to polish their communication skills in order to ensure that student engagement is on point. You should create a positive learning environment and incorporate various classroom activities and games to make sure that the students are attentive. It is a misconception that it is difficult to tackle student focus in online classrooms. Online teachers use digital resources to share with their students and are accessible to so many people. It provides a lot of freedom to individuals to learn, teach, and develop skills at their own pace.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "publication": [
                            {
                              "link": "https://www.teachmint.com/glossary/o/online-teaching/",
                              "title": "Online Teaching - Teachmint",
                              "year": "2021"
                            }
                          ]
                        },
                        {
                          "name": "Strategies",
                          "description": "Online teaching will be much more fruitful and rewarding if you have some strategies to deal with it. In this article you will find a wide variety of them to make the most of your online teaching.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile": "",
        
                          "publication": [
                            {
                              "link": "https://www.albert.io/blog/strategies-for-teaching-online/",
                              "title": "Strategies for Teaching Online: The Ultimate Guide for Educators",
                              "year": "2022"
                            },
                            {
                              "link": " https://www.cambridgeenglish.org/blog/12-tips-for-teaching-an-online-english-class/",
                              "title": "12 tips for teaching an unforgettable online English class",
                              "year": "2020"
                            },
                            {
                              "link": "https://www.pearson.com/ped-blogs/blogs/2020/03/9-strategies-for-effective-online-teaching.html",
                              "title": "9 strategies for effective online teaching",
                              "year": "2020"
                            }
                          ]
                        },
                        {
                          "name": "Assesment",
                          "description": "Have you thought about your online teaching assessment? How are you going to evaluate your students evolution and improvement? Here we will provide you with some ideas to do so.",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
        
                          "children": [
                            {
                              "name": "What to bear in mind?",
                              "description": "If assignments are complex and multi-part, it is more effective to break these down into smaller components such that the instructor can assess students at several points in the learning process and provide feedback. \n Provide students with explicit and detailed rubrics to accurately communicate expectations for student performance. \n If course material is highly technical, consider using ungraded, self-check quizzes as a formative assessment to check student learning and determine whether teaching strategies should be altered. \n Use synchronous technologies when appropriate (i.e. Blackboard Collaborate) to communicate with students in real time. As online students have very different schedules, it is suggested that synchronous meetings be recorded such that students that cannot attend live can watch at a later time. \n Self and peer assessments can be used to reduce instructor workload, improve student learning experiences and build community. \n Look for opportunities to provide feedback to the entire class – i.e. an announcement or e-mail summarizing patterns observed in student assignments. \n Q & A discussion boards can also be useful to field common student questions. Using a variety of assessment techniques in an online course is recommended.",
                              "have_pub": "1",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile": "",
        
                              "publication": [
                                {
                                  "link": "https://www.teachology.ca/knowledgebase/how-do-i-assess-student-learning-online",
                                  "title": "How do I assess student learning online?",
                                  "year": "2019"
                                }
                              ]
                          
                            },
        
                            {
                              "name": "Assesment Tools",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "",
                              "have_profile":"",
                              "children": [
                                {
                                  "name": "Socrative",
                                  "description": "Socrative is one of the top-rated assessment tools for teachers according to hundreds of online reviews by educators and professional reviewers alike. It’s an interactive digital tool that lets you quiz, grade, and assess on-the-fly; “at the speed of learning.” Teachers can choose from quick questions for instant feedback, class counts to see who’s logged in, or full quizzes for deeper understanding. This versatile tool lets you create polls and activities and shuffle questions, with or without student names attached. Quizzes are graded in real time, and you can store them for re-use with other groups.",
                                  "have_pub": "1",
                                  "have_pod": "",
                                  "have_img": "",
                                  "have_video": "",
                                  "have_profile":"",
        
                                  "publication": [
                                    {
                                      "link": "https://www.socrative.com/",
                                      "title": "Meet Socrative",
                                      "year": ""
                                    }
                                  ]
                                },
                                {
                                  "name": "Google Forms",
                                  "description": "Ease of use. Google Forms is a go-to among teachers because it’s quick and simple to create and automatically grade quizzes even if it’s your first time using the tool. Create multiple-choice quizzes or short-answer quizzes, and make an easy answer key with point assignments for each question.",
                                  "have_pub": "1",
                                  "have_pod": "",
                                  "have_img": "",
                                  "have_video": "1",
                                  "have_profile":"",
        
                                  "publication": [
                                    {
                                      "link": "https://edu.google.com/for-educators/product-guides/forms/?modal_active=none",
                                      "title": "Google Forms Training | Teacher Center | Google for Education",
                                      "year": ""
                                    }
                                  ],
                                  "video": [
                                    {
                                      "link": "https://www.youtube.com/embed/9i1ToO6KwdI",
                                      "title": "Creating Learning Modules using Google Form",
                                      "description": "You can create surveys and RSVPs using Google Forms, but did to know you can also create learning path modules?"
                                    }
                                  ]
                               
                                },
                                {
                                  "name": "Mentimeter",
                                  "description": "It comes pre-loaded with education templates for the classroom like a listening skills assessment, icebreakers, formative assessments, post-lecture surveys, and polls. Create quizzes and tests, manage student expectations, engage students, and even run a teacher training workshop. Mentimeter gives everyone a voice, but it also has a neat feature to mute extra-loud students.",
        
                                  "have_pub": "1",
                                  "have_pod": "",
                                  "have_img": "",
                                  "have_video": "",
                                  "have_profile": "",
        
                                  "publication": [
                                    {
                                      "link": "https://www.mentimeter.com",
                                      "title": "Mentimeter - Engage your audience & eliminate awkward silences",
                                      "year": ""
                                    }
                                  ]
                                },
                                {
                                  "name": "Poll Everywhere",
                                  "description": "Give quizzes, take attendance, and gauge understanding your own way with Poll Everywhere. Get a snapshot of where students are struggling by creating questions as word clouds, open student responses, or with multiple-choice options. Then let students answer with their phones, laptops, or tablets. Teachers can get real-time feedback in their question slides without calling on specific individuals to roll out assessment as an integrated part of a larger lecture. This is a great way to give students a voice in steering the direction of live lesson plans.",
        
                                  "have_pub": "1",
                                  "have_pod": "",
                                  "have_img": "",
                                  "have_video": "",
                                  "have_profile": "",
                                  "publication": [
                                    {
                                      "link": "https://www.polleverywhere.com/",
                                      "title": "Poll Everywhere - Powering hybrid work and inclusive conversations.",
                                      "year": ""
                                    }
                                  ]
                             
                                },
                                {
                                  "name": "Kahoot",
                                  "description": "Teachers can choose from more than 40 million ready-to-go learning games or create their own in minutes. Host games live or as assignments. Students can even create their own “kahoots” to share with classmates, creating an interactive experience. Create a quiz game in minutes, import questions from spreadsheets, and search their 500-million item question bank.",
                                  "have_pub": "1",
                                  "have_pod": "",
                                  "have_img": "",
                                  "have_video": "",
                                  "have_profile":"",
                                  "publication": [
                                    {
                                      "link": "https://kahoot.com/schools-u/",
                                      "title": "Kahoot - Student-centered learning platform",
                                      "year": ""
                                    }
                                  ]
                               
                                }
                              ]
                            },
                            {
                              "name": "Resources",
                              "description": "This section will provide you with a wide range of resources on online teaching. They will help you to have a better approach and perspective and will make your online teaching more effective.",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "","have_profile":"",
                              "children":[
                                {"name": "Bibliography",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "","have_profile":""},
                              {"name": "Tools",
                              "description": "",
                              "have_pub": "",
                              "have_pod": "",
                              "have_img": "",
                              "have_video": "","have_profile":""}
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Hybrid",
                      "description": "This section will give you a general view of what hybrid teaching is, how to use it, which strategies may help you in online classes and how to assess it.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "children": [
                        {
                          "name": "Definition",
                          "description": "Hybrid learning is an educational model where some students attend class in-person, while others join the class virtually from home. Educators teach remote and in-person students at the same time using tools like video conferencing hardware and software. In some cases, hybrid classes include asynchronous learning elements, like online exercises and pre-recorded video instruction, to support face-to-face classroom sessions. When planned well, hybrid courses combine the best aspects of in-person and online learning while making education more attainable for many students. For hybrid learning to be successful, the elements of your hybrid course need to be tailored to the learning format, whether it be in-person or online.",
        
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://resources.owllabs.com/blog/hybrid-learning",
                              "title": "What Is Hybrid Learning? Here's Everything You Need to Know",
                              "year": "2020"
                            }
                          ]
                        },
                        {
                          "name": "Strategies",
                          "definition": "In your hybrid classes you can use different strategies to keep yours students engaged and make sure the sessions are effective. Here you can find some articles which will give you some ideas regarding: Giving instructions, Play and game-based learning, Prompting, Modeled teaching and so on.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://www.edutopia.org/article/hybrid-teaching-strategies-elementary-classrooms",
                              "title": "Hybrid Teaching Strategies for Elementary Classrooms",
                              "year": "2021"
                            },
                            {
                              "link": "https://ctl.columbia.edu/resources-and-technology/teaching-with-technology/teaching-online/five-tips-hybrid/",
                              "title": "Five Tips for Hybrid/HyFlex Teaching with All Learners in Mind",
                              "year": "2021"
                            },
                            {
                              "link": "https://www.viewsonic.com/library/education/hybrid-teaching-12-teaching-strategies-to-optimize-learning-spaces/",
                              "title": "Hybrid Teaching: 12 Teaching Strategies to Optimize Learning Spaces",
                              "year": "2020"
                            },
                            {
                              "link": "https://www.educationworld.com/teachers/hybrid-instruction-eight-tools-and-strategies-success",
                              "title": "Hybrid Instruction - Eight Tools and Strategies for Success",
                              "year": "2020"
                            }
                          ]
                        },
                        {
                          "name": "Assesment",
                          "description": "Assessment may be the nightmare of hybrid classes. As a teacher, you might want to consider different types of assessment: Self-Assessment, Peer assessment and Online assessment tools. The following three articles will give you more information about the pros and cons of each type and how to use them:",
                          "have_profile":"",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "publication": [
                            {
                              "link": "https://teaching.cornell.edu/teaching-resources/assessment-evaluation/self-assessment",
                              "title": "Self-Assessment",
                              "year": ""
                            },
                            {
                              "link": "https://teaching.cornell.edu/teaching-resources/assessment-evaluation/peer-assessment",
                              "title": "Peer assessment",
                              "year": ""
                            },
                            {
                              "link": "https://teaching.cornell.edu/resource/getting-started-designing-hybrid-learning-course",
                              "title": "Getting Started with Designing a Hybrid Learning Course",
                              "year": ""
                            }
                          ]
                        },
                        {
                          "name": "Resources",
                          "description": "This section will provide you with a wide range of resources on online teaching. They will help you to have a better approach and perspective and will make your online teaching more effective.",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "","have_profile":"",
                          "children":[
                            {"name": "Bibliography",
                          "description": "",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "","have_profile":""},
                          {"name": "Tools",
                          "description": "",
                          "have_pub": "",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "","have_profile":""}
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Digital Active Methodologies",
                      "description": "The nature of the digital space makes it possible to implement methodologies that are different from conventional ones based on multimodality and on the active role of the learner as the centre of and responsible for his or her own learning. In this guide we focus on four of them: blended learning, virtual reality, gamification and inverted classroom.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "children": [
                        {
                          "name": "Blended Learning",
                          "description": "Hybrid vs. Blended Learning. \n Hybrid learning and blended learning can often be mistaken for one another, and both contain many of the same instructional elements. However, both are two distinct learning models. Blended learning combines in-person teaching with asynchronous learning methods, where students work on online exercises and watch instructional videos during their own time. Hybrid learning is a teaching method where teachers instruct in-person and remote students at the same time. In hybrid learning models, asynchronous teaching methods can be used to supplement synchronous, face-to-face instruction.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://resources.owllabs.com/blog/hybrid-learning",
                              "title": "What Is Hybrid Learning? Here's Everything You Need to Know",
                              "year": "2020"
                            }
                          ]
                        },
                        {
                          "name": "Virtual Reality",
                          "description": "Fluency often requires a fully immersive experience. For many, traveling to a country and practicing a language with natives isn’t viable. As an alternative, the popularization of virtual reality headsets has rocketed the concept of virtual language learning into a new frontier. VR headsets aim to create a more immersive language learning landscape. They offer a completely new experience—one that aspires to have users enter an actual virtual world, where they can move, talk, make decisions, and interact with the world around them. This could be a major benefit to language learners who want to take their language skills to another level. Several companies have started to put time and money into creating language learning virtual reality games.",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://www.unitedlanguagegroup.com/blog/virtual-reality-next-step-language-learning",
                              "title": "Virtual Reality is the Next Step in Language Learning",
                              "year": "2020"
                            }
                          ]
                        },
                        {
                          "name": "Gamification",
                          "description": "Gamification is a game-based teaching strategy. According to Michos (2017), playing and learning a language share similar elements, because both are goal-oriented activities that include processes such as mastering rules and developing skills to achieve a given objective. In this blog you will find some ideas and tips to help you introduce gamification touches in the classroom",
                          "have_pub": "1",
                          "have_pod": "",
                          "have_img": "",
                          "have_video": "",
                          "have_profile":"",
                          "publication": [
                            {
                              "link": "https://blog.sanako.com/applying-gamification-into-foreign-language-teaching",
                              "title": "Applying Gamification into Foreign Language Teaching",
                              "year": "2021"
                            }
                          ]
                        },
                        {
                          "name": "Flipped Classroom",
                          "description": "In this video Mercedes Marqués explains what the inverted classroom methodology is and how she applies it in the classroom",
                          "have_pub": "",
                          "have_pod": "1",
                          "have_img": "",
                          "have_video": "1",
                          "have_profile": "",
                          "podcast":[
                            { 
                              "link": "https://anchor.fm/dial4u/embed/episodes/Merche-Marqus-e1qmhod",
                              "title": "Merche Marqués",
                              "image": "",
                              "description": ""
                            }],
                         
                          "video": [
                            {
                              "link": "https://www.youtube.com/embed/GLLImyCZGgQ",
                              "title": "Dar la vuelta a la clase (aula invertida, flipped classroom)",
                              "description": ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
              
            }]}];
var teach = [
  {
    "name": "DIAL4U",
    "description": "Welcome to the DIAL4U project guide! This is an interactive methodological guide that will accompany the user in the multimodal teaching-learning of languages, as well as promote students' autonomous learning. If you want to know how to use this guide, click HERE (INSERT LINK).",
    "have_pub": "",
    "have_pod": "",
    "have_img": "",
    "have_video": "",
    "have_profile": "",
    symbolSize: 60,
symbol: "image://data:image/png;base64,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",
label:{
      show:false
    },
    "children": [
            {
              "name": "Teacher Training",
        
              "description": "<p>Do you need to retrain? Maybe some training on new trends in language teaching? On a specific aspect related to teaching? Here you can find some resources that can help you: <p> <p>links to several platforms that host MOOCs and to a MOOC repository (use keywords to find a course that fits your needs).</p> <ul><li> webinars</li> <li>conferences</li> <li>academic article</li></ul>",
              "have_pub": "",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":"",
              label:{
                show:false
              },
             
            
              "children": [
                {
                  "name": "MOOC",
                  "description": "In this space you will find links to several MOOC (Massive Open Online Courses) platforms that offer regular pedagogical refresher courses for language teaching. Take a look at each of them regularly, or subscribe to their newsletters to keep up to date with the latest news. These short, free courses can be a great ally for your teaching.",
                  "have_pub": "",
                  "have_pod": "",
                  "have_img": "",
                  "have_video": "",
                  "have_profile":"",
                
                  "children": [
                    {
                      "name": "Coursera",
                      "description": "Coursera is a virtual education platform. Founded in 2011 by Daphne Koller and Andrew Ng, professors at Stanford University,Coursera was born with the goal of providing transformative learning experiences for anyone, anywhere. Today, it is a leading higher education platform that delivers 87 million users and, according to its website, more than 200 universities and educators from around the world, as well as educators around the world as well as some 2,400 companies partner with Coursera to offer specialised courses or degrees in any field. specialisation courses or diplomas in any field. Through the search box you can browse MOOCs that interest you using keywords.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.coursera.org",
                          "title": "Coursera",
                          "year": ""
                        }
                      ]
                    },
                    {
                      "name": "Fun Mooc",
                      "description": "FUN MOOC is the e-learning platform managed by the public institution France Université Numérique (FUN). It was created in 2013 and developed by the French Ministry of National Education with the aim of offering massive virtual training with courses in French and English on a variety of subjects. You can use the search box to browse the MOOCs you are interested in by using keywords.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.fun-mooc.fr/en/",
                          "title": "Fun Mooc",
                          "year": ""
                        }
                      ]
                    },
                    {
                      "name": "Mooc List",
                      "description": "On this site you can find a complete list of MOOCs and free online courses offered by Coursera, edX, FutureLearn, Udacity and other top providers and universities in a wide range of categories and topics/skills. You can view upcoming courses (for the next 30 days) and the latest courses inserted or updated on this page. You can broaden your search using the multi-criteria page.",
        
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.mooc-list.com/",
                          "title": "A complete list of MOOCs and free online courses.",
                          "year": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Webinars",
                  "description": "A webinar is a training content that is broadcast over the Internet. Normally the first session is broadcast live via video conferencing platforms, usually recorded and then made available to interested users, thus reaching a wide audience. It can take the format of a conference, workshop or seminar. In live sessions, attendees can write comments or ask questions during the presentation via chat, resulting in a high level of interaction among participants. The duration is usually one hour and the topic of each webinar is very specific. In the field of languages, publishers regularly offer public and subscription-based webinars for language teachers. Click here to find out more about some of them.",
                  "have_pub": "1",
                  "have_pod": "",
                  "have_img": "",
                  "have_video": "",
                  "have_profile":"",
                  "publication": [
                    {
                      "link": "https://www.inboundcycle.com/diccionario-marketing-online/webinar",
                      "title": "Webinar: ¿qué es y cómo utilizarlo en tu estrategia de contenidos?",
                      "year": "2021"
                    }
                  ],
        
                  "children": [
                    {
                      "name": "LMDL: Rencontres Virtuelles FLE",
                      "description": "Les Rencontres virtuelles FLE des Éditions Maisons des Langues allows you to participate in live online training courses of high pedagogical quality. Wherever you are, you can follow them from anywhere in the world. And if you can't attend live, you can watch the recordings of these webinars on our educational platform Espace virtuel.",
                      "have_pub": "",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.emdl.fr/fle/formations/rencontres-virtuelles-fle",
                          "title": "Programme des Rencontres virtuelles FLE",
                          "year": ""
                        }] 
                    },
                    {
                      "name": "British Council",
                      "description": "Here you can find out about upcoming webinars and recorded talks from experts in the field of English Language Teaching. Our webinars are usually held monthly and are completely free. Certificates are available for all attendees",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.teachingenglish.org.uk/news-events/webinars",
                          "title": "Webinars",
                          "year": ""
                        },
                        {
                          "link": "https://www.teachingenglish.org.uk/",
                          "title": "Teaching English by British Council",
                          "year": ""
                        }
                      ]
                    },
                    {
                      "name": "Editorial Difusión",
                      "description": "Webinars and online training. Find out about upcoming online training sessions for Spanish language teachers.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "publication": [
                        {
                          "link": "https://www.difusion.com/formacion/webinars",
                          "title": "Webinars Aula Internacional",
                          "year": ""
                        }
                      ] },
        
                    {
                      "name": "Webinars for German",
                      "description": "Webinars in German or Spanish for teachers and students.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.deutsche-akademie-online.com/webinars/",
                          "title": "Webinar Profesorado",
                          "year": ""
                        }
                      ]
                    },
                    {
                      "name": "Webinars for Teachers",
                      "description": "Cambridge English webinars and Facebook Live sessions are a great way for teachers to stay up to date with the latest developments and to interact with their experts.Their webinars provide you with invaluable information about their exams, and cover a wide spectrum of subjects, including effective teaching methods, tips to improve student engagement and online professional development to help you develop your career. Each webinar is presented by a Cambridge English professional and  you have the opportunity to ask questions in the live question and answer sessions.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.cambridgeenglish.org/teaching-english/resources-for-teachers/webinars/",
                          "title": "Webinars for teachers - Cambridge English",
                          "year": ""
                        }
                      ]
                    },
        
                    {
                      "name": "Webinar list. Eventbrite",
                      "description": "Search this page for the webinar you are interested by using keywords.",
        
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.eventbrite.com/d/online/events/",
                          "title": "Events Eventbrite",
                          "year": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Conferences",
                  "description": "You can also train yourself by attending conferences related to language teaching. Below are some websites through which you can find upcoming events related to language teaching. Some initiatives have a long history.",
                  "have_pub": "",
                  "have_pod": "",
                  "have_img": "",
                  "have_video": "",
                  "have_profile":"",
                  "children": [
                    {
                      "name": "ELE  Conferences",
                      "description": " This site publishes all the congresses related to the teaching of Spanish as a foreign language at an international level.",
        
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://www.todoele.net/congresos",
                          "title": "Congresos todoELE",
                          "year": ""
                        }
                      ]
                    },
                    {
                      "name": "Jornadas y encuentros de lingüística",
                      "description": "This site collects linguistics conferences and organises them by country.",
        
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://conference-service.com/conferences/linguistics.html",
                          "title": "Conference Managment",
                          "year": ""
                        }
                      ]
                    },
        
                    {
                      "name": "The World Academy of Science, Engineering and Technology",
                      "description": "Language Teaching Conferences. This site gathers all kinds of scientific meetings. It is classified by category and you may be particularly interested in language teaching, language learning, language teacher education, languages or language acquisition.",
                      "have_pub": "1",
                      "have_pod": "",
                      "have_img": "",
                      "have_video": "",
                      "have_profile":"",
                      "publication": [
                        {
                          "link": "https://waset.org/language-teaching-conferences",
                          "title": "Language Teaching Conferences",
                          "year": ""
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Bibliography",
                  "description": "",
                  "have_pub": "",
                  "have_pod": "",
                  "have_img": "",
                  "have_video": "",
                  "have_profile":""}
              ]
            }]}];

var rese = [
    {
      "name": "DIAL4U",
      "description": "Welcome to the DIAL4U project guide! This is an interactive methodological guide that will accompany the user in the multimodal teaching-learning of languages, as well as promote students' autonomous learning. If you want to know how to use this guide, click HERE (INSERT LINK).",
      "have_pub": "",
      "have_pod": "",
      "have_img": "",
      "have_video": "",
      "have_profile": "",
      symbolSize: 60,
  symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAEyCAYAAAB5xlzFAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO2deVzU9fb/X8OwDiKgIK6ICyqioCUulca1tLRcyvYssW7bTa92b3Xvt7w3NLv31243u3XbxKu3zDaXskxL1HLDBUgTRWVxRUBAYIYBhvn98WZk+Xw+M5+Z+azDeT4e8xA+y/tzkOE155z3eZ+3wW63gyAEyQqJADCi+bsRACKav45rfrXmejdHLwJQ2O5YZquvswFUAqhEiiXbzbGJDoSBhIxAVsgIMFFyCJXj+77qGSXI9uZ/M8FELhtANlIslapZRKgOCVlHIiskDkykHK84AMkqWiQlVXCIGvPyspFiyVTTIEI5SMh8lZaQMLX5NQJAuIoWqUUOmLhlgokbhag+CAmZr8CEK7XVy1c8LampAhM19iJh8wlIyPRMVkgqmGjNhJzCZUoCjOGAMYJ97aDzhLbXBfYFgtxIq1XvaPu9tYi9AMBWBZhz2NfmXPa9PFQBWIcWYSuU60GEfJCQ6Qnmdc1Ei3hJEyoaw5lABfVlYmRKBvzDgbAJru9VEmsRUF/EhK2xkgmhrYp9Lx05YMK2jrw1/UBCpnVaxGsmgBlej2dKYq/AvsyjMiUzIdM75lzmwVmLmMBJ48UVgYlaBomatiEh0yJSiZex2asyJTHR0pqHJTfWZu+tekeLuHkOiZqGISHTElkhDvGa49H9xnAgchoTrLAJ7uWrOgrVO4DLO4DKjd4IWxGAZWDhZ6FkthEeQ0KmNqy2K6355b7yhI0HIqe3eF6EeGxVzaK2gf1bX+zJKOvBvLR1EltHuAEJmVow7ysN7oaODq8rYjoLF30hv6UVHGFo2SpPvLUiABlgolYotWmEc0jIlITlvtIALIQ73ldr8YqcJpNxRBusRSz89EzUVoIJWqb0hhF8kJApAQsf0+FOyQSJl3bwXNRyACxDiiVDHsMIByRkctIiYOKT92HjgagHWN6LwkbtYc5lgla2yp3yjiIA6SRo8kFCJges4j4dYtvaGMOZeMXMo5lGPeEQtOqdYu+oApvtXEbdOqSFhExK3BUwh/cV9YCMRhGyYy0CSpa746WRoEkMCZkUuBtCRs1m4tXRClR9HVsVE7MLb4st5aCQUyJIyLzBHQGj8LFj4V7YSYLmJSRknsDKKBY2v5xn5I3hTLy6z6fkfUekegdwdqlYQdsOJmiZ8hrle5CQuUtWSBqYF+bcrSIBI1rjnqCtBBO0QnmN8h1IyMTC+tovg6tEPgkY4QzxgsYmBFIs6fIbpX9IyFzBwsh0AAtcXhszD+i1iASMcE31DuDUI2ImBYoApFG46RwSMmew9ZDL4CqMjJoN9FxESXzCfcpWMQ/NtaCtBLCQyjX4ISHjg3lhGXC1oDtsPPPAqIyC8AZbFSvZKFnuqg6tCsw7o04b7SAhaw/zwjLgbDbSGA7EvkqFrIS0WIuA4mfYuk7nrAcTNPLOmiEhcyDWC6M8GCE34vJn5J21goQMEOeFmZKAfh9Q80JCOc4uBc695Ooq8s7Q0YVMzIyko5yi1yKlrCKIFsy5QPHTrso1OvzMZscVMlYXlgFn+0GGjWdeGM1GEmpTspx5aM4nAxZ31LqzjilkrDp/GYRCSWM488Bi5ilpFUE4x1oEFDziyjvbDmBmRws1O5aQsVByGZwt8qZcGKF1XOfOqsDELFMZg9Sn4wgZ61SxDs5CyZh5rKyCILSOORfIv9PVzOZTSLEsU8okNekYQsYaHq6Ds1Ayfi0VthL6wlbFJgLKVju7qkOsCPB9IcsKWQjgTcHzYeOB+M+pLozQL2WrWCGt8ERADlioWaicUcri20KWFZIBZ/mwns9TWQXhG5hz2USA8C5PVQBSkWLJVtAqxfBNIWNJ/UwI5cOM4SyhT9usEb6ErYqtCHC+xGmuL3ai9T0hc5XUNyUBA9dSbRjhu5QsZ6GmMD43CeBbQsaKXDMhlNSPmAb0/4DyYYTvU7GRhZrCebOVSLGkKWiRrPiOkLmamaTSCqKj4bpEw2dmNH1DyFil/grB8/3ep5Y7RMfEVgXkTXY2CZADNgmgazHzU9sAr3EmYsZwYMhmEjGi42IMB4b8wLoY85MMILN5gky36NsjcyliP9BSI4JwUPCIs+JZXXtm+hUyZyJmSmIiRkl9gmhL2Sqg4FGhs7oVM32GliRiBOEZUQ+wnDE/ug0z9SdkJGIE4R0+KGb6EjISMYKQBh8TM/3kyJyJWNRstuSIIAj3MOey8gz+wlnd5Mz04ZGRiBGEPDiPZHTjmWlfyNgOR/wi5uipTxCE55iSWD8+fpiYaRxtC1nLBiFcTEmsjxhBEN4TNsF5zoy1xNIs2hUyZwvAKbFPENLjfAJgjpbFTJtC1rLrN4kYQSiJazFLU9Aa0WhPyJw1RQyMJREjCLmJesBZp5gVWhQz7QkZ266NK2LGcOqtTxBKETPP2ULzZc2pH82grTqyrJB0AC/wnkvcSwvACUJp8u8Sap1dBSBOKzVm2vHIWJkFv4j1e59EjCDUoL/gZtXh0FBZhjaEzFmZRc/nqZ8YQaiFox2WUMGsRmYy1RcyZzOUUbNpuzaCUBvnYqaJmUz1hYyJGDe5b0oCYl9T3BiCIHgwJbmayVQ1+a+ukLFdwGdwjjv/BCAIQg2iHmCpHn7WqbkmUz0hYwr+Ju+5+LUkYgShRXotYmucufSFUJ5bAdQRMqbc63jPxb7K1n0RBKFN4j9nxelcZjRHWYqjlkeWAabgbYmYxgrxCILQLo7idH7eVCNfpryQsRkObl4sMJbVrBAEoX2cJ/8zlM6XKStkWSFxYEuQuNDyI4LQFzHzWBTFJRlAupKmKO2RZYCvXqzn81S5TxB6pP8HQg7IAmSFpCplhnJCxpKA13OOh42noleC0CvGcGfdZRULMZURMhZSpnOOG8OpVTVB6J2wCUKTdH2hUIiplEeWAb6Qst8HQBB38pIgCJ0R+6pQekiREFN+IRMKKSOmAZG8iUKCIPSIcHQle4gpr5Ax49M5x43hVGpBEL6GKUloCVNfALIWysrtkWWAL6SMfZVKLQjCF+m1SKjq/wU5C2XlEzIWF3MLX8PGU38xgvBlhKMt/hpSCZDTI8vgHKFZSoLwfYRnMa+Xq3eZPELGeu9zpyNj5tEsJUF0BHotEkofLZMj8S+9kDEjuYm9wFgqfCWIjoIxXGgtZjhkSPzL4ZEtA1+Cn2YpCaJjEfWAUO+yF5qL5CVDWiFjsxJzOMcjplGPMYLoiAi3q5c08S+1R8ZvnHC7D4IgfBlTktBGvzOkrPiXTsiYUdwK/p7PU4KfIDoysa8JJf7TpXqElB5ZOueIMRzoPl/CRxAEoTuM4c7KMVKleIQ0QsZ2Ced6Y8JTsARBdCS6zxeq+JckVyaVR8Y1JjCW+u8TBMEwhguVXyVLUSTrvZAxI7hJMKoZIwiiNVEPCHll6d4OLYVHxjUiMJbWUxIEwYXfwenrrVfmnZCx3Bh5YwRBiEPYK/Oq2t9bj4x/KRJ5YwRBCCGcK0v1dEjPhUyoboy8MYIgnCFDrswbj4z7UPLGCIIQA7/D43FdmWdCxhZ8kjdGEIRnCHtlaZ4M56lHls45YgwHIqd7OBxBEB0O/uhtjiedMdwXMtZvbCbneMw8quInCEI83ecLaUaau0N54pGlga/fGK2pJAjCHYzhQl6Z26UYnggZ9yFRs8kbIwjCffiXMYa7WyDrnpAJFcDGkDdGEIQHBPVljVe5uOWVueuRpXGOmJKEtkonCIJwDX94mezOPpjihYwl+bn7VFKHC4IgvCFymtelGO54ZNxBqeSCIAgp4PfK0sTe7p2QRU6jJD9BEN7DL2ThzXl5l/iLegiLVZM5x30kyV9ZWYX9ucdw5GQJii6aUV5jg6W+CQH+RnQOMaBnZCDie0fgqsR+GDSwn9rmSsK58xeQlZOPvOJLOFNmRqUZsDbYEBRgRIQJ6BNtwpDYLhiVFI+ePbqrba5iWK1WnCwoRuHZUpwpqUJJhQWXahpQbbHB0mBAQ6MNfgYD/P39EBrQhM6mAHTtHIjuXUzo0z0C/fv0QN/YXvDzk2fva5/FkfSv3Nj+TBqAda5uN9jtdtcPyQpZBmBBm2OBsUDyMbFmao5LlyqweuMufLanCnuLA2BrEvH/AKBX5ybMTDYgbeowjBqRKLOV0lJQdBoZG/bj8/11yCs1Qsyv3mAAErrZcMfVQZg7YzTiYnvLb6iCHD56HDv2n8DuY5U4cNqA/HJ/NNrEvReECA4AhsXUI6WvP64ZGo3rRyegT++eElnsw5StAgoe5TsTiRRLpbNbxQpZIdqXXcS+qstE/8mCIry8ajf+t98P5gbvxhrdpwF/mdkHt00ZD4PBII2BMrA7Kwf/XHMY3x4NRJOY37cAfgYDbh3agL/enYhxKVwHXQ9culSBTZkH8N2Bi/jxuBElNcr83gZF2TApwQ9Tx/TBDdddjaCgIEWeqzsOdgdsVe2PzkWKJcPZba6FjIWVhzjHk/J0tc1bXV0dlrz3Ld74sRHWRmnfvGNjG/DBwhQMSxgk6bjeUlpWhvlvbMHabHHel1gMBuDuETb860+TEB0VJd3AMmGz2bDhh1+wYutpbD4WgHqbuvZ0DrLjzpF2PDw1QbcfCLJR8AhQtrr90fVIsTjNlYkRMm5YaUoCEve6b6RK5BzOw+zXDuJwibiUoCcE+wNLZoTg6Ydv1YR3tu77nXjkw7Moq5UvVxMdascHj/TCjJuuk+0Z3nDm7Hm898UufPxLA85XazNnNTymAY/dEIkHZ05AWFgntc1Rn4qNwIm7+M44DS/FCFkhdBxWfvXdDsx+9zwsDcqIy53JNqxeMguBgYGKPI+PJf9eh8XfNHgVRorFz2BA+q0B+NsfRE0uKUJh8Rm8uOJnrMryQ4PK3pdYIkPsWDAxAAsfuBHh4Z3VNkddPAgvnQuZzsPKtRszMfs/FxV/M980yIr1r9ylSh7k2dfW4tUfFX8snr3RgJf/fKfyD25FRUUlFr+/Be/utKsePnpKtKkJi6aH4Yn7JiMgIEBtc9TBg/DSlb+dxjliStKFiK3f/DPuf69ElU/kzceDcM+iL2GzKfvw9OVfqyJiAPDKVjuWvONyllwWGhsbsWzFNxjw0Pd4K1O/IgYApWY/LFhTi+EPrcXGH35R2xx1iOAtsp/RvLqIF1dClso5ooNW1kfy8jH73bNobFIvV7XusD+efUO5P+xP1m/Dkk1eTsN6Sfq39VizYZuiz9x/6DBG/v4zPLXWjIo6bebBPOFYWQCmv3kWM5/5BCUXS9U2R1mEC+1ThW4R/s2zLo3cKRX+leqaoaamFrNeykKNVf2E+5vbbFi/+WfZn3OyoAh/yLgo6cykJ9jtwOMrSnCqsFj2Z1mtVjy/7Etc87ejOFziuyHY+sP+GPr4T1j1lUqutlpE8uqMR6El96bAWM2HlYvf+w7HyuSbnXQHux34w0enUV1dI+Mz7Eh75WdU1akv3ABQVeeHtFd2QlR9oocUFp/BtU9+jn9stqHBy+JVPXDJYsCDH5Tjvuc/RU1NrdrmKEPYBL6jHglZKueIxheI558swNvbm9Q2ow3nqo1If3eTbON/un4bfi7UlkeysyAAn23MlGXs9Zt/xsgFP+PAWfVmhdXi04NGjJ23DkePnVDbFPnh15pwodY+zoSM27KHXyU1w98+2g1ro9pWcFm+Azh77rzk49rtdrz4pfTjSsGSL85J7pX98z8bcPtb51HpQ7kwdzlSEoDRfzmA737arbYp8mIMF+pzmMp3kP8dIbS3HH/cqglOnzmHL3K05Zk4qLcB738p/Rtv04+7kVemzZ/5aGkAvt+2R5Kx7HY75v9zLZ5bV6dIbZzWqbEaMPON01j9tY/nzfjz8bzhpdBHW6rIQTXDyg37RC/8VoOVu6ySeyjvbiqQdDypeffbU16PUV9fj/ue/wzLd0hgkA9RbwPmfHAJb674Vm1T5IM/vOTupwt3hKyztsPKLw+Y1TbBKUWVRuzKypFsvIqKSmw+po1JDSG+PxaAykpOhbZobDYb7n7uM6w51HFDSWc02e348+e1ePkDTusb38CUxF+GwRMxCr1DuKqn4fzY+QslyDmv7T9qAPh2l3RJ2h93ZataJyeGBhvw065sz+5taMDd/7cG645Qlwhn2O3A/31twWsffaO2KfLArzup7Q9whYwvPyaceNMEO7N+U72GSgw7jlklG2v3kYuSjSUnu38r8ei+J/7xFb78VZv5P61htwPPfmlGxhdb1DZFevgjwdT2B/g8Ms5FWhYxAMg+Ua62CaLIOR8gWZ7s19P1kowjN57Yufiddfhoj7a9Ta1htwOPZlT43mwmv/ZwIkY+IePWaWg4rASA/AvSeTpyUmOFZMtNCir0kTc6Ve6eIK3ZsA2Lv9WHSGuNBhtw3/Ji5J/U9iSQWwhpT7t6MnEemcYT/RerdRBXNlNaXiHNOGbt5wQBoMwsPjzMP1mAxz4u0UWaQKtUWgy47cXdqK31oRUAYeP5jqa2/qbtXwNbX8mdJtC4R1ajD4cMAHCxtBSXLnnfVdXcYACg/b/42gZxnmNtbS1uX7ILl62UF/OWIyX+mP/qRnycfo/apkhD2ASgemf7o208svYf69ywUuP5MYC1XtYLweW/R5cC7zdtsTf9D2I3wVITsb+bv7z1LQ5fJBGTihV7/XDzxkzcNS1VbVO8x8TbDtxpaKlLIQsL0pGSdTBCA1yvfd26Yx/e/Zl+h1Lz+McXcOasNpewuQW/BrVRt/ZClsodRPubI/SIoD8CrRLTyfni15qaWjz07xOqLz0yGICrBkZiXEJXBBh94/1UUeeHBW8p2x9OFoL6uiyMbS9kcZyLdeCRxcdQ0aRWGdDVuUAt+c93OF2lbojcv3soDi2fjANvT8KuN25AwcpbkZoUrapNUvH1YX98s2WX2mZ4D78OxTm+aP8O4jYb03iiHwCuGtwN+M4HXGgfJKmP8IdM/skCvLXNBkA6DyiyUyBefqjtm/7QqQq8+81JwXs+e24ckvu3dFHu1TUEa5+7BnFzvoHZqmzf7CUPDEP3yGDB81sOleDznadFj2e3A/M+LsSN469CcLDwuJqHP+Ef5/iiRcj4KvoDY+UxSmKuS0mEn+GC6uEJwWXcsB6C5/7ynz2otxklfV6nECMemdK/zbF1u84KClnvqBCMiu/COR4dHoTrEqPww0HPViZ4yp3je2NIH+FdlGrqGt0SMgAoqvTHe59uxcK5t3prnnrwN3RNdXzROrSME3mz5ujapQtSelMRpdYICQBSx/H2wcOe/TlYd1haEZMaX/pYfHlTtb67y/JrUZzjC+dCpoOw0sGdY8LUNoFox7ShDejUKZT33NJPDmui8PVMmQV78rhL3Eoq6vDz4TIVLJKHCzVGvP2/rWqb4Tn8WnRF3VoLWSrnMn/B3Zc0x+xp4xDkr4G/DOIKT85I4D2eczgP3+Vpp1X13f/YjX3HWsSssKQWs5bugkWFfeXq6m0wWxthtjaiTuLnv/GDBbW12m535RQnM5etk/1c1dLBjKWDmG7RmDumCe/9ou1wpaMwJrYRE8ZdxXvu5U8PosmunWLe4lIzxiz8EUNjOyPQ3w+5hZVoUmnrh5HzWjpYJPePQPY7kyUbu8zsh1XrtuPx+6dINqaimJL4Ev4RQFuPjFswFqiPHJmDv/9+IjoHkVemBZbcO4D3+Nlz5/FFjnZErDW/FV9G9in1REwJ3t0qzVpfVeDPk40AHB6Z0A6+Okn2O+jRPQbPTQ3GX7/W0eJLH2RWkg2TU8fwnvvvxr1e7f4eG23C1fGR6BIWCLPVhrzTTHy0kG8zBRkxLqErYqNNsNmBopJa7D1Wjrp67Shj7gV/7M7KwbgU7Re6c+B3rCKAltBSl0uT+PjT3Kn4bO/nOHROm5/6vk60qQnv/PlGwfOf7jHDkzWik66KweLZiRg7pCsM7RZwnjxfgyffOYjNBy6IHi8qPAi/vD7R6TVPf5CDjXvPuRwrPDQASx5IxMM39UdocNuf7VJ1PRat/BXvfnsS1w+PxvsLRrU5/+oXefjwe2Xb7qz47qg+hczJmkvhdxT/luWaJyAgAF/+7TqM+fMulJq117Or3NzJ6zHKajvB1qS9XKDRYMfKJ/sipht/VXzukWP49YJ7IhZgNOCtJ0bi8akDOALmYECPTvhm8XW4/5W92H1U3Eyjv58Bg3o5n+kOC3Fta3L/CGxIvw6x0Sbe813CAvHveVcjJMiIvNPVnGdGdlJ+0uPzbAP+VVenvwJZf2FNcvylp3LO6CysbE2/uFh88XQ8gjU4i/nDCe893W+PXwW7hNXwUmAwAMtnh2PKxHGC13z6w69uj/vOvKvxxC0DBUXMgb/RDx8/lYIEJ8WkUtOjSzC+XzpBUMRas/TBYXjiVv68odJUWgzYuvOA2ma4D39oeT3gbINenSX62zNh3NVY/3QcwgK1JWbf5/MXiLrDhqOjXF+kIH4GA167MxSP33ez0+u+Otjg1rgzx/XC72/qJ/r60GB/bH6Jd7cwWfjoqRSny4laExLkj1tH95TZIvF8s8e91QGawIlz5fCd4xQxRGEmXz8GWzqFYPr/+w0Xa7QRZp681B1HS3siIdp17oWPukZ/bM7XTn4j2N+ODx+Owv0zneebTpwqxPEy8eGwwQC88nASrye2LeciPvz+FI4UX4bRz4AR/SPw5LSBuGpgpOjxrQ02fLuv5XcQ2y0Uw+PEp1OuHRqFKaO4y68uVNTh9S+PYcfhUtTV2zCsbzj+OCMeY4Z0FT22Emw+qq0PeK/ICokTFjKNt7cWy5irk3DoX90w9//9hB+Oa2MCYMPRUUiI3uDRvTsKE1DboI3cxpDoRqx6KhmjRia6vHbb3jy3xh4/LBrx7fJJdrsdT3+Ygze+Ot7m+METFVi5tRBvPDoCf5wRL2r8ipoG3PrCz1e+f2xKf7z3R/Ge7oM3cr2Do6cvY+JfMnGhou7KsdyCKqzZXoz35o/irAFVk8IKI06cKsTA/nFqm+IeYeN5F49rw02RmZ49uuP7Zffiw7QIRJvUnwpf70Vo+P1x70NTbwnyt+P5m43I+fAOUSIGADuPXHLrGROTu3GOfb7zDEfEHNia7Fjw3iHs+k2ZZUUTk2PafG+32/HAq3vbiJiDJjsw/92DOF2qrap6dz9ctIxDyOLUNEIJDAYDHr57Mo59eDMWTfFHlxD1XOu9Z+I9nr2UYrLAUwKNdjw0tgl571yLpQtmITBQ/IxbVrF7zxrShzuj+PaGfJf3vbdJuF2PVAQF+KF/97ZrSI8UXcaBfOFiU2tDEz7ZViS3aW6x66h7Hy4a5opHpss+ZJ4QGRmBF/94O06vnoZPn4jGXcmNiApV1ktrsvvhh3z3BamwIgpHLvaRwSJhQgOBmwbV4537O+Hsyhvx0Qv3IC62t1tjVFfXIL/cvX780eFtw+cmux1Zx13/4Ym5xlu6RQTDz69t7u7XwiqX9x08WSmXSR6xr1hbM9+i4NelOG0kjVTAZDLhnum/wz3TWVhw/EQBco8Vo+BcJUov16O84jxCAnLdHvdISW/8XDQENrvzxPZ3+SNxb7J7nTs35I2C6yaEdiR3L8LYPvkw+rkn0GZrP0RGxKNr50DEduuEYfG9MCwhHgEB3m0KkvtbPmxN7nnAQf5tsx71DU2wNrj+eWrrnLfWloLgAG5Gxmx1/dwai/y2ucOxUn9YLBaEhISobYrXdFgha43BYMDg+P4YHN+SjN33ywaMDl7o0XiXLKHYciIJ3x8fge/zk3Ghhjubtjk/CU12A/wM4v/AhXJrYUFm3DjgMG6Oz8bN8dmIjfBs5/XM8+lIvfVuj+51xuGT4ivuHTTY2opWoL8f/I0GNNqc/3+FBMpfKFzfyBXUoADXzw0J0lYRs63JjuMni5A8bIjapngNCZkMdAmpxd3Dd+Pu4bvRZAf2nx2ADUdHYX3eKBwu6QPAgIu1Edh3ZgDG9jkhaszKuhDsKBx65fs+4WWYPmQ/pifsR2q/3xBoVL7ljFiOn6l2+56K6raNMv38DEjuH+E0DwWgTctquSitssJut7cpDUngyem1Z1hf7a2WOVlc4iNC1m7rcQC6aXGtB/wMwOjeJzG690ksnfQZCiui8H3+CHx3fASOl/UQLWQnynvg2r55mBKfjSmDsjE8plg3+3kWlDYAcC88zT9Xwzk2b9pAzH0jy+l9j06Rv3rebLWh6KIZcTEtCf+RAyIxrG9nHC66zHtPgNGA2RO193dVXOL+h4yqCHTA8AdfHzIdL0/SOnGRZXh89FY8Ptq9bp2jep1C5sNLZLJKXs5Uuj9D/AtPGcWcG+OQmVuKlVsLee9ZPDsRN46M4T0nNdtyLmLu5JZVB35+Bvz3mTFIfXYbLpu5ubCX0oZjYE+u19Z+kbnSnCvXVkmIS/i1KYJCS0J2Smrczw1tOViC8stWdO3csguTwWDAx39Kwc2jumP1T0U4droafn4GDIvrjMemDMDkq7uLHj88NAD/emLkle/5FpA/fssA3DSqZcw5r+278vV/fyxsI2QA88qy3pqEV77Iw+6j5ahrsCGhT2c8NnUApo3hX570x+nxGNijE/6+6jBOXXDdU/+mq7tj5dOjOcc37TuPz3a4v+yo9LK2JiA8hYSMkJ2KugAA7s2gWuptePnzPLzycNvlWH4GA+65Phb3XO9dmBYSaMSDN8Q5vWb8sGiMH9bSyaO1kGXmluLH7BLcMKKtBziodxg+XJgi2o7IsEDcP7Ev3lqfL0rIhsZ2xtBY7sL4C5fqPBKySrN2c6vu0CEq+wl1qbV6Vny87Ovj2J8vvi6sobEJv1/mPIcmJY8s249L1eJ370p7fR9nEkNtaut9QwJ846cgNEt9fb3H+4022OyYkf4zsk+JKyRdtPJX/HDQ/VIPTykoqcW0F3biYiV3WVJ7PtlWhJVbC7EpS1sbSVsbKLQkCJfYbN6FLucu1WHswq1YdO9QLJgRjzATd/az/Nf7WKEAAB9BSURBVLIV/7fiV3zw/Sn0jgrhFMVaeXpr2+12SYpndx0tR9ITm/Hq75Nxb2os/I1tfYNGWxM+/L4AC/9zCADwh3cOoMHWhFvH9GxT88Yn9k1N4m3kq20Tg81FXZ5eMNj3BacC2NbmaNh4YMgPqhikFVhB7Ay1zVAUVhD7gqRj1tfXI2jGOknGCgk04rrEKAzuE4bQIH/U1DXi2Jlq7DxcKqrqX26iwoMwITEKcTGhMBoNOFNmwfbcizh3ybXHphYT4izY/u4ctc0QT/UOIO+m9ke3k0dGyEpgYCD8DAaPw8vWWOpt2HKoBFsOlUhgmfSUVVnx1a6zapvhFkEBviEBlCMjZCc0SCeVux2QTj6yfSIJGSE7XULca3FNKEeEyTckwDd+CkLTdAv1jVolXyQqzDdCS38A3Lltq7YawPkSxZVdr6y1nJW4F7NH/Oz6JgAHzvbDs5tn4+bmtZaJ3U7rZq1l7wgDss6obYXndI8MRoA/9z/7YqVVcJKhT3Tb1jiW+iaUVQlvHB0abESXsLaNKi9drketVd4PgZ5dXe8ApSn4tanSHymWbGS160dU72Y7T0KQJjtw6Fw/rM8bhQ1HRyHnQl84eoo9O1583/4BXUuwozABP50ahmc3z0bfiFJMH7IfMxL2Y0LcUQRouPtFXLR3/czU5Karu2PTkvGcRooAMPm57bwTDwFGA4r/O63NsU1Z53HL3zm95q9w94RYfPRU2xUBaa/vE1xXKhWxMa67dmgKfiHL9g2/UmNUWkzYcnJ4cz+yEThX3YVzTbfQKozuLa7zBQBEBJsxPu4otp0aBgAoqozG23um4O09U9A5yIxJA3Ob+5HloHe4tloYD+4dBkBnXRYA9O8eilXPjOEVMV9hQKwyi+zlhoSsmfyTBcjNa+4QW92ASxVn8UmA+/U1uSWx2FmYgEYXO4FPjs+B0c+9GaMZQ/ZfEbLWXLaa8OWRsfjyyFgAdozsUYhrY4+53SG22uqHb/PWokuYo0NsbyQOGQh/f+/eJon9u0NvQhYabMSG9OsQHR7k+mKdYvQzYNAA3+h002GFzGKxYMOW3Vi3+zx+zPdHaW37T90ezS95mBKf7fY90xP2Y+GmOXDe7tqAQ+f74dB58RvbcqkHcAnAJYQF/Yrr+lkxfVRX3DllDLp24XqXrkhOjIef4YQktWRK8dHCFCS2a4T49a4zmDmul8tdz/XC4OhGn2hzDbTMWnIDz+odylqiEFVVl/HC21+iz+wNuOfdMqzJDuARMXnxMzRhcnyO2/f1iyxFYjdls+bVVju+ywvEE6ur0WvOFjy6ZA2Kit2zISysEwZF6acE4693DcHd7bprnC41Y+WWQp8RMQAYrUdnjF+XCh1CVqicJeqx4vMfMOjhTViyyYZys3pvyDG9TyDKxO2AKoZJA93fEEUqrI0GfLDbD0Pm7cILb3+N+nrxnRxStNcclZeJyd2wdM5wzvEln/yGqSnyeehqMG6w/G3BFaKwQ9SRnb9QgpsX/A8PfVyJi7Xq/8jTE/Z7fK8nIanU1DUASzY1YOQjX+BA9hFR91w3lLsBi9aI7WbCJ38ZC2O75H5uQSVW/1iI267tpZJl8jBxbILaJkiGsEd22TdCy6xDhzFy/jZsPq6dEoAZQzwXsgn9foMpQBuLkH+76I/xfz+MNRu2ubz2d2O0vcFFSJARG164DjGRbffTbLQ14Q/LD2DMkK6cvTb1TFykDQP7x6lthvtU85aw+HZouXX7XtyQfgQlNep7YQ76d7mAhG6eLywO9m/ETR7k1+TC0mDA/e+VYdmKb5xeFz+gH+KjtNv76v0/juLdgem5jF/xy2/lGJvQVQWr5OOmBN/J9SHF4iS0rNd3df/Pew9h2muFqK7X1i9MitDQG49ODprsdvzpczPe//R7p9fdPlI7XnFrnrptEGZP5Ga+P995Gq9+cQwAOOGm3rlljLI71kuCkxVHDiHLdOcmrVNYdBqzXj2GukbtvfmkSNZPHXwIBmirlMFuB55cXYXN2/YIXnPvZG4SXW0mXRWDVx5O4hzPOVWJuW/s47nDM1y9E5XcvDc82I5JE65W7HmSwe9cbQecLRq3Vclkjbw0NDRg1os7NZHU58PT2crWRIdWw+invSVJjU0GPPhOIS6WcrdyA4DkYUMwLEY74WWfaBM+eXYsp6vrZXMD7nxpF2rrpPs/7hzq3Bvt3z3U6XkpuXOkHcHBOsz3NQprkuM3yI13zOpN83vDspXf4eDZDlvnqzoXa/3w5OtbBM/fO1Ybi5SDA/zw9d+uQVS7yv0mux1pr+/j3SBYLA02OxptbVdVDO8bjkB/4Q/XSVeJ38rOW+berO2JF0HMvLnhbMAhZCkW/t0ddBZeXii5iKXfWNQ2o8PzRY4RW7bv5T03Z/oYBCgXRQnyzryrcXU8d5XCy2vz8DVfl9e6k0DVpravRn7PEwDOlbedWe4cGoA/zxrEe+1Dk/theFw47zmpGd69EdeMHqHIsySHP7SsBNouUcoB0HYTwfoiXe06vuSDn3DZqs2QsqPxwif5mHT9GM7xXj17YFZSI9YcUs9rfnLaQDw0mbuEa+uhEvztv4f5b6pYA5z4rO0x8/MAuPk1AMg6fgmx3dp6ny/NGY6YyGCs3FKI85fq0KNLMO7/XV8svI1f4OTgiRt0XAQr0PkCaCtkXK/MnAuETZDHKIkpuViKFftIxLTC7uJA7NxzEOPHXsU595d7R2Jt9mFV1l6mJkXjzUe5HsmJczW4+5+7YWuSxqY124sx67rebY4ZDAYsmDEIC2a0FS673Q6ztRGmIHnFPcrUhAdmXi/rM2SFP91VCbRN9mdyLmkUt5+gFli9cTfq9LOcr0Pwzvo83uMjhifg5sHK/7J6dQ3Bmr+OQ0C7XFVdvQ13/WOXW5vtuuKrX85g37FyUdf+cLAE8/99SLJnC/HUZBM6dVJuUkFy+CYgUyyZQFshK+RcpKOF41/s01ebmI7AhiNG1NTU8p5bdF+ioh1uTUFGrH/hWt7K/YfeyMKhk84/tMvN3AaEF2s7C17fZAdue3EXfiu+7HTcs+UWPP72AafXSEFMqA1/vP8G2Z8jG/xadCXWdC5kOkn2l1+6hH2nA11fSCiKpcGAzN38BcDjUpIxI1G5Uox/P8lN7tua2Azlp9tdd0T+4UTbXNjZy5HN3X6FOVduwdiFW/Hy2jyUtmtzbW2wYU1mMcYu3IrCkloUXazFul1n27yKS80ifzrX/OWWTvr2xvi1qNDxReugnPuO00nL61+yjuiq11VHYs+R87h1Ev+5lx8bh00Ls1Avc0mcKciI2Te0FZ2GxiY8+NperN99DreO6YGrBkSyFj31xUD5x1euKzd3wrfHrkJBRQyOlfbA4OjzAICtJ1hx74geBZg0MBemgJawdPFPd175utrSiL+uyMVzGbmI7xWGrmGBMFttOH62GuZW/fh/zL6IH7MvyvLzx4Y34ol7BX4JesFJoh9oLWQplkpkhRQBaPsbr96h+YT/weOlaptACJBTLLzhxqCB/TA/dT9e/1HeDyGz1YZfC6swotVaypLKOsye2BcfLkxBaHCrz/OaSuDYF23u/9ctGTha2guB/i0e5IiehTj9zB9424q3FjIHTXbg2Bnl0x8GA7D84b76LIBtDX9oeUXI2k/zFXIu1UFh7PEL2ugGQXA5We48EfbCY1PQO1z+EHPXb21rvnpHmXDL6J5tRUwAgwEY2u0s+kW2fGAmdy/W3N4IfMxMbMS0SdeqbYb38OtQoeOL9kKWyR1AO50WhDhfSWGlVimpcS4UYWGd8NHjA+Anc+Z/91FxM4i+RERwE95akKq2Gd5jLXI6YwlwhUyXS5WqrSRkWqW2wXVt3+TUMXjsGvc2SnGX9h6ZO5SbO+G/hybg0PmWrMum4yOw/ujVqK3X7iTTu3Nj0Kd3T7XN8B5+DWrjYbX/uNSlkOkpz2/t+h7KYr1f62bw28kSLxpH7O/m1aduxY4T63GkRJ6i0FMXanHj/2W67rlvqwRqn7/ybVWdCQfO9QcAnH328SvHG2xGzPzfswjxt2JMnxMICZCuBk0K0kY34Z7pv1PbDGlwssbSQdt3TYqlEFkhVQDaLvzSeMK/k4527IqO7oGoaO8XCJsCgCrtNJIQxBQoTslCQ0Px1aJxSHl6Hy5b5Qkzxc8Kcpcdjep1Et3DWsKbG/ofRqCxAZbGIGQWJEpkoTQkdGvA8mdnqm2GdLhI9AP8bXwyOUc03va6W5j2+o4JEd1Vmt710SZ9LGNwx85BA/vhvbndFC2UFcv4vkfbfN8pyIqUXidVskaY8OAmfL1oHEJDdVwz1h7+9taZrb/hEzLdhZcDu+vDJQsNBGK6RUsyVr9IeXNKUtG/i3t23jvjd/jbFO11kuULHU0aCyf9/ez4ZF5fDI7vr7Yp0iGkPSkWDzwyjS9VGjlQH/3Uk3s0SLYv4vA+2k0yt2ZYb/ftXDz/Nswdow+h1goGA/CfOZGYesM4tU2RFn7t2d7+AFfIWk1pXsFWpWmvbHzKUE2GI+2ZMFg6z3FcYjfJxpKTaxJjPLrvP8/Pwu3DteXxaJmXbzfhobsmq22G9PCntTLbHzDY+aaVskIyAbTt9xH7KhAzTwrTZGHEQ/9DznnthSSt+XnxIFwrUVO7iopKdJu9GY1N2lVwfz87Lq6+CZGRnvXAamxsxO1/XYuNR9Tv+Bvg14gAY9u1VHWNAWiyq9s6ymAAlkwLxKInfCi535qD3flqyH7X3uES+i1kco5oPOE/a5Q2WigLERtuwzUpya4vFElkZARuGqztacubBzd6LGIA4O/vj89fmoW7Rqi/P0FDkz/MDUFtXmqLmJ/BgFfvMPmuiJlzXRbCOhAvZJUbvTNKZuZMG63pLbvmXBMoWX7MwRNTuV1OtcQTt3ifdA4KCsKaf9yDP1wngUE+RIARWPFwJP780K1qmyIfFRv4jnLyY4CQkPHlyQBNJ/1j+/TCrCRtliQEGoFHZ10j+bhTbxiHwVHa/JmHRDVgysSxkoxlMBjwzvN3YemMINmXMumBTkHA1wt748FZN6ptirzw600m30FnvvF6zpEKbXtlLz48DoEa2NiiPU9OMKB3rx6Sj2swGPC325Xbfccd/n5HD8k90Ocfn4Ev5ndHRIj2VzTIRUJ0A/b8cyRuuVH6D0ZNYasSqh9bx3fQmZBlco7wu3qagbWF0dYndo+wJix+Yops4983cyKujdOWV3ZdXINsy2NumzIeB9+8Blf17HgzmnePbMTed2YgMSFebVPkh19rqtrXjzlwJmRc5asv1nzX2PTHp2JQlDaS4AYD8O+HeiEsrJOMzzAg45lr0TlIG15KeLAdGc9eJ7k31pp+ffvgl3fuwF8nGxFg1NYHlxxEBjch4+EuWPOP+2R9L2kK/rCS1xsDnAlZiqUQrXpiX0HjSf9OnULx5XOjECpyjZ+cLEg1YObN42V/zsD+cfh3mjQrBrzBYAD+ndYNA/rJv4VgcHAw/vnULPzyYgISY7TlkUrJtMRG/PbeRMy5w8fzYe3hT2NlCl3uav6Yq4Blq9yyRw2GJQzCqsd7wt9PPTGbkdiI1/58u2LPu3/mRPx9qrp1dH+fGoD7ZijbcSFl5DAc+uAuvH5niE/lzgZF2fD1gh7Y8Np96B6jj+JnyajYyF924ZFHxsjgHDHnaj68BFgu5b+PRKkiZpPiG7Bm6e0wGpWdeVg8/zY8PVHRR17hmRuA9Hm3qfLsgIAA/OmhaTj54WTMnwBN7GTuKV1DbHjzLhN+/WiWIt68JqnkzY+tR4pFcKsr/sr+1mSFFKJ9H3+NV/m35stNOzD73fOoa1QmlzIrqRGfvHgHAgPVWwuZ/s46LPm2XpE+bQYD8MItgXjhSe0UZRYUncbij37B/w4YNL3yoTURIXb88Xf++NODkxAeLrzNXIeAv5p/LlIsGUK3iBGyZQAWtDlmSgIS93pkoxpk/3oU9792CL9dlG+pS7A/kD4tGM/8/lb4+am/4/lXm3bg0Y/Oodwsny1RoU14/+FeuG2KNj2H4tNn8d6Xe/DxLw0oqVH/d8JHYkwjHvtdOObcNgGdO3P3zuxwVGwETtzFdybSW49sBADuNshJeUCQ/EldqbBYLFj87ia8+VMj6m3SfkqP7tOADxeOwvChgyUd11sulpZh3utb8HmOtLGWwQDcmWzD23+ahG7RUZKOLQeNjY1Yv/kXfLz1DLbkB6BB5RVPYYF23DGyCQ9PTZBs7a3PUPAIULa6/dH1SLE4dfldCxmg+/CyNSdOFeLl1Xvwv/1+sHg52TWqdz2endEbd9xyvazlBt7yy95D+Oea3/DdsUCv9v/0MxgwdUg9/nr3UFw7ZqSEFipH+aVL+HbbAXy3vxQ/5htRWqvM721AFxsmJxgwdUwfTJowCkFB+uihpzgehJWAeCHjhpeBsUDyMbds1BJl5eVYvWE3PttThX2nxf+B9wizY2aSHXOmDMWYq7ktkbXMyYIirNiwH18cqMexUvFe2pBuNtxxdSDmTk9B/7hYGS1UFrvdjtwjx7DjwAnsOVaFA2f8cKLcHzYv90II8gcSu9UjJc4f1wztiutTEtA3trdEVvswZauAgkf5zjgNKwHxQsYfXibuZfkynXPpUgX25x7DkVOlKLpYi/KaJtTV22D080O4yQ89IwMR3ycCVw2Nw+D4/pr2vsRy5ux5ZOXmI6+oHGfK6lBhtqOh0YYAfyMiTQb0iQ7BkL5dMWr4QFmWV2kVi8WCkwWnUXi2FGcuVqHkkgWXahpRXWeDpR5otLG4NDDAHyEBTQg3BaBrWAC6dzWhT0wE+sd2R1xsb8VnrH2C/Lv46lRdhpWAWCEDgKyQbABt+9BEzQb6fSDufoIgCCGsRUAu7+5ityHFIlg/5sCdqZwMzhHhwjWCIAjx8BfaV4kRMcBbIbNVaX4hOUEQOoBfyDLE3i5eyFiyjdvap2S56CEIgiA4VGxkDSm4ZIgdwt0qQe7A5lxNb0xCEITG4ffGcoRa9vDhnpCxeJW70LLkbbeGIQiCAMCS/PwddZa5M4wn6za4DyhbTUl/giDchz81VeWqALY9nggZ/wMukFdGEIQb2Kq8TvI7cF/IWNJ/Jed4yXLyygiCEM+Ft4U0w62wEvDMIwOAdM4RKsUgCMId+L2xlc3dqd3CMyFjD+LuL3d2qUfDEQTRwShb5XXJRWu8adKUzjlSX6yLVtgEQagMv9OzXXBPXRd4LmTsgeSVEQThHsLeWLqnQ3rbNjODc4S8MoIgnMHv7BR56o0B3goZq/XgFsiSV0YQBB8yeGOA9x4ZvwHklREEwYewN5bhzbDeCxl5ZQRBiEEmbwyQxiMDhLwy6oxBEATA6kxl8sYAqYSMGcI/g0nV/gRBXHhbyBtLk2J4KTf7S+ccsVXRGkyC6OjYqoSiM4/rxtojnZAJ1ZWde4m16iAIomNS/LRQZJYu1SOk3n55Ie/R4mckfgxBELrAnMu34S7AdkfKlOox0goZ6+jI7YxRuRGo3iHpowiC0AHFTwud4Xd6PERqjwxgBnL9yFOPyPAogiA0S9kqoHon35nFnnS4cIb0Qsb6lXH7CdUXU20ZQXQUbFVCKaUqeNBvzBVyeGRAiiUdvL39l1PinyA6AsKlVwubnR1JkUfIGGmcI7YqoIBCTILwaap3OCu3yJDjkfIJGZuR4O6DWb2T7WNHEIRvIlylIGmCvzVyemQA88q4/mXBI1TxTxC+yNmlQvvcLnZnn0p3kVfIWCyczjluq6JZTILwNcy5rACeSxFkSPC3Rm6PDEixLANfxX/lRgoxCcKXEM5/p8mR4G+N/ELGSINQiEmzmAShf4qfEQop35Kygl8IZYSMFb+lc47TLCZB6B/hWcoiSLie0hlKeWTCIWb1TupbRhB6xXm+W/aQ0oFyQsZIA1+IKeyWEgShZU49ItRnTJGQ0oGyQsZCTP5akvw7qSSDIPREyXI2acclBwqFlA4MdrtdyecxskLWAZjBOR4xDYhfq7w9BEG4hzkXODJG6OxIOWvG+FA6tHSQBr61mJUbKV9GEFrHVsUiKH6eUlrEALU8MgDIChkB4BDvucS9gClJWXsIghBH/l1CIeV6pFhmKm0OoJ5H5mjC+BTvubzJlC8jCC1ydqmQiBVBoo1EPEE9j8yBUL7MlMQ8M4IgtEHFRuDEXUJnFc+LtUY9j6yFNLBZjraYc6lYliC0gvO/x7lqihigBSFjBXNp4KsvK1tNyX+CUBtHcp8/3bNSrh5j7qB+aOkgK2QmgK95z/V7H4h6QFl7CIJg4pU3WahgPQcplhFKm8SH+h6ZgxTLOgCLec9R5T9BqEPx00J/e1UAUpU1RhjtCBng6PXP3U7O+acCQRByUPCI0J6UTMQUWkcpBm0JGWMh+JL/zuN0giCkpGS5kIgBbAMRVZP77dGekDGVTwVf5X99MdWYEYTclK1y1nf/KS0k99ujPSEDHGI2E3wzmeZcEjOCkIuyVUDBo0JnVza349Ic2hQywFH5nwoSM4JQBtcilqagNW6hXSEDHGLG3/bHnMtmVAiC8B5zrrNwMgcybuUmBdoWMgDN8fhc3nNlq6n6nyC8xXmEkwONzVDyoX0hA0jMCEIufEDEAL0IGeBazPLvopwZQbhDxUafEDFAS0uUxJIVkgZgBe85UxIw5AfAGK6oSQShO5wn9nUlYoCePDIHzjwzms0kCNf4mIgBehQygMSMIDzFB0UM0GNo2RpnYaYxnIWZ1DKbIBjCaycBHYsYoFePzIEzz4wWmhNECz4sYoDePTIHzjwzgPqZER0X1x/ouhcxQO8emQPmmd0GvuVMAMsJnF2qpEUEoT6OfLGwiK2HD4gY4CsemQO2xVwmAP76i6jZQOxrVJ5B+D7VO1zVVmp67aS7+IZH5qBloTm3nxnAcgR5kwErt0MQQfgMJcuBvJucidhiXxIxwNc8MgdZIRFgnlky73ljOBC/FgiboKRVBCEvtirWSEE4qQ+wHY8yFLJIMXxTyBxkhWQAmCN4vufzQK9FiplDELLh2K5NOB/maE+tqc6uUuHbQgYAWSELAbwpeD5sPBD/OeXNCP3i6OgqHErmAJiJFEuhckYpi+8LGQBkhaQCWAehSQAKNQk9Ii6UXAnWY1/3M5PO6BhCBgBZIXFgYsafNwMo1CT0g+tQEmD99TXZmlpqOo6QAY5JgGVwljczJQH9PqClTYR2ObsUOPeSsyuqwELJTGUMUp+OJWQO2EqAZXAWavZaBMTMU9IqgnCOtYh5YdU7nV21HUzEfDqUbE/HFDLAUTybAWehZth45p0F9VXKKoLgp2Q588Scd3VZ3LzJdYej4woZ4Ag10wEsELyGvDNCTcR5YUUA0jpSKNmeji1kDrJCZoJ5Z8I1GJQ7I5TGdS4MYOsl0zpaKNkeEjIHzDvLADDD6XUx85iHRnVnhFxU7wBOPQLUFzu7qgpMwNYpZJWmISFrjxjvzBgOxL5KrYEIabEWscLWyo2uriQvrB0kZHyI9c7CxjPvjAppCW+wVQEX3mYJfefJfPLCBCAhc4YY7wxg7YF6LqLZTcJ9ylaxXJjzMBLoIBX6nkJC5goxM5sOej4PdJ9P+TPCNdU7WBjpuhV7h5+RFAMJmVhY3dkyANc7vc4YziYESNAIPqp3MA/MeTkFwMLIZR21LsxdSMjcha0KSAfgPI4kQSNaI17AABZGpvtytwqpISHzBBZuLmx+OVcpErSOjXsCth1MwDLlNcr3ICHzBtZRIx3OFqE7cAha1AM0KdARqNgIlLwtVsCKwAQsQ16jfBcSMilggrYMrso1HETNBmLm0yoBX8NWBVRsEDsLCbA82EISMO8hIZMS1sAxHa4mBByEjWceGhXW6htrEasBK1vlqg7MAUvks2Q+lVNIAAmZHLgraMZwJmYx8yjs1BNlq9hLXPgIkIDJBgmZnLCSjYUQk0Nz4PDSIqfT5IAWMee2CJg47wtw5MCAdSRg8kBCpgQtkwIz4WqW04ExHIicBkRMZ/8S6mEtYusfy1aJKWBtTQ6Y95Uhj2GEAxIyJWkp20iDqzq01pCoKY/n4gWwRd3LqIxCOUjI1IKt41wIsXk0B61FrfMECj+lxJzL6r48Ey9H/iuDClmVh4RMbVjYuRAs7HQ/0x8xjQla2AQq53AXWxVweQcTr4oNYksm2rMeLPeVIa1xhDuQkGkJ5qWlQWw9WnsCY1tELWwCzYDyUb2jRbzEzza2pwisKwp5XxqBhEyLsFzazOaXZ6IGMGEzJTNxMyV1vL5p1qKWcNGc441wAUy81oGJV7Y0BhJSQUKmdVjoORNAKrwRNQempOZXcsu/vpBnM+c2C1dOs3DlulMeIYRDvDKpmaG2ISHTE209tVSILeVwhTG8rah1bvbctObBWYuA+iL2r8Pbqi/yJDHvjBwAmSDPS1eQkOkZtoLAIWrC+3N6iymJCVxQXyCwOe/mH8GdXHBX+BzC5KCxinlUDqp3sH+l8a6EqAITLofnVSjXgwj5ICHzFZi3ltrqJZ+w6RuHcLEXeV0+AQmZr8KEbQRahG0EpApF9UUOgGww4com4fJNSMg6EmziYES7ly/VaGwHE61CMNHKVNUaQjFIyAhHrs3hwcW1emlR5LY3/5sJoBIO4aLcVoeGhIxwTkuIiuZ/I3i+RvPX7ublqsCEqDXZYALV+utKCgkJZ5CQEQShe/4/v9PQbJgHUocAAAAASUVORK5CYII=",
  label:{
        show:false
      },
      "children": [ 
                {
              "name": "Resources",
              "description":"",
              "have_pub": "",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":""
        
            }]}];
var glossary = [
  {
    "name": "DIAL4U",
    "description": "Welcome to the DIAL4U project guide! This is an interactive methodological guide that will accompany the user in the multimodal teaching-learning of languages, as well as promote students' autonomous learning. If you want to know how to use this guide, click HERE (INSERT LINK).",
    "have_pub": "",
    "have_pod": "",
    "have_img": "",
    "have_video": "",
    "have_profile": "",
    symbolSize: 60,
symbol: "image://data:image/png;base64,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",
label:{
      show:false
    },
    "children": [
            {
              "name": "Glossary",
              "description":"",
              "have_pub": "",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":"",
              "children":[
                {"name": "Assessment",
              "description":"the process of testing students and making a judgement about their knowledge, ability or progress ",
              "have_pub": "1",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":"",
            "publication":[{
              "link":"https://www.oxfordlearnersdictionaries.com/definition/english/assessment?q=assessment",
              "title": "Oxford Learners Dictionary",
              "year": ""
            }]},
            {"name": "Blended learning",
              "description":"a way of studying a subject that combines being taught in class with the use of different technologies, including learning over the internet",
              "have_pub": "1",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":"",
            "publication":[{
              "link":"https://www.oxfordlearnersdictionaries.com/definition/english/blended-learning?q=Blended+learning",
              "title": "Oxford Learners Dictionary",
              "year": ""
            }]},
            {"name": "CEFR",
              "description":"Common European Framework of Reference for languages (a description of the language abilities of students at different levels of learning that can be used to help different countries to compare standards and create teaching programmes)",
              "have_pub": "",
              "have_pod": "",
              "have_img": "",
              "have_video": "",
              "have_profile":""
           },
           {"name": "Cognitive strategies",
           "description":"Cognitive strategies are one type of learning strategy that learners use in order to learn more successfully. These include repetition, organising new language, summarising meaning, guessing meaning from context, using imagery for memorisation. ()",
           "have_pub": "1",
           "have_pod": "",
           "have_img": "",
           "have_video": "",
           "have_profile":"",
         "publication":[{
           "link":"https://www.teachingenglish.org.uk/article/cognitive-strategies",
           "title": "Cognitive strategies - British Council",
           "year": ""
         }]},
         {"name": "Digital methodologies",
         "description":"Digital methods (i.e. use of online and digital technologies to collect and analyse research data), have been utilised by a variety of disciplines. In an era in which social life is increasingly played out online, such methods offer different ways of asking new questions and generating new data.",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.ncrm.ac.uk/research/NMI/2012/digitalmethods.php",
         "title": "Digital methods as mainstream methodology",
         "year": ""
        }]},
        {"name": "Expression",
         "description":"a word or phrase",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/expression?q=Expression",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Flipped Classroom",
         "description":"a method of teaching in which students study new material at home, for example with videos over the internet, and then discuss and practise it with teachers in class, instead of the usual method where teachers present new material in school and students practise at home",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/flipped-classroom?q=flipped+classroom",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Gamification",
         "description":"the use of elements of game-playing in another activity, usually in order to make that activity more interesting",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/gamification?q=gamification",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Hybrid Teaching",
         "description":"Hybrid teaching will consist of a mixture of digital and on-campus activities, where students may be able to attend on-campus sessions, digital sessions in the same time zone, or digital sessions in a different time zone ",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.ed.ac.uk/information-services/learning-technology/more/teaching-continuity/teaching-continuity-overview",
         "title": "What is hybrid teaching?",
         "year": "2021"
        }]},
        {"name": "Informal teaching",
         "description":"Informal education is a general term for education that can occur outside of a structured curriculum. Informal education encompasses student interests within a curriculum in a regular classroom, but is not limited to that setting. It works through conversation, and the exploration and enlargement of experience.",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.coe.int/en/web/european-youth-foundation/definitions",
         "title": "Non-formal education",
         "year": ""
        }]},
        {"name": "Interaction",
         "description":"an occasion when two or more people or things communicate with or react to each other.",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://dictionary.cambridge.org/dictionary/english-portuguese/interaction?q=Interaction",
         "title": "Cambridge Dictionary",
         "year": ""
        }]},
        {"name": "Mediation",
         "description":"attempts to end a problem between two or more people or groups who disagree by talking to them and trying to find things that everyone can agree on.",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/mediation?q=mediation",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Metacognitive strategies",
         "description":"of or relating to metacognition (= knowledge and understanding of your own thinking)",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://dictionary.cambridge.org/dictionary/english/metacognitive",
         "title": "Cambridge Dictionary",
         "year": ""
        }]},
        {"name": "MOOC",
         "description":"a course of study that is made available over the internet, usually without charge, to a very large number of people (the abbreviation for ‘massive open online course’)",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/mooc?q=MOOC",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Multimodal",
         "description":"having or involving several modes, modalities, or maxima",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.merriam-webster.com/dictionary/multimodal",
         "title": "Merriam-Webster",
         "year": ""
        }]},
        {"name": "Online teaching",
         "description":"Online teaching is the process of educating others via the internet. Various methods can be used, such as one-on-one video calls, group video calls, and webinars. You can start teaching from any location (home, coffee shop, co-working space) and enroll students from various backgrounds and geographical areas.",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oberlo.com/blog/online-teaching",
         "title": "ONLINE TEACHING: EVERYTHING YOU NEED TO KNOW IN 2022",
         "year": "2022"
        }]},
        {"name": "Skills",
         "description":"the ability to do something well",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/skill?q=skill",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Understanding",
         "description":"the knowledge that somebody has about a particular subject or situation",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/understanding_1?q=understanding",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]},
        {"name": "Virtual reality",
         "description":"a set of images and sounds, produced by a computer, that seem to represent a place or a situation that a person can take part in",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://dictionary.cambridge.org/dictionary/english/virtual-reality",
         "title": "Cambridge Dictionary",
         "year": ""
        }]},
        {"name": "Webinar",
         "description":"a presentation or seminar (= a meeting for discussion or training) that is conducted over the internet",			
         "have_pub": "1",
         "have_pod": "",
         "have_img": "",
         "have_video": "",
         "have_profile":"",
        "publication":[{
         "link":"https://www.oxfordlearnersdictionaries.com/definition/english/webinar?q=webinar",
         "title": "Oxford Learners Dictionary",
         "year": ""
        }]}
              ] 
            }]}];
var pod = [
    {
      "name": "DIAL4U",
      "description": "Welcome to the DIAL4U project guide! This is an interactive methodological guide that will accompany the user in the multimodal teaching-learning of languages, as well as promote students' autonomous learning. If you want to know how to use this guide, click HERE (INSERT LINK).",
      "have_pub": "",
      "have_pod": "",
      "have_img": "",
      "have_video": "",
      "have_profile": "",
      symbolSize: 60,
  symbol: "image://data:image/png;base64,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",
  label:{
        show:false
      },
      "children": [
            {"name": "Podcast",
            "description":"",			
            "have_pub": "1",
            "have_pod": "",
            "have_img": "",
            "have_video": "",
            "have_profile":"",
            label:{
              show:false
            },
            "children":[
              {"name": "Alberto Andujar",
              "description": "Alberto Andujar is lecturer at the University of Almería (Spain). He specializes into second language learning and technology, computer-assisted language and mobile-assisted language learning. He is also author of different international research articles in these fields and is currently developing projects into the use of virtual reality for second language learning.",
              "have_pub": "",
              "have_pod": "1",
              "have_img": "",
              "have_video": "",
              "have_profile": "1",
              "podcast":
              [
                {
                    "link": "https://anchor.fm/dial4u/embed/episodes/Alberto-Andujar-e1qllqh",
                    "title": "Alberto Andujar",
                    "image": "",
                    "description": ""
                } ],
                "profile":[{
                  "photo": "Podcast/andujar.png",
                  "job": "Lectur",
                  "university": "University of Almería - Spain",
                  "orcid":"https://orcid.org/0000-0002-8865-9509",
                  "link": "https://www.researchgate.net/profile/Alberto-Andujar"
                }]
           },
           {"name": "Aurélie Laduguie",
           "description": "",
           "have_pub": "",
           "have_pod": "1",
           "have_img": "",
           "have_video": "1",
           "have_profile": "1",
           "podcast":
           [
             {
                 "link": "https://anchor.fm/dial4u/embed/episodes/Aurlie-Laduguie-e1qlm4q/a-a8rqdb0",
                 "title": "Aurélie Laduguie",
                 "image": "Podcast/aurelie.png",
                 "description": ""
             } ],
             "profile":[{
               "photo": "Podcast/aurelie.png",
               "job": "Teacher",
               "university": " Université de Nouvelle-Calédonie - France",
               "orcid":"aurelie.lauduguie@unc.nc",
               "link": "https://unc.nc/formation/formation-des-enseignants/linstitut-national-du-professorat-et-de-leducation/"
             }],
             "video":[{
              "link": "https://www.youtube.com/embed/G2GDnIl_G6E",
                "title": "",
                "description": "In this episode, Aurélie Laduguie presents how she uses the WooClap app to improve interactions during class."
              }]
             },
             {"name": "Carolina Girón",
             "description": "Carolina Girón García presents her class pedagogical on legal English through technological resources support at Jaume I University.",
             "have_pub": "",
             "have_pod": "1",
             "have_img": "",
             "have_video": "",
             "have_profile": "1",
             "podcast":
             [
               {
                   "link": "https://anchor.fm/dial4u/embed/episodes/Carolina-Girn-Garca-e1qmb3m/a-a8rqdb0",
                   "title": "Carolina Girón García",
                   "image": "",
                   "description": ""
               } ],
               "profile":[{
                 "photo": "Podcast/carolina.png",
                 "job": "Associate Professor",
                 "university": "Universitat Jaume I, Spain",
                 "orcid":"https://orcid.org/0000-0002-2377-4039",
                 "link": "https://www.uji.es/departaments/com/base/estructura/personal/&url=/departaments/com/base/estructura/personal/&p_profesor=142601"
               }]
               },
               {"name": "Elena Baynat",
               "description": "",
               "have_pub": "",
               "have_pod": "1",
               "have_img": "",
               "have_video": "",
               "have_profile": "1",
               "podcast":
               [
                 {
                     "link": "https://anchor.fm/dial4u/embed/episodes/Elena-Baynat-e1qgegv/a-a8rq8et",
                     "title": "Elena Baynat",
                     "image": "",
                     "description": "In this episode, Elena Baynat introduced how she uses Facebook as a didactic tool to assist in language teaching."
                 } ],
                 "profile":[{
                   "photo": "Podcast/elena.png",
                   "job": "Teacher",
                   "university": "Universitat de València - Spain",
                   "orcid":"",
                   "link": "https://uv.academia.edu/M%C2%AAElenaBaynatMonreal/CurriculumVitae"
                 }]
                 },
                 {"name": "Elena Martín Monje",
                 "description": "Elena Martín Monje presents her research on the application of technology to English language learning, focusing on the use of Open Educational Resources and MOOCs (massive open online courses).",
                 "have_pub": "",
                 "have_pod": "1",
                 "have_img": "",
                 "have_video": "",
                 "have_profile": "1",
                 "podcast":
                 [
                   {
                       "link": "https://anchor.fm/dial4u/embed/episodes/Elena-Martn-Monje-e1qmce0" ,
                       "title": "Elena Martín Monje",
                       "image": "",
                       "description": ""
                   } ],
                   "profile":[{
                     "photo": "Podcast/elena_monje.png",
                     "job": "Professor",
                     "university": "Universidad Nacional de Educación a Distancia - Spain",
                     "orcid":"",
                     "link": "https://www.uned.es/universidad/docentes/filologia/elena-maria-martin-monje.html"
                   }]
                   },
                   {"name": "Giedrė Valūnaitė Oleškevičienė",
                   "description": "Professor Giedrė Valūnaitė Oleškevičienė presents her research in language teaching and learning at the University of Mykolas Romeris.",
                   "have_pub": "",
                   "have_pod": "1",
                   "have_img": "",
                   "have_video": "",
                   "have_profile": "1",
                   "podcast":
                   [
                     {
                         "link": "https://anchor.fm/dial4u/embed/episodes/Giedr-Valnait-Olekeviien-e1qme8e" ,
                         "title": "Giedrė Valūnaitė Oleškevičienė",
                         "image": "",
                         "description": ""
                     } ],
                     "profile":[{
                       "photo": "Podcast/giedre.png",
                       "job": "Professor",
                       "university": "Mykolas Romeris University - Litany",
                       "orcid":"",
                       "link": "https://lt.linkedin.com/in/giedre-valunaite-oleskevicien%C4%97-37315032"
                     }]
                     },
                     {"name": "Gladys Villegas-Paredes",
                     "description": "Gladys Villegas-Paredes es profesora en la Facultad de Educación de la Universidad Internacional de la Rioja (UNIR). Imparte docencia en el Máster universitario en enseñanza del español como lengua extranjera, y Máster universitario en didáctica de la lengua en Educación Infantil y Primaria. Es Doctora en Filología Española por la Universidad Complutense de Madrid (UCM); Magister en Enseñanza del Español como Lengua Extranjera (UCM) y Máster en promoción de la literatura infantil y juvenil por la Universidad de Castilla La Mancha (UCLM). Es miembro del grupo de innovación educativa SLATES (Second Life Aplicado a Tutorías en Educación Superior) de la Universidad de Valencia. Coordina y es investigadora principal (IP) del Proyecto de innovación docente COINELE (Proyecto de colaboración interuniversitario: las competencias interculturales con mediación tecnológica en el proceso de enseñanza-aprendizaje del español como LE - 2020-2021), así como del proyecto TACIDELE: (telecolaboración para la adquisición de competencias interculturales y digitales en ELE-2021-2022). Su acción investigadora se centra en la pragmática intercultural; interculturalidad y literatura en ELE; interculturalidad y formación del profesorado, telecolaboración en ELE.",
                     "have_pub": "",
                     "have_pod": "1",
                     "have_img": "",
                     "have_video": "",
                     "have_profile": "1",
                     "podcast":
                     [
                       {
                           "link": "https://anchor.fm/dial4u/embed/episodes/Gladys-Villegas-Paredes-e1qmf8i" ,
                           "title": "Gladys Villegas-Paredes",
                           "image": "",
                           "description": ""
                       } ],
                       "profile":[{
                         "photo": "Podcast/gladys.png",
                         "job": "Professor",
                         "university": "Universidad Internacional de la Rioja - Spain",
                         "orcid":"https://orcid.org/0000-0003-3301-8963",
                         "link": "https://orcid.org/0000-0003-3301-8963"
                       }]
                       },
                       {"name": "Jorge Arús Hita",
                       "description": "In this episode, Jorge Arús Hita talks about using Moodle in his classes at the Complutense University of Madrid",
                       "have_pub": "1",
                       "have_pod": "1",
                       "have_img": "",
                       "have_video": "",
                       "have_profile": "1",
                       "publication":[{
                        "link":" https://www.researchgate.net/profile/Jorge-Arus-Hita",
                        "title": "Research Gate",
                        "year": ""
                       },
                       {"link":"https://www.linkedin.com/in/jorge-ar%C3%BAs-hita-58575764/",
                       "title": "Linkedin",
                       "year":""}],
                       "podcast":
                       [{
                             "link":"https://anchor.fm/dial4u/embed/episodes/Jorge-Ars-Hita-e1qmg2d" ,
                             "title": "Jorge Arús Hita",
                             "image": "",
                             "description": ""
                         } ],
                         "profile":[{
                           "photo": "Podcast/jorge.png",
                           "job": "Professor",
                           "university": "Complutense University of Madrid - Spain",
                           "orcid":"",
                           "link": "https://ucm.academia.edu/JorgeAr%C3%BAsHita3"
                         }]
                         },
                         {"name": "Jorge Martí-Contreras",
                         "description": "Jorge Martí Contreras es Doctor en Lengua Española (enlace a la Tesis Doctoral) por la Universitat de València, Licenciado en Filología Hispánica y Licenciado en Comunicación Audiovisual.",
                         "have_pub": "",
                         "have_pod": "1",
                         "have_img": "",
                         "have_video": "",
                         "have_profile": "1",
                         "podcast":
                         [{
                               "link":"https://anchor.fm/dial4u/embed/episodes/Jorge-Mart-Contreras-e1qmgfk" ,
                               "title": "Jorge Martí-Contreras",
                               "image": "",
                               "description": ""
                           } ],
                           "profile":[{
                             "photo": "Podcast/jorge_marti.jpeg",
                             "job": "Associate Professor",
                             "university": "Universitat Jaume I - Spain",
                             "orcid":"https://orcid.org/0000-0002-1619-1839",
                             "link": "https://orcid.org/0000-0002-1619-1839"
                           }]
                           },
                           {"name": "Manuel Bellmunt Serrano",
                         "description": "",
                         "have_pub": "",
                         "have_pod": "1",
                         "have_img": "",
                         "have_video": "",
                         "have_profile": "1",
                         "podcast":
                         [{
                               "link":"https://anchor.fm/dial4u/embed/episodes/Manuel-Bellmunt-Serrano-e1qmgur" ,
                               "title": "Manuel Bellmunt Serrano",
                               "image": "",
                               "description": ""
                           } ],
                           "profile":[{
                             "photo": "Podcast/manuel.png",
                             "job": "Assistant Professor",
                             "university": "Universitat Jaume I - Spain",
                             "orcid":"",
                             "link": "https://www.uji.es/departaments/ang/base/estructura/personal/&url=/departaments/ang/base/estructura/personal&p_departamento=1882&p_profesor=89446"
                           }]
                           },
                           {"name": "María Dolores Castrillo",
                           "description": "María Dolores Castrillo holds a Senior Lecturer position at UNED, teaching and researching in the areas of German Studies and CALL (Computer-Assisted Language Learning). Member of the ATLAS (Applying Technology to LAnguageS) group, her current research interests include MOOCs (Massive Open Online Courses), Open Educational Resources (OERs), Computer-Mediated Communication, Mobile Assisted Language Learning (MALL) and Social Networks for Language Learning. In 2016 she founded the GLOBE Innovation Group (Group for Languages in Open and Blended Environments) that has obtained 4 financed innovation projects related to open teaching and learning and data-driven language learning. She has won two prizes related to Open Learning: Best Open CourseWare (2008) and best MOOC (2013), both awarded by the Spanish Ministry of Education, Universia (Banco Santander) and Telefónica. Also, her research practice has received official recognition. In 2021 she was distinguished with the award for the best CALICO research paper, also her PhD thesis was awarded the Prize for Doctoral Excellence. She has participated in 8 competitive European and national research projects and 5 projects based on art. 83 LOU, for the transfer of R&D to the productive sector, the last of which, as the main researcher, carried out under an agreement between the UNED and Telefónica Educación Digital.",
                           "have_pub": "",
                           "have_pod": "1",
                           "have_img": "",
                           "have_video": "",
                           "have_profile": "1",
                           "podcast":
                           [{
                                 "link":"https://anchor.fm/dial4u/embed/episodes/Mara-Dolores-Castrillo-e1qmh6r" ,
                                 "title": "María Dolores Castrillo",
                                 "image": "",
                                 "description": ""
                             } ],
                             "profile":[{
                               "photo": "Podcast/maria.png",
                               "job": "Senior Lectur",
                               "university": "Universitat Jaume I - Spain",
                               "orcid":"https://orcid.org/0000-0002-0713-2351",
                               "link": "https://www.uned.es/universidad/docentes/filologia/maria-dolores-castrillo-de-larreta-azelain.html"
                             }]
                             },
                             {"name": "Mercedes Sanz-Gil",
                             "description": "",
                             "have_pub": "",
                             "have_pod": "1",
                             "have_img": "",
                             "have_video": "",
                             "have_profile": "1",
                             "podcast":
                             [{
                                   "link":"https://anchor.fm/dial4u/embed/episodes/Mercedes-Sanz-Gil-e1qmhg5" ,
                                   "title": "Mercedes Sanz-Gil",
                                   "image": "",
                                   "description": ""
                               } ],
                               "profile":[{
                                 "photo": "Podcast/mercedes.png",
                                 "job": "Professor",
                                 "university": "Universitat Jaume I - Spain",
                                 "orcid":"https://orcid.org/0000-0003-2163-9439",
                                 "link": "https://www.uji.es/departaments/fil/base/estructura/personal?p_departamento=1883&p_profesor=91812 "
                               }]
                               },
                               {"name": "Merche Marqués",
                             "description": "Merche Marqués, professor in the area of computer science and artificial intelligence, presents her experience with the flipped classroom at the Universitat Jaume I de Castelló.",
                             "have_pub": "",
                             "have_pod": "1",
                             "have_img": "",
                             "have_video": "",
                             "have_profile": "1",
                             "podcast":
                             [{
                                   "link":"https://anchor.fm/dial4u/embed/episodes/Merche-Marqus-e1qmhod",
                                   "title": "Merche Marqués",
                                   "image": "",
                                   "description": ""
                               } ],
                               "profile":[{
                                 "photo": "Podcast/merche.png",
                                 "job": "Professor",
                                 "university": "Universitat Jaume I - Spain",
                                 "orcid":"",
                                 "link": "https://www.uji.es/departaments/icc/base/estructura/personal?p_departamento=1442&p_profesor=65129"
                               }]
                               }
                        ]
        }]}];
option = {
          
          
          toolbox: {
            show: true,
            feature: {
              restore: {}
            }
          },
          legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: [function (data) {    
              return [
                Object.values(data)]} ]
                 ,
              /*{
                name: 'Podcast',
                data: 'dial4u',
                icon: 'rectangle'
              },
              {
                name: 'Glossary',
                data: 'dial4u',

                icon: 'rectangle'
              }
            ],*/
            borderColor: '#c23531'
          },
         
          
          
	
     
        series: [
          {
            type: 'tree',
            data:'dial4u',
            selectedMode: true,
            layout: 'radial',
            symbol: 'circle',
            width:'600px',
            right:'20%',
            top: '0.01%',
            roam: true, // new for sankey
     
            symbolSize: 6,
            initialTreeDepth: 3,
            animationDurationUpdate: 750,
      
            /*tooltip: {
              
              
              formatter: function (param) {
                  
                return [
                   param.data.name  
                   //+ '<hr size=1 style="margin: 3px 0, ">'
                  
                  // param.data.definition + '<br/ style="margin: 3px 0">',
                ].join('');
               
              }
            },*/
            
            itemStyle: {
              color: "#006AF5",
              symbolSize: 6,
              shadowColor: "#F2F0D8",
              shadowBlur: 4
              
            },
            lineStyle: {
              color:  '#E8A60C',
              width: 0.8
            },
            
            label:{
              show: true,
              distance: 1,
              color: "#A8A8A8",
              fontWeight: 'bold',
              fontSize: 10,
              width:100,
              overflow: 'none'
            },
            labelLayout:{
              moverOverlap: 'shiftY',
              //draggable: 'true' 

            },
            emphasis: {
              focus: 'descendant',
              
              label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 10,
                  color:'#6F71FC',
              }},
            selectedMode: true,
            leaves: {
              zoom: 1,
              label: {
               show:true,
                fontWeight: 'lighter',
                fontSize: 12,
                distance: 5,
                //position: 'outside'
              },
          itemStyle:{
              //color: '#fcd0cf',
              color: '#197DFF',
  
          },
          emphasis: {
              focus: 'ancestor',
              
              label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 10,
                  color:'#6F71FC',
              },
              lineStyle:{
                  color: '#FFCC00',
                  width: 1
              }
              
          }},
          /*labelLayout:{
              hideOverlap: false, 
              //draggable: true
          },
          labelLayout(params) {
              return {
                  x: params.rect.x + 10,
                  y: params.rect.y + params.rect.height / 2,
                  verticalAlign: 'middle',
                  align: 'left'
              }
          },
          labelLayout(params) {
              return {
                  fontSize: Math.max(params.rect.width / 10, 10)
              };
          },*/
          
            
          
  }]
  
    };
  
      if (option && typeof option === 'object') {
        myChart.setOption(option);

   

      }
      
  
      window.addEventListener('resize', myChart.resize);
   
    let node = document.getElementById('nodeName');
    let descricao = document.getElementById('description');
  

  const publicationContainer = document.querySelector('.publication');
  const podcastContainer = document.querySelector('.podcast');
  const videoContainer = document.querySelector('.video');
  const imageContainer = document.querySelector('.image');
  const profileContainer = document.querySelector('.profile');
  
  

   myChart.on('click', function (params, myChart) {
    publicationContainer.innerHTML=''; 
    podcastContainer.innerHTML='';
    videoContainer.innerHTML='';
    imageContainer.innerHTML='',
    profileContainer.innerHTML='',

        node.textContent = `${params.data.name}`;
        //innerHtml porque conserva as propriedades do html
        descricao.innerHTML =`${params.data.description}`;
        //PERFIL
        if(`${params.data.have_profile}`=="1"){
          let profile = `
          <div class="col" style="margin:4px">
          ${params.data.profile.map(profile =>
            {
            return `
                  <div class="container">
        
                <div class="row justify-content-start" style="margin-bottom:12px">
                <div class="col-sm-4" style="padding-left:0px" >
                <img src="${profile.photo}" class="img-thumbnail rounded float-start" style="border:0px" alt="">
                  </div>
              
                <div class="col-md-8" style="padding:0%" >
                  <p class="text-secondary" style="margin:4px; ; margin-top:2%; font-size:.95em"><strong>${profile.job}</strong></p>
                  <p class="text-gray-dark" style="margin:4px; margin-top: 2%; font-size: .875em">${profile.university}</p>
                  <p class="card-text " style="transform: rotate(0); margin:4px;  margin-top: 2%; font-size: .875em">
      <a href="${profile.orcid}" class="stretched-link" style="color:#9F3DF5; font-size:.875em">${profile.orcid}</a> 
    </p>
                 
                
                  <a role="button" class="btn btn-outline btn-sm mt-4" style="transform: rotate(0);  color:#9F3DF5; border-color:#C388F7" href="${profile.link}">Profile</a>
              
                  <!-- p class="text-bottom " style="transform: rotate(0); padding-top:25%; margin-left:12px"
              <a href="${profile.link}" class="stretched-link" style="color:#9F3DF5;  font-size:.975em">Profile</a> 
            </p-->
                  </div>
                   </div>
                    </div>
                    `}).join('')}
                      </div> 
                      `;
        profileContainer.insertAdjacentHTML('afterbegin', profile);
          } else{};
        //IMAGEM
        if (`${params.data.have_img}` == "1") {
          let images =`
          <div class="col" style="margin:20px">
          <p class="text-muted fw-bold ">Image</p>
                ${params.data.image.map(image =>
                  {
                  return `
                  <div class="container">
        
                <div class="row justify-content-start" style="margin-bottom:12px">
                <div class="col-sm-4" style="padding-left:0px" >
                <img src="${image.link}" class="img-thumbnail rounded float-start" style="border:0px" alt="${image.title}">
                  </div>
              
                <div class="col-sm-6" style="min-width:65%">
                  <p class="text-gray-dark" style="margin:4px; margin-left:12px; margin-top:2%; font-size:.95em"><strong>${image.title}</strong></p>
                  <p class="text-gray-dark"style="margin:4px; margin-left:12px; margin-top: 2%; font-size: .875em">${image.description}</p>
                  <p class="text-end bottom " style="transform: rotate(0);margin-top:15%; margin-right:4px">
              <a href="${image.perfil}" class="stretched-link" style="color:#9F3DF5;  font-size:.975em">Read more</a> 
            </p>
                  </div>
                  
                   </div>
                    </div>
                    `}).join('')}
                      </div> 
                      `;
        imageContainer.insertAdjacentHTML('afterbegin', images);
          } else{};
      //PUBLICAÇÃO
        if (`${params.data.have_pub}` == "1") {
        let markup= `
        <div class="col" style="margin:20px">
        <p class="text-secondary fw-bold" >PUBLICATIONS</p>
        <div class="container bg-opacity-10 bg-light">
        <div class="row justify-content-between">
       
    ${params.data.publication.map(pub =>
    {
    return `
   
    <div class="col-sm-8" style="padding:0px">
    <div class="pb-3 mb-0 small lh-sm " >
      <p style="margin-bottom: 4px"><strong class="text-secondary" style="font-size:.975em">${pub.year}</strong></p> 
       <p class="text-dark fs-6" style="margin-bottom: 6px">${pub.title} </p> 
       </div>
      </div>
      <div class="col-sm-2" style="padding:0px" >
      <p class="card-text " style="transform: rotate(0); margin-top:15%">
      <a href="${pub.link}" class="stretched-link" style="color:#9F3DF5; font-size:.975em">Read more</a> 
    </p>
      <!--p><a class="stretched-link" href="${pub.link}" target="_blank">Read more</a><p-->
      </div> `;
      }).join('')}
      </div>
      </div>
      `;
      publicationContainer.insertAdjacentHTML('afterbegin', markup);
    };
    //PODCAST
    if (`${params.data.have_pod}` == "1") {
let podcasts= `
<div class="col" style="margin:20px">
<p class="text-muted fw-semibold ">Podcasts</p>
  <div class="container" style="padding-left:0px">
  ${params.data.podcast.map(pod =>
    {
    return `
        <iframe src="${pod.link}" height="102px" width="500px" frameborder="0" scrolling="no" right-padding="100px" color:"#fffff"></iframe>
        <!--div class="row justify-content-start">
            <div class="col-sm-4" style="padding:0px; max-width: 100px; ">
              <img src="${pod.image}" class="img-thumbnail" alt="..." width="100" height="125" style="border:0px">
            </div>
            <div class="col-sm-6" style="min-width:65%">
              <p class="fw-semibold text-muted" style="margin-bottom:4px">${pod.title}</p>
              <p style="font-size:10px">${pod.description}</p>
              <a href="${pod.link}" target="_blank" class="stretched-link">Listen</a-->
              
            </div>
            `;
      }).join('')}
        </div>
        </div>
`;
podcastContainer.insertAdjacentHTML('afterbegin', podcasts);
} else{};
//VIDEO
  if (`${params.data.have_video}` == "1") {

let videos=`
<div class="col" style="margin:20px">
<p class="text-muted fw-semibold ">Videos</p>
        <div class="container ">
        <div class="row justify-content-start">
        <div class="col-sm-4" style="padding:0px; max-width: 200px; ">
        ${params.data.video.map(video =>
          {
          return `
        <iframe width="160" height="100" src="${video.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-sm-6" style="min-width:65%">
          <p class="text-dark fs-6" style="margin-left:12px; margin-top:5%;"> ${video.title}</p>
          <p class="text-gray-dark"style="margin-left: 12px; margin-top: 5%; font-size: .875em">${video.description}<p>
          </div>
          `
        }).join('')}
        </div>
        </div>
        
        `;
        videoContainer.insertAdjacentHTML('afterbegin', videos);

  } else{};

 


        }); 


 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "600px";
  document.getElementById("main").style.marginLeft = "600px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

