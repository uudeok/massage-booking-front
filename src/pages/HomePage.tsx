import Booking from '../components/booking/Booking';
import Information from '../components/notice';
import Massage from '../components/program/Massage';
import Layout from '../layout/Layout';

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
