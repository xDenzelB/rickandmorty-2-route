import { Switch, Route } from 'react-router-dom';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <CharacterList />
        </Route>
      </Switch>
    </div>
  );
}
