import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { GlobalState, AuthState } from '../store/contexts';
import useLocalStorage from '../hooks/useLocalStorage';
import Layout from '../components/layout';

function HomePage() {
  const { state, dispatch } = useContext(GlobalState);
  const { state2, dispatch2 } = useContext(AuthState);
  const [myLocal, setMyLocal] = useLocalStorage('hello', 'myLocal');

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Image
          src="/nextjs.png"
          alt="Nextjs"
          width={960}
          height={320}
          quality={100}
        />
        <h3>Count:{state.count}</h3>
        <div>
          <button
            type="button"
            aria-label="decrement"
            onClick={() => {
              dispatch({ type: 'DECREMENT', payload: 1 });
            }}
          >
            -1
          </button>
          <button
            type="button"
            aria-label="reset"
            onClick={() => {
              dispatch({ type: 'RESET', payload: 0 });
            }}
          >
            Reset
          </button>
          <button
            type="button"
            aria-label="increment"
            onClick={() => {
              dispatch({ type: 'INCREMENT', payload: 1 });
            }}
          >
            +1
          </button>
        </div>
        <p />
        <label>
          <input
            type="checkbox"
            checked={state2.auth}
            onChange={() => {
              dispatch2({ type: 'AUTH', payload: state2.auth });
            }}
          />
          {state2.auth === false ? 'Login' : 'Logout'}
        </label>
        <p />
        <h3>Text: {myLocal} </h3>
        <label>
          <input onChange={(e) => setMyLocal(e.target.value)} value={myLocal} />
        </label>
      </main>
    </Layout>
  );
}

export default HomePage;
