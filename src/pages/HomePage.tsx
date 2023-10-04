import Booking from "../components/booking/Booking";
import Information from "../components/infomation";
import Massage from "../components/massage/Massage";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Booking />
      <Massage />
      <Information />
    </Layout>
  );
};

export default HomePage;
