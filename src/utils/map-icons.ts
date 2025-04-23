import AngularIcon from '../assets/icons/angular.svg';
import AzureIcon from '../assets/icons/azure.svg';
import CssIcon from '../assets/icons/css.svg';
import DartIcon from '../assets/icons/dart.svg';
import DockerIcon from '../assets/icons/docker.svg';
import FlutterIcon from '../assets/icons/flutter.svg';
import GoogleCloudIcon from '../assets/icons/google-cloud.svg';
import HtmlIcon from '../assets/icons/html.svg';
import JavaIcon from '../assets/icons/java.svg';
import JavascriptIcon from '../assets/icons/javascript.svg';
import MysqlIcon from '../assets/icons/mysql.svg';
import NextIcon from '../assets/icons/next-js.svg';
import PostgresqlIcon from '../assets/icons/postgresql.svg';
import PythonIcon from '../assets/icons/python.svg';
import ReactIcon from '../assets/icons/react.svg';
import SassIcon from '../assets/icons/sass.svg';
import SqlIcon from '../assets/icons/sql.svg';
import StorybookIcon from '../assets/icons/storybook.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import TypescriptIcon from '../assets/icons/typescript.svg';
import ViteIcon from '../assets/icons/vite.svg';

import CodeIcon from '../assets/icons/code.svg';

type MapIconType = {
    name: string;
    icon: string;
}

const mapIcons: MapIconType[] = [
    { name: 'angular', icon: AngularIcon },
    { name: 'azure', icon: AzureIcon },
    { name: 'css', icon: CssIcon },
    { name: 'dart', icon: DartIcon },
    { name: 'docker', icon: DockerIcon },
    { name: 'flutter', icon: FlutterIcon },
    { name: 'google-cloud', icon: GoogleCloudIcon },
    { name: 'html', icon: HtmlIcon },
    { name: 'java', icon: JavaIcon },
    { name: 'javascript', icon: JavascriptIcon },
    { name: 'mysql', icon: MysqlIcon },
    { name: 'next-js', icon: NextIcon },
    { name: 'postgres', icon: PostgresqlIcon },
    { name: 'python', icon: PythonIcon },
    { name: 'react', icon: ReactIcon },
    { name: 'sass', icon: SassIcon },
    { name: 'sql', icon: SqlIcon },
    { name: 'storybook', icon: StorybookIcon },
    { name: 'tailwind', icon: TailwindIcon },
    { name: 'typescript', icon: TypescriptIcon },
    { name: 'vite', icon: ViteIcon },
]

const getIcon = (name: string): string => {
    const iconObj = mapIcons.filter((item) => item.name === name.toLowerCase())[0];
    if(iconObj !== undefined) return iconObj.icon;
    return CodeIcon;
}

export default getIcon;