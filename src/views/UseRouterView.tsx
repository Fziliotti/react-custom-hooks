import React from "react";
import useRouter from '../hooks/use-router'
import Layout from '../components/Layout'

const UserRouterView = () => {
  const router = useRouter();

  const { pathname } = router;
  // console.log(router.query.postId);

  return (
    <Layout>
      <h1>This page has the pathname: {pathname}</h1>
      <button onClick={e => router.push("/about")}>About</button>
    </Layout>
  );
};

export default UserRouterView;
