import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import { Header, Issues, RepositoryInfo } from './styles';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

const Repositories: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GithubExplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/65499965?v=4"
            alt="MatheusTrinca"
          />
          <div>
            <strong>RepositoryName/RepositoryName</strong>
            <p>Repository Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <a href="url do Repo" key="Nome completo do Repo">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasd</p>
          </div>
          <FiChevronsRight />
        </a>
        <a href="url do Repo" key="Nome completo do Repo">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasd</p>
          </div>
          <FiChevronsRight />
        </a>
        <a href="url do Repo" key="Nome completo do Repo">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasd</p>
          </div>
          <FiChevronsRight />
        </a>
      </Issues>
    </>
  );
};

export default Repositories;
