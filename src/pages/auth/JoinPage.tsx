import Join from "../../components/auth/Join";
import OauthJoin from "../../components/auth/OauthJoin";

import Layout from "../../layout/Layout";

const JoinPage = () => {
  return (
    <Layout>
      <OauthJoin />
      {/* <Join /> */}
    </Layout>
  );
};

export default JoinPage;
