import { DataProvider } from './providers/DataProvider';
import ReloadButton from './components/ReloadButton';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  return (
    <DataProvider>
      <PostForm/>
      <ReloadButton/>
      <PostList/>
    </DataProvider>
  )
}

export default App
