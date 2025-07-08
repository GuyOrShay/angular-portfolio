import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }


  about2 = `Software Developer with 5+ years of experience .
  Experienced in designing and implementing microservices-based architectures using C#, NestJS, RabbitMQ, Redis, PostgreSQL, MongoDB, and Angular .
  Proficient in developing complex web applications across the stack with a focus on performance, maintainability, and user experience .
  Strong background in software engineering principles, agile methodologies, and team collaboration in dynamic environments.`

  about = "Passionate Software Developer with a strong background in both military and commercial sectors. I enjoy building impactful applications, improving performance, and continuously evolving my technical and soft skills. "

  resumeurl = "https://drive.google.com/uc?export=download&id=1wxhVkQ7zO4lJyASSgYBKOQVK7Ysr9peI"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': '.NET',
      'progress': '85%'
    },
    {
      'id': '4',
      'skill': 'PostgreSQL ,MONOGO',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Docker ,Kubernetes',
      'progress': '85%'
    },
    {
      'id': '6',
      'skill': 'PYTHON',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      id: '1',
      from_to_year: 'Oct 2022 - Jun 2025',
      education: "Bachelor's Degree",
      stream: 'B.Sc in Computer Science',
      institution: 'The College of Management Academic Studies',
      info: `Pursuing a Bachelor's degree in Computer Science with a strong focus on software development, algorithms, data structures, and modern technologies.
  Engaged in advanced coursework and academic projects while balancing practical development experience.`
    },
    {
      id: '2',
      from_to_year: 'Oct 2021 - Jun 2022',
      education: "Bachelor's Degree",
      stream: 'Computer Science',
      institution: 'The Open University of Israel',
      info: `Completed a foundational year in Computer Science covering key areas such as programming, mathematics, and theoretical computer science.
  Built a strong academic base and transitioned to a full B.Sc program at The College of Management.`
    },
    {
      id: '3',
      from_to_year: 'Sep 2018 - Jun 2020',
      education: 'Practical Engineering',
      stream: 'Computer Software Engineering',
      institution: 'ORT Colleges',
      info: `Completed a Practical Engineering degree focused on software engineering principles, programming languages, and system design.
  Gained hands-on experience in development practices, teamwork, and software lifecycle methodologies.`
    }
  ];



  experienceData: any = [
    {
      id: 3,
      company: 'InfraEdge IL',
      location: 'Ramat Gan, Tel Aviv District, Israel',
      timeline: 'Jul 2023 to Present',
      role: 'Full Stack Developer',
      work: `Working in a hybrid model as a Full Stack Developer.
  Architecting, developing, testing, and deploying systems using modern microservices architecture .
  Contributing to the full development lifecycle and collaborating across teams .
  Utilizing technologies such as Angular, DotNet Core, PostgreSQL, and Docker in production environments.`
    },
    {
      id: 2,
      company: 'Israeli Air Force',
      location: 'Israel',
      timeline: 'Jun 2020 to Jul 2023',
      role: 'Full Stack Developer',
      work: `Designed and implemented a real-time system for defending sites against aerial threats .
  Led backend development using NestJS, Node.js, PostgreSQL, and MongoDB in a microservices architecture .
  Built complex, multithreaded applications for analyzing real-time hardware data and user inspection tools, Participated in monthly production deployments, following Agile methodology . 
  Worked with Angular 13, Docker, and Kafka to deliver rich UI experiences and robust backend services.`
    },
    {
      id: 1,
      company: 'Israeli Air Force',
      location: 'Israel',
      timeline: 'Jul 2019 to Jun 2020',
      role: 'Software Developer (Intern)',
      work: `Completed a 1-year internship as part of the "Projectants" program while in college .
  Built an Identification Friend or Foe (IFF) system using Angular, DotNet Core, Embedded C, and MongoDB .
  Gained hands-on experience integrating web technologies with embedded systems and backend logic.`
    }
  ];


  extraCircularInfo: any = [
    {
      id: 1,
      title: 'YouTube',
      description: '',
      img: 'assets/images/guyorshay_youtube.png',
      url: 'https://www.youtube.com/@%D7%92%D7%99%D7%90%D7%90%D7%95%D7%A8-%D7%A9%D7%99'
    },
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/guyorshay_github.png',
      url: 'https://github.com/GuyOrShay/'
    },
    {
      id: 1,
      title: 'Linkdin',
      description: '',
      img: 'assets/images/guyorshay_linkdin.png',
      url: 'https://www.linkedin.com/in/guy-or-shay-a2947722b/'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.experienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
