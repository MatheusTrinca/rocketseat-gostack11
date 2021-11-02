import React, { FormEvent, HtmlHTMLAttributes, useState } from 'react';
import { Form, Repositories, Title } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`);
    setRepositories([...repositories, response.data]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a href="teste" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
