import { IconType } from "react-icons";
import { FaJava, FaPython, FaUbuntu, FaGolang, FaReact, FaNpm, FaBootstrap, FaMarkdown, FaHtml5, FaCss3, FaGitAlt, FaAws, FaDigitalOcean, FaDocker, FaAngular } from "react-icons/fa6";
import { SiGnubash, SiJavascript, SiFlask, SiDjango, SiMysql, SiSqlite, SiRedux, SiPostgresql, SiDart, SiRedis, SiMongodb, SiElasticsearch, SiNeo4J, SiNginx, SiPostman } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoFlutter, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

interface IProgrammingLanguage {
    name: string;
    icon: IconType;
}

const programmingLanguages: IProgrammingLanguage[] = [
  {
    name: "Java",
    icon: FaJava
  },
  {
    name: "Python",
    icon: FaPython
  },
  {
    name: "Ubuntu",
    icon: FaUbuntu
  },
  {
    name: "Golang",
    icon: FaGolang
  },
  {
    name: "ReactJS",
    icon: FaReact
  },
  {
    name: "NPM",
    icon: FaNpm
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap
  },
  {
    name: "Markdown",
    icon: FaMarkdown
  },
  {
    name: "HTML",
    icon: FaHtml5
  },
  {
    name: "CSS3",
    icon: FaCss3
  },
  {
    name: "Javascript",
    icon: SiJavascript
  },
  {
    name: "Bash",
    icon: SiGnubash
  },
  {
    name: "Flask",
    icon: SiFlask
  },
  {
    name: "DJango",
    icon: SiDjango
  },
  {
    name: "MySQL",
    icon: SiMysql
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql
  },
  {
    name: "SQLite",
    icon: SiSqlite
  },
  {
    name: "Redux",
    icon: SiRedux
  },
  {
    name: "SpringBoot",
    icon: BiLogoSpringBoot
  },
  {
    name: "Flutter",
    icon: BiLogoFlutter
  },
  {
    name: "Dart",
    icon: SiDart
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs
  },
  {
    name: "Git",
    icon: FaGitAlt
  },
  {
    name: "AWS",
    icon: FaAws
  },
  {
    name: "NodeJS",
    icon: BiLogoNodejs
  },
  {
    name: "Digital Ocean",
    icon: FaDigitalOcean
  },
  {
    name: "Redis",
    icon: SiRedis
  },
  {
    name: "Docker",
    icon: FaDocker
  }, 
  {
    name: "MongoDB",
    icon: SiMongodb
  },
  {
    name: "AngularJS",
    icon: FaAngular
  },
  {
    name: "Neo4J",
    icon: SiNeo4J
  },
  {
    name: "Nginx",
    icon: SiNginx
  },
  {
    name: "ElasticSearch",
    icon: SiElasticsearch
  },
  {
    name: "Postman",
    icon: SiPostman
  }
]

export default programmingLanguages;