import { Tooltip } from "react-tooltip";
import {
  mdiLanguagePhp,
  mdiSymfony,
  mdiLanguageJavascript,
  mdiReact,
  mdiLanguageTypescript,
  mdiNodejs,
  mdiApi,
  mdiDocker,
  mdiDatabaseArrowUp,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiSass,
  mdiLanguageJava,
  mdiLanguageCsharp,
  mdiGit,
  mdiGithub,
  mdiGitlab,
} from "@mdi/js";
import Icon from "@mdi/react";
import './skills.scss';

function Skills() {
  return (
    <div>
      <h3>Mes compétences</h3>
      <div className="icon-container">
        <Tooltip id="php-tooltip" />
        <i
          data-tooltip-id="php-tooltip"
          data-tooltip-content="PHP"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguagePhp} size={2} />
        </i>

        <Tooltip id="symfony-tooltip" />
        <i
          data-tooltip-id="symfony-tooltip"
          data-tooltip-content="Symfony"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiSymfony} size={2} />
        </i>

        <Tooltip id="javascript-tooltip" />
        <i
          data-tooltip-id="javascript-tooltip"
          data-tooltip-content="JavaScript"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguageJavascript} size={2} />
        </i>

        <Tooltip id="react-tooltip" />
        <i
          data-tooltip-id="react-tooltip"
          data-tooltip-content="React"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiReact} size={2} />
        </i>

        <Tooltip id="typescript-tooltip" />
        <i
          data-tooltip-id="typescript-tooltip"
          data-tooltip-content="TypeScript"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguageTypescript} size={2} />
        </i>

        <Tooltip id="nodejs-tooltip" />
        <i
          data-tooltip-id="nodejs-tooltip"
          data-tooltip-content="NodeJS"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiNodejs} size={2} />
        </i>

        <Tooltip id="apiplatform-tooltip" />
        <i
          data-tooltip-id="apiplatform-tooltip"
          data-tooltip-content="APIPlatform"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiApi} size={2} />
        </i>

        <Tooltip id="docker-tooltip" />
        <i
          data-tooltip-id="docker-tooltip"
          data-tooltip-content="Docker"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiDocker} size={2} />
        </i>

        <Tooltip id="sql-tooltip" />
        <i
          data-tooltip-id="sql-tooltip"
          data-tooltip-content="SQL"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiDatabaseArrowUp} size={2} />
        </i>

        <Tooltip id="html-tooltip" />
        <i
          data-tooltip-id="html-tooltip"
          data-tooltip-content="HTML"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguageHtml5} size={2} />
        </i>

        <Tooltip id="css-tooltip" />
        <i
          data-tooltip-id="css-tooltip"
          data-tooltip-content="CSS"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguageCss3} size={2} />
        </i>

        <Tooltip id="scss-tooltip" />
        <i
          data-tooltip-id="scss-tooltip"
          data-tooltip-content="SCSS / SASS"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiSass} size={2} />
        </i>

        <Tooltip id="java-tooltip" />
        <i
          data-tooltip-id="java-tooltip"
          data-tooltip-content="Java"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguageJava} size={2} />
        </i>

        <Tooltip id="csharp-tooltip" />
        <i
          data-tooltip-id="csharp-tooltip"
          data-tooltip-content="CSharp"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiLanguageCsharp} size={2} />
        </i>

        <Tooltip id="git-tooltip" />
        <i
          data-tooltip-id="git-tooltip"
          data-tooltip-content="Git"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiGit} size={2} />
        </i>

        <Tooltip id="github-tooltip" />
        <i
          data-tooltip-id="github-tooltip"
          data-tooltip-content="Github"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiGithub} size={2} />
        </i>

        <Tooltip id="gitlab-tooltip" />
        <i
          data-tooltip-id="gitlab-tooltip"
          data-tooltip-content="Gitlab"
          data-tooltip-place="top"
          data-tooltip-offset={35}
        >
          <Icon path={mdiGitlab} size={2} />
        </i>
      </div>
    </div>
  );
}

export default Skills;
