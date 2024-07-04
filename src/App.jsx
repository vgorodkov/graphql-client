import { UsersList } from 'components/UsersList';
import { UserCreateForm } from 'components/UserCreateForm';

function App() {
  return (
    <div>
      <UserCreateForm />
      <UsersList />
    </div>
  );
}

export default App;
